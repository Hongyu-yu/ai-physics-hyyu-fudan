# Hongyu Yu - Academic Homepage

A modern, multi-page academic website for Assistant Professor Hongyu Yu at Fudan University.

## Features

- **Multi-page Design**: Home, About, Publications, Research, Recruitment, Contact
- **Internationalization (i18n)**: Full English and Chinese language support
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Auto-updating Scholar Data**: GitHub Actions workflow to fetch latest Google Scholar metrics
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, shadcn/ui

## Pages

1. **Home** - Hero section with key stats and quick links
2. **About** - Biography, education, research interests
3. **Publications** - Filterable publication list with Google Scholar integration
4. **Research** - Research areas and software projects
5. **Recruitment** - PhD and Postdoc position information
6. **Contact** - Contact information and external links

## GitHub Pages Deployment

### 1. Create Repository

Create a new GitHub repository named `hongyu-yu.github.io` or your preferred name.

### 2. Push Code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hongyu-yu.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. The deployment workflow will run automatically

### 4. Custom Domain (Optional)

1. Add a `CNAME` file in the repository root with your domain:
   ```
   hongyu-yu.fudan.edu.cn
   ```
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## GitHub Actions Workflows

### Auto-deploy to GitHub Pages

The `.github/workflows/deploy.yml` workflow automatically builds and deploys the website on every push to main branch.

### Auto-update Google Scholar Data

The `.github/workflows/update-scholar-data.yml` workflow runs weekly to fetch the latest citation metrics from Google Scholar and update the source files.

**Note**: The scholar data update uses the `scholarly` Python library. Due to Google Scholar's anti-scraping measures, you may need to:
- Use a proxy or VPN for the GitHub Actions runner
- Or manually update the data in the source files

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── .github/workflows/     # GitHub Actions workflows
├── src/
│   ├── components/        # Reusable components
│   ├── contexts/          # React contexts (Theme)
│   ├── i18n/             # Internationalization
│   │   ├── locales/      # Translation files
│   │   └── index.ts      # i18n configuration
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app with routing
│   └── main.tsx          # Entry point
├── public/               # Static assets
└── vite.config.ts        # Vite configuration
```

## Customization

### Update Personal Information

Edit the following files to update your information:
- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/zh.json` - Chinese translations
- `src/pages/*.tsx` - Page content and scholar data

### Update Google Scholar Data Manually

Edit the `scholarData` object in:
- `src/pages/Home.tsx`
- `src/pages/Publications.tsx`
- `src/pages/Contact.tsx`

### Add New Publications

Edit the `publications` array in `src/pages/Publications.tsx`.

## License

MIT License - feel free to use this template for your own academic website.

## Credits

Built with:
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [i18next](https://www.i18next.com/)
