import React from 'react';
import { Sparkles, ArrowRight, Activity, ShieldCheck, Zap, Bot } from 'lucide-react';
import { sound } from '../../utils/sound';

interface HeroSectionProps {
  onExploreUniverse: () => void;
  onDiscoverWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreUniverse, onDiscoverWork }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 md:px-8 z-10">
      
      {/* Top Telemetry Ticker */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 font-mono-code text-[11px] text-white/50 tracking-widest uppercase border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#00f0ff]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            CORE ACTIVE
          </span>
          <span className="text-white/20">|</span>
          <span className="text-white/70">LATENCY: 12ms</span>
          <span className="text-white/20">|</span>
          <span className="text-white/70">NEURAL REASONING: DEEPSEEK &amp; CLAUDE ORCHESTRATION</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#d4af37] font-semibold">SWARM ENGINE v4.2</span>
          <span className="text-white/20">|</span>
          <span className="text-white/60">AUTONOMOUS DECISION RATIO: 99.8%</span>
        </div>
      </div>

      {/* Center Cinematic Typography */}
      <div className="max-w-5xl mx-auto w-full text-center my-auto py-12 flex flex-col items-center">
        
        {/* Futuristic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#00f0ff]/30 text-[#00f0ff] font-mono-code text-xs tracking-widest uppercase mb-8 glow-blue">
          <Bot className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
          <span>AHSAN ZAMAN // AGENTIC AI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
        </div>

        {/* Main Giant Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-black tracking-tighter uppercase leading-[0.9] mb-6">
          <span className="block text-white">THE FUTURE IS</span>
          <span className="block text-blue-gradient glow-text-blue">AUTONOMOUS.</span>
        </h1>

        {/* Cinematic Subheadline with Instrument Serif Accent */}
        <p className="max-w-2xl text-lg sm:text-2xl text-white/80 font-normal leading-relaxed mb-4">
          Meet Agentic AI. Intelligence that{' '}
          <span className="font-serif-italic text-2xl sm:text-3xl text-gold-gradient font-light">
            thinks, decides,
          </span>{' '}
          and takes autonomous action.
        </p>

        <p className="font-mono-code text-xs sm:text-sm text-[#d4af37] tracking-widest uppercase font-semibold mb-10">
          "Beyond Automation. Into Intelligence."
        </p>

        {/* Dual High-Impact Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              sound.playActivate();
              onExploreUniverse();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#00f0ff] via-[#00a2ff] to-[#0070f3] text-black font-sans font-bold text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_35px_rgba(0,240,255,0.45)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-45 transition-transform" />
            <span>Explore My AI Universe</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onDiscoverWork();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel-gold text-white font-sans font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all border border-[#d4af37]/40 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discover My Work</span>
            <span className="text-[#d4af37] font-mono-code text-xs font-bold">[6 CASES]</span>
          </button>
        </div>

      </div>

      {/* Bottom Telemetry Floating Cards */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans pt-8 border-t border-white/5">
        
        <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 border border-white/10 hover:border-[#00f0ff]/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono-code text-xs text-[#00f0ff] uppercase tracking-wider font-semibold">Zero Human Lag</div>
            <div className="text-white text-sm font-bold">Sub-Second Execution</div>
            <div className="text-xs text-white/50">Autonomous tool calls &amp; API dispatch</div>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 border border-white/10 hover:border-[#d4af37]/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono-code text-xs text-[#d4af37] uppercase tracking-wider font-semibold">Agentic Swarms</div>
            <div className="text-white text-sm font-bold">Self-Correcting Loops</div>
            <div className="text-xs text-white/50">Reflective reasoning &amp; error recovery</div>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-2xl flex items-center gap-4 border border-white/10 hover:border-[#00f0ff]/30 transition-all">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono-code text-xs text-white/70 uppercase tracking-wider font-semibold">Enterprise Grade</div>
            <div className="text-white text-sm font-bold">Deterministic Workflows</div>
            <div className="text-xs text-white/50">n8n, LangChain, Custom MCP backends</div>
          </div>
        </div>

      </div>

    </section>
  );
};
