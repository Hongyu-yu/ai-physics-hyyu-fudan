#!/usr/bin/env python3
"""Fetch Google Scholar data for Hongyu Yu and write to JSON."""

import json
import sys
import os
from pathlib import Path

SCHOLAR_ID = "ES83JO4AAAAJ"
OUTPUT_PATH = Path(__file__).parent.parent / "app" / "src" / "data" / "scholar-data.json"

# Journals considered "top" for the topJournals count (exact match patterns)
TOP_JOURNAL_PATTERNS = [
    "physical review letters",
    "advanced materials",
]
# These need exact match to avoid "Nature Communications" or "Science China"
TOP_JOURNAL_EXACT = ["nature", "science"]


def fetch_scholar_data():
    from scholarly import scholarly

    author = scholarly.search_author_id(SCHOLAR_ID)
    author = scholarly.fill(author, sections=["basics", "indices", "publications"])

    stats = {
        "citations": author.get("citedby", 0),
        "hIndex": author.get("hindex", 0),
        "i10Index": author.get("i10index", 0),
    }

    publications = []
    first_author_count = 0
    top_journal_count = 0

    for pub in author.get("publications", []):
        filled = scholarly.fill(pub)
        bib = filled.get("bib", {})

        title = bib.get("title", "")
        authors = bib.get("author", "")
        journal = bib.get("journal", bib.get("venue", ""))
        year = int(bib.get("pub_year", 0))
        cited_by = filled.get("num_citations", 0)
        pub_url = filled.get("pub_url", "")

        # Detect if Hongyu Yu is first author (or co-first with #)
        author_list = authors.split(" and ") if " and " in authors else authors.split(", ")
        is_first = False
        for i, a in enumerate(author_list[:2]):
            if "yu" in a.lower() and ("hong" in a.lower() or "h " in a.lower()):
                is_first = True
                break

        if is_first:
            first_author_count += 1

        # Detect top journal (by journal name or URL fallback)
        journal_lower = journal.lower().strip()
        is_top = any(pat in journal_lower for pat in TOP_JOURNAL_PATTERNS)
        if not is_top:
            is_top = journal_lower in TOP_JOURNAL_EXACT
        # URL-based fallback for when journal field is empty
        if not is_top and pub_url:
            url_lower = pub_url.lower()
            if any(pat in url_lower for pat in ["adma.", "advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adma"]):
                is_top = True
                journal = "Advanced Materials"
        if is_top:
            top_journal_count += 1

        # Determine type
        pub_type = "preprint" if "arxiv" in journal.lower() or "preprint" in journal.lower() else "journal"

        # Determine category based on title/journal keywords
        title_lower = title.lower()
        if any(kw in title_lower for kw in ["neural network", "machine learning", "graph neural",
                                              "deep learning", "gnn", "spin-dependent graph",
                                              "kolmogorov", "tensor prediction", "hamiltonian prediction",
                                              "transferable", "descriptor", "kan "]):
            category = "ml"
        elif any(kw in title_lower for kw in ["multiferroic", "magnetoelectric", "magnetic transition",
                                               "moir", "twisted", "spin-lattice", "nii"]):
            category = "multiferroic"
        elif any(kw in title_lower for kw in ["ferroelectric", "ferroelectricity", "hfo",
                                               "domain wall", "sliding", "silicon thin"]):
            category = "ferroelectric"
        else:
            category = "ml"

        publications.append({
            "title": title,
            "authors": authors,
            "journal": journal,
            "year": year,
            "citations": cited_by,
            "link": pub_url,
            "type": pub_type,
            "highlight": is_top,
            "category": category,
            "isFirstAuthor": is_first,
        })

    # Sort by year desc, then citations desc
    publications.sort(key=lambda x: (-x["year"], -x["citations"]))

    stats["publications"] = len(publications)
    stats["firstAuthor"] = first_author_count
    stats["topJournals"] = top_journal_count

    return {"stats": stats, "publications": publications}


def main():
    print(f"Fetching Google Scholar data for author ID: {SCHOLAR_ID}")

    try:
        data = fetch_scholar_data()
    except Exception as e:
        print(f"Error fetching data: {e}", file=sys.stderr)
        # If fetch fails and existing data exists, keep it
        if OUTPUT_PATH.exists():
            print("Keeping existing data file.")
            sys.exit(0)
        sys.exit(1)

    # Add metadata
    from datetime import datetime, timezone
    data["lastUpdated"] = datetime.now(timezone.utc).isoformat()

    os.makedirs(OUTPUT_PATH.parent, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Stats: {data['stats']}")
    print(f"Publications: {len(data['publications'])} papers")
    print(f"Written to: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
