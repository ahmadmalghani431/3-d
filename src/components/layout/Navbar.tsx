import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { sound } from '../../utils/sound';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());

  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sound.setMuted(nextMuted);
  };

  const handleClick = (id: string) => {
    sound.playClick();
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-3 rounded-full border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40">
        
        {/* Brand */}
        <div 
          onClick={() => handleClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#00f0ff]/30 via-black to-[#d4af37]/30 border border-white/20 flex items-center justify-center overflow-hidden group-hover:border-[#00f0ff] transition-all">
            <Cpu className="w-4 h-4 text-[#00f0ff] group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-[#00f0ff]/10 rounded-full animate-ping opacity-25" />
          </div>
          <div>
            <div className="font-sans font-bold text-sm tracking-widest uppercase text-white flex items-center gap-1.5">
              <span>MUHAMMAD AHMAD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            </div>
            <div className="font-mono-code text-[10px] tracking-wider text-[#d4af37] uppercase font-semibold">
              AGENTIC AI // ARCHITECT
            </div>
          </div>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono-code tracking-wider uppercase text-white/70">
          <button 
            onClick={() => handleClick('chapters')}
            className="hover:text-[#00f0ff] transition-colors"
          >
            01// Chapters
          </button>
          <button 
            onClick={() => handleClick('command-center')}
            className="hover:text-[#00f0ff] transition-colors flex items-center gap-1"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
            02// Command Center
          </button>
          <button 
            onClick={() => handleClick('technologies')}
            className="hover:text-[#00f0ff] transition-colors"
          >
            03// Tech Stack
          </button>
          <button 
            onClick={() => handleClick('projects')}
            className="hover:text-[#00f0ff] transition-colors"
          >
            04// Projects
          </button>
          <button 
            onClick={() => handleClick('contact')}
            className="hover:text-[#00f0ff] transition-colors"
          >
            05// Contact
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleToggleSound}
            className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-code transition-all border ${
              isMuted
                ? 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/20'
                : 'bg-[#00f0ff]/10 border-[#00f0ff]/40 text-[#00f0ff] glow-blue'
            }`}
            title={isMuted ? 'Turn Sound On (Generative Audio)' : 'Mute Sound'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AUDIO: OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span className="hidden sm:inline">AUDIO: ON</span>
                <span className="flex gap-0.5 items-end h-2.5">
                  <span className="w-0.5 h-full bg-[#00f0ff] animate-bounce" />
                  <span className="w-0.5 h-2/3 bg-[#00f0ff] animate-bounce delay-75" />
                  <span className="w-0.5 h-4/5 bg-[#00f0ff] animate-bounce delay-150" />
                </span>
              </>
            )}
          </button>

          {/* Quick CTA */}
          <button
            onClick={() => handleClick('contact')}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa841f] text-black text-xs font-sans font-bold uppercase tracking-wider hover:opacity-90 transition-all glow-gold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
