import React, { useState } from 'react';
import { 
  Brain, Share2, GitBranch, Sparkles, Network, 
  ChevronRight, ArrowRight, CheckCircle2, Database, Mail, 
  FileSpreadsheet, Globe, Server, Layers, Cpu, Compass
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface ScrollChaptersProps {
  activeChapter: number;
  onSelectChapter: (index: number) => void;
}

export const ScrollChapters: React.FC<ScrollChaptersProps> = ({ activeChapter, onSelectChapter }) => {
  const [selectedSubTab, setSelectedSubTab] = useState<number>(0);

  const chapters = [
    {
      id: 'think',
      number: '01',
      tag: 'COGNITIVE SYNTHESIS',
      title: 'THINK',
      headline: 'Not Just AI. Intelligent Thinking.',
      description:
        'Traditional AI mimics patterns. Agentic AI evaluates contexts, breaks complex objectives into sub-goals, simulates outcomes, and reasons across multi-step chains before committing to an action.',
      metrics: [
        { label: 'Reasoning Depth', value: 'Multi-Tree Search' },
        { label: 'Synaptic Density', value: '1.8T Weights' },
        { label: 'Evaluation Speed', value: '180 ops/sec' }
      ],
      visualNodes: [
        { label: 'Goal Decomposition', desc: 'Breaks complex prompts into verified steps', active: true },
        { label: 'Self-Critique Engine', desc: 'Evaluates drafts & removes hallucinations', active: true },
        { label: 'Dynamic Memory Cache', desc: 'Persistent state across agent dialogues', active: false },
        { label: 'Adaptive Tool Selector', desc: 'Matches optimal APIs to live requirements', active: true }
      ],
      icon: Brain,
      accent: 'blue'
    },
    {
      id: 'connect',
      number: '02',
      tag: 'UNIVERSAL INTEGRATION',
      title: 'CONNECT',
      headline: 'Everything Connected. One Intelligent System.',
      description:
        'Silos are eliminated. The agent sits at the crossroad of your digital ecosystem—orchestrating Gmail, Google Sheets, REST APIs, PostgreSQL databases, web scrapers, and enterprise ERPs in real-time.',
      apps: [
        { name: 'Gmail', icon: Mail, type: 'Event Trigger & Draft Engine', ping: '9ms' },
        { name: 'Google Sheets', icon: FileSpreadsheet, type: 'Live Telemetry & CRM Log', ping: '14ms' },
        { name: 'Custom REST APIs', icon: Globe, type: 'Bidirectional Webhooks', ping: '18ms' },
        { name: 'SQL & Vector DBs', icon: Database, type: 'Semantic Memory Retrieval', ping: '6ms' },
        { name: 'Headless Web', icon: Server, type: 'Autonomous Scraping & Form Fill', ping: '24ms' },
        { name: 'Enterprise SaaS', icon: Layers, type: 'Slack, Stripe, HubSpot Sync', ping: '12ms' }
      ],
      metrics: [
        { label: 'API Endpoints', value: '450+ Integrated' },
        { label: 'Sync Latency', value: '< 20ms' },
        { label: 'Data Throughput', value: '1.2 GB/hr' }
      ],
      icon: Share2,
      accent: 'gold'
    },
    {
      id: 'automate',
      number: '03',
      tag: 'AUTONOMOUS EXECUTION',
      title: 'AUTOMATE',
      headline: 'From Repetitive Tasks to Autonomous Workflows.',
      description:
        'Replace brittle static scripts with resilient, self-healing agentic workflows. When an external API changes or returns an unexpected schema, the agent adjusts parameters autonomously and completes the task.',
      workflowSteps: [
        { step: '01', name: 'Trigger Event', desc: 'New inquiry webhook arrives via Typeform / Stripe', status: 'Completed' },
        { step: '02', name: 'Cognitive Parsing', desc: 'LLM agent evaluates intent, sentiment & priority score', status: 'Completed' },
        { step: '03', name: 'Enrichment Loop', desc: 'Autonomous web search retrieves LinkedIn & company data', status: 'Completed' },
        { step: '04', name: 'Decision Gateway', desc: 'Routes to High-Value Enterprise Pipeline or Automated Onboarding', status: 'Active' },
        { step: '05', name: 'Execution & Dispatch', desc: 'Creates personalized PDF proposal & notifies executive Slack channel', status: 'Queued' }
      ],
      metrics: [
        { label: 'Manual Hours Saved', value: '94.6%' },
        { label: 'Error Recovery', value: 'Self-Healing' },
        { label: 'Uptime SLA', value: '99.99%' }
      ],
      icon: GitBranch,
      accent: 'blue'
    },
    {
      id: 'create',
      number: '04',
      tag: 'GENERATIVE MULTI-MODAL',
      title: 'CREATE',
      headline: 'Imagine It. AI Builds It.',
      description:
        'A full-spectrum creative and development studio powered by multi-modal diffusion, video generation, vector graphics, code synthesis, and automated publishing directly to production endpoints.',
      creativePillars: [
        { title: 'Generative Imagery', desc: 'Midjourney & Flux-level visual identity assets created in 4K', stat: 'Photo-Realistic' },
        { title: 'Video Synthesis', desc: 'Cinematic brand reels generated with motion-tracked camera paths', stat: '60 FPS Cinematic' },
        { title: 'Intelligent Research', desc: 'Automated 40-page technical whitepaper generation with citations', stat: 'Zero Halftone' },
        { title: 'Multi-Channel Publishing', desc: 'Instant formatting for LinkedIn, X, YouTube, and Web platforms', stat: 'Autonomous' }
      ],
      metrics: [
        { label: 'Production Speed', value: '12x Velocity' },
        { label: 'Multi-Modal Pipelines', value: 'Text / Img / Video' },
        { label: 'Output Fidelity', value: 'Studio Grade' }
      ],
      icon: Sparkles,
      accent: 'gold'
    },
    {
      id: 'future',
      number: '05',
      tag: 'MULTI-AGENT SWARM',
      title: 'AGENTIC FUTURE',
      headline: 'One Vision. Infinite Possibilities.',
      description:
        'The ultimate evolution: specialized AI agents acting as an autonomous corporate department. Each agent possesses domain mastery, collaborating via peer-to-peer message boards to solve complex enterprise missions.',
      swarmUnits: [
        { role: 'Research Agent', specialty: 'Market intelligence, competitor telemetry, citation analysis', status: 'OPTIMIZING' },
        { role: 'Marketing Agent', specialty: 'Ad copywriting, conversion heuristics, audience persona mapping', status: 'MONITORING' },
        { role: 'Automation Agent', specialty: 'n8n pipelines, webhook listeners, database transactions', status: 'EXECUTING' },
        { role: 'Content Agent', specialty: 'Graphic asset generation, editorial voice consistency, SEO', status: 'SYNTHESIZING' },
        { role: 'Business Intelligence Agent', specialty: 'Cohort revenue models, churn prediction, KPI alerts', status: 'AUDITING' }
      ],
      metrics: [
        { label: 'Swarm Orchestration', value: 'Hierarchical' },
        { label: 'Consensus Protocol', value: 'Reflective Voting' },
        { label: 'System Scalability', value: 'Infinite Nodes' }
      ],
      icon: Network,
      accent: 'blue'
    }
  ];

  const current = chapters[activeChapter] || chapters[0];

  return (
    <section id="chapters" className="relative min-h-screen py-24 px-4 md:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="font-mono-code text-xs text-[#00f0ff] uppercase tracking-widest font-semibold flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
              CINEMATIC SCROLL ARCHITECTURE // CHAPTERS
            </div>
            <h2 className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tight text-white">
              JOURNEY INTO <span className="text-gold-gradient">THE CORE.</span>
            </h2>
          </div>
          
          {/* Chapter Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {chapters.map((ch, idx) => {
              const isActive = activeChapter === idx;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    sound.playTransition();
                    onSelectChapter(idx);
                  }}
                  className={`px-4 py-2 rounded-full font-mono-code text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00f0ff] to-[#0070f3] text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                      : 'glass-panel text-white/60 hover:text-white hover:border-white/30'
                  }`}
                >
                  <span>{ch.number}</span>
                  <span className="hidden sm:inline">{ch.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chapter Cinematic Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono-code text-xs text-[#d4af37] tracking-widest uppercase">
              <current.icon className="w-3.5 h-3.5" />
              <span>CHAPTER {current.number} // {current.tag}</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white uppercase leading-tight">
              {current.headline}
            </h3>

            <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed">
              {current.description}
            </p>

            {/* Telemetry Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl glass-panel border border-white/10 mt-2">
              {current.metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-mono-code text-[10px] text-white/40 uppercase tracking-wider">{m.label}</span>
                  <span className="font-sans font-bold text-sm sm:text-base text-white mt-1">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Quick Navigation to next chapter */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => {
                  sound.playTransition();
                  onSelectChapter((activeChapter + 1) % chapters.length);
                }}
                className="inline-flex items-center gap-2 text-xs font-mono-code text-[#00f0ff] hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Advance to next chapter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Interactive Visualization for this Chapter */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-2xl">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Chapter Status Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono-code text-xs text-white/50 tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                <span className="text-[#00f0ff] font-semibold">VIEWPORT: {current.title} VISUALIZER</span>
              </div>
              <span>MODE: 3D REAL-TIME SYNCHRONIZED</span>
            </div>

            {/* Chapter 01 Content (THINK) */}
            {activeChapter === 0 && (
              <div className="flex flex-col gap-4">
                <div className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-1">
                  Cognitive Reasoning Decomposition:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.visualNodes?.map((node, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-[#00f0ff]/40 transition-all flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono-code text-xs text-[#00f0ff] font-bold">NODE // 0{i + 1}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      </div>
                      <div className="font-sans font-bold text-white text-sm">{node.label}</div>
                      <div className="font-sans text-xs text-white/50 mt-1">{node.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chapter 02 Content (CONNECT) */}
            {activeChapter === 1 && (
              <div className="flex flex-col gap-4">
                <div className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-1">
                  Active Ecosystem Bridge Interfaces:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.apps?.map((app, i) => {
                    const Icon = app.icon;
                    return (
                      <div 
                        key={i}
                        className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-[#d4af37]/40 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-sans font-bold text-white text-sm">{app.name}</div>
                            <div className="font-sans text-[11px] text-white/50">{app.type}</div>
                          </div>
                        </div>
                        <span className="font-mono-code text-[10px] text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded-full">
                          {app.ping}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chapter 03 Content (AUTOMATE) */}
            {activeChapter === 2 && (
              <div className="flex flex-col gap-3">
                <div className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-1">
                  Live Autonomous Pipeline State:
                </div>
                <div className="flex flex-col gap-2.5">
                  {current.workflowSteps?.map((ws, i) => (
                    <div 
                      key={i}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-4 transition-all ${
                        ws.status === 'Active'
                          ? 'bg-[#00f0ff]/10 border-[#00f0ff]/40'
                          : 'bg-black/40 border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono-code text-xs font-bold text-[#d4af37] w-6">{ws.step}</span>
                        <div>
                          <div className="font-sans font-bold text-white text-xs sm:text-sm">{ws.name}</div>
                          <div className="font-sans text-[11px] text-white/50">{ws.desc}</div>
                        </div>
                      </div>
                      <span className={`font-mono-code text-[10px] px-2.5 py-1 rounded-full uppercase font-semibold ${
                        ws.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : ws.status === 'Active'
                          ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 animate-pulse'
                          : 'bg-white/5 text-white/40'
                      }`}>
                        {ws.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chapter 04 Content (CREATE) */}
            {activeChapter === 3 && (
              <div className="flex flex-col gap-4">
                <div className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-1">
                  Generative Studio Synthesis Matrix:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.creativePillars?.map((p, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono-code text-xs text-[#d4af37] font-semibold">{p.stat}</span>
                          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                        </div>
                        <div className="font-sans font-bold text-white text-sm">{p.title}</div>
                        <div className="font-sans text-xs text-white/50 mt-1">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chapter 05 Content (AGENTIC FUTURE) */}
            {activeChapter === 4 && (
              <div className="flex flex-col gap-3">
                <div className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-1">
                  Autonomous Swarm Task Roster:
                </div>
                <div className="flex flex-col gap-2">
                  {current.swarmUnits?.map((unit, i) => (
                    <div 
                      key={i}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-[#00f0ff]/40 transition-all flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="font-sans font-bold text-white text-sm flex items-center gap-2">
                          <span>{unit.role}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                        </div>
                        <div className="font-sans text-xs text-white/50 mt-0.5">{unit.specialty}</div>
                      </div>
                      <span className="font-mono-code text-[10px] text-[#00f0ff] bg-[#00f0ff]/10 border border-[#00f0ff]/20 px-2 py-0.5 rounded-full font-semibold">
                        {unit.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
