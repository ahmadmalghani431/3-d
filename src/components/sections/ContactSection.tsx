import React, { useState } from 'react';
import { 
  Send, Mail, Phone, 
  Sparkles, CheckCircle, ArrowRight, ShieldAlert 
} from 'lucide-react';

// Inline LinkedIn SVG (not in this lucide-react version)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { sound } from '../../utils/sound';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'Autonomous Multi-Agent Swarm',
    budget: '$10k - $25k',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'IDLE' | 'SENDING' | 'DEMO_SUBMITTED'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playActivate();
    setFormStatus('SENDING');

    setTimeout(() => {
      sound.playClick();
      setFormStatus('DEMO_SUBMITTED');
    }, 900);
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 px-4 md:px-8 z-10 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#d4af37]/40 text-[#d4af37] font-mono-code text-xs tracking-widest uppercase mb-4 glow-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INITIATE ENGAGEMENT // DIRECT ACCESS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black uppercase tracking-tight text-white mb-4">
            LET'S BUILD THE <span className="text-gold-gradient">FUTURE TOGETHER.</span>
          </h2>

          <p className="font-serif-italic text-xl sm:text-2xl text-white/70 max-w-xl mx-auto leading-relaxed">
            Have an idea? Let's transform it into an intelligent, self-executing autonomous solution.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Links & Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col gap-6">
              <div>
                <h3 className="font-sans font-bold text-xl text-white uppercase tracking-tight mb-2">
                  M AHMAD
                </h3>
                <div className="font-mono-code text-xs text-[#00f0ff] uppercase tracking-wider font-semibold">
                  Founder &amp; Principal AI Architect
                </div>
                <p className="font-sans text-xs text-white/60 mt-2 leading-relaxed">
                  Specializing in enterprise agentic swarms, resilient n8n pipelines, and intelligent operational automation.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                
                {/* Email */}
                <a
                  href="mailto:contact@muhammadahmad.ai"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00f0ff]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono-code text-[10px] text-white/40 uppercase">Direct Email</div>
                      <div className="font-sans text-xs sm:text-sm text-white group-hover:text-[#00f0ff] transition-colors">
                        contact@muhammadahmad.ai
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#00f0ff] group-hover:translate-x-1 transition-all" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/muhammad-ahmad-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4af37]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono-code text-[10px] text-white/40 uppercase">Professional Network</div>
                      <div className="font-sans text-xs sm:text-sm text-white group-hover:text-[#d4af37] transition-colors">
                        linkedin.com/in/muhammad-ahmad-ai
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono-code text-[10px] text-white/40 uppercase">Instant Messenger</div>
                      <div className="font-sans text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors">
                        +92 300 0000000 [WhatsApp]
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </a>

              </div>

              {/* Response SLA */}
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-center font-mono-code text-[11px] text-[#00f0ff]">
                AVERAGE AGENTIC RESPONSE LATENCY: &lt; 2 HOURS
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-2xl relative">
            
            {/* MANDATORY FRONTEND DEMO NOTICE */}
            <div className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="font-sans text-xs text-amber-200/90 leading-relaxed">
                <strong>DEMO STATUS NOTICE:</strong> This form demonstrates the interactive frontend consultation interface. Form submission simulates client onboarding telemetry and does not transmit live network messages.
              </div>
            </div>

            {formStatus === 'DEMO_SUBMITTED' ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-sans font-bold text-2xl text-white uppercase tracking-tight mb-2">
                  Consultation Demo Recorded
                </h3>
                <p className="font-sans text-sm text-white/70 max-w-md mb-6 leading-relaxed">
                  Thank you for testing the interactive interface! The agent simulation received your payload for{' '}
                  <span className="text-[#00f0ff] font-semibold">{formData.name || 'Enterprise Client'}</span>.
                </p>
                <button
                  onClick={() => setFormStatus('IDLE')}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-code text-xs text-white/60 uppercase tracking-wider mb-1.5">
                      Your Name / Enterprise
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#00f0ff] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-white/60 uppercase tracking-wider mb-1.5">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="elena@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#00f0ff] transition-colors"
                    />
                  </div>
                </div>

                {/* Scope & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-code text-xs text-white/60 uppercase tracking-wider mb-1.5">
                      Solution Architecture
                    </label>
                    <select
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00f0ff] transition-colors"
                    >
                      <option value="Autonomous Multi-Agent Swarm">Autonomous Multi-Agent Swarm</option>
                      <option value="Custom n8n Enterprise Pipeline">Custom n8n Enterprise Pipeline</option>
                      <option value="LLM Vector Knowledge Base">LLM Vector Knowledge Base</option>
                      <option value="Full-Stack AI Application">Full-Stack AI Application</option>
                      <option value="Executive AI Advisory">Executive AI Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono-code text-xs text-white/60 uppercase tracking-wider mb-1.5">
                      Estimated Project Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00f0ff] transition-colors"
                    >
                      <option value="< $10k">&lt; $10k (Pilot Sprint)</option>
                      <option value="$10k - $25k">$10k - $25k (Production System)</option>
                      <option value="$25k - $50k">$25k - $50k (Enterprise Swarm)</option>
                      <option value="$50k+">$50k+ (Transformational Roadmap)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono-code text-xs text-white/60 uppercase tracking-wider mb-1.5">
                    Objective Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the repetitive workflow, API bottlenecks, or autonomous agent capability you want to build..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#00f0ff] transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={formStatus === 'SENDING'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa841f] text-black font-sans font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer glow-gold mt-2"
                >
                  {formStatus === 'SENDING' ? (
                    <span>Processing Demo Submission...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Project Request</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Master Brand Message Banner */}
        <div className="mt-24 pt-16 border-t border-white/10 text-center max-w-4xl mx-auto">
          <div className="font-mono-code text-xs text-[#00f0ff] uppercase tracking-widest font-bold mb-2">
            FINAL BRAND CREDO
          </div>
          <div className="text-2xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-white uppercase leading-tight">
            M AHMAD // AGENTIC AI
          </div>
          <p className="font-serif-italic text-xl sm:text-3xl text-gold-gradient mt-2 font-light">
            "Building the next generation of intelligent automation."
          </p>
        </div>

      </div>

      {/* Footer System Credits */}
      <footer className="mt-16 pt-8 border-t border-white/5 font-mono-code text-xs text-white/40 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto w-full">
        <div>
          &copy; {new Date().getFullYear()} M AHMAD. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/70">ALL AGENTIC SYSTEMS NOMINAL</span>
        </div>
        <div>
          LOCALLY COMPILED ON VITE // THREE.JS ENGINE
        </div>
      </footer>
    </section>
  );
};
