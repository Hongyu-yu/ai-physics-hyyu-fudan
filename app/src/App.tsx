import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import Research from './pages/Research';
import Recruitment from './pages/Recruitment';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
