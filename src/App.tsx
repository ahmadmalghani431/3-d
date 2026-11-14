import { useState, useEffect } from 'react';
import { CinematicCanvas } from './components/canvas/CinematicCanvas';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ScrollChapters } from './components/sections/ScrollChapters';
import { CommandCenter } from './components/sections/CommandCenter';
import { TechShowcase } from './components/sections/TechShowcase';
import { ProjectsGallery } from './components/sections/ProjectsGallery';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? Math.min(Math.max(currentScroll / totalScroll, 0), 1) : 0;
      setScrollProgress(progress);

      // Dynamically align active 3D mode with scroll position if user scrolls naturally
      const chaptersEl = document.getElementById('chapters');
      if (chaptersEl) {
        const rect = chaptersEl.getBoundingClientRect();
        // If chapters section is in viewport
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
          // Keep activeChapter in range
        } else if (window.scrollY < window.innerHeight * 0.4) {
          setActiveChapter(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030305] text-[#f0f0f5] selection:bg-[#00f0ff]/30 selection:text-[#00f0ff] cyber-grid">
      
      {/* 3D WebGL Background Canvas */}
      <CinematicCanvas currentChapter={activeChapter} scrollProgress={scrollProgress} />

      {/* Persistent Navigation Bar with Generative Audio Synthesizer Toggle */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Layers */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Hero AI Reveal */}
        <HeroSection 
          onExploreUniverse={() => scrollToSection('chapters')}
          onDiscoverWork={() => scrollToSection('projects')}
        />

        {/* Section 2: Pinned 3D Scroll Chapters (Think, Connect, Automate, Create, Agentic Future) */}
        <ScrollChapters 
          activeChapter={activeChapter}
          onSelectChapter={(idx) => {
            setActiveChapter(idx);
            // Optionally scroll to chapter section
            scrollToSection('chapters');
          }}
        />

        {/* Section 3: Interactive AI Command Center */}
        <CommandCenter />

        {/* Section 4: 3D Floating Tech Showcase */}
        <TechShowcase />

        {/* Section 5: Projects Portfolio Gallery */}
        <ProjectsGallery />

        {/* Section 6: Contact & Master Brand Credo */}
        <ContactSection />
      </main>

    </div>
  );
}

export default App;
