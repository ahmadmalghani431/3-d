import React, { useState, useEffect } from 'react';
import { 
  Bot, Terminal, Play, Pause, RefreshCw, CheckCircle2, 
  Search, Megaphone, Workflow, Palette, LineChart, Cpu, AlertCircle, ArrowRight
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface AgentData {
  id: string;
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'ONLINE' | 'EXECUTING' | 'OPTIMIZING' | 'STANDBY';
  description: string;
  exampleTask: string;
  workflow: string[];
  simulatedLogs: string[];
}

export const CommandCenter: React.FC = () => {
  const agents: AgentData[] = [
    {
      id: 'research',
      name: 'Research Agent',
      tagline: 'Deep Document Synthesis & Market Telemetry',
      icon: Search,
      status: 'ONLINE',
      description:
        'Scours unstructured web sources, technical documentation, academic papers, and financial filings. Synthesizes findings with cross-referenced citation graphs.',
      exampleTask:
        'Synthesize 400 competitor patent filings in Autonomous Robotics & extract core IP threats.',
      workflow: [
        '1. Ingest query & expand keyword vector permutations',
        '2. Fetch & parse multi-source PDF/HTML documents',
        '3. Cross-validate technical claims with arXiv benchmarks',
        '4. Compile executive intelligence report with confidence scores'
      ],
      simulatedLogs: [
        '[03:14:02] INITIALIZING: Vector search space expanded (3,400 embeddings)',
        '[03:14:03] FETCHING: Retrieved 42 patent disclosures from WIPO database',
        '[03:14:04] ANALYSIS: Detected 3 overlapping kinematic claim structures',
        '[03:14:05] SYNTHESIS: Confidence interval: 98.4%. Report compiled.'
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Agent',
      tagline: 'Audience Persona & Conversion Heuristics',
      icon: Megaphone,
      status: 'ONLINE',
      description:
        'Monitors social signals, trend volatility, and ad campaign CAC. Continuously writes and A/B tests hooks, landing page copies, and nurture sequences.',
      exampleTask:
        'Generate and test 12 high-converting LinkedIn hooks targeting B2B CTOs & simulate CTR.',
      workflow: [
        '1. Analyze trending developer keywords & sentiment volatility',
        '2. Generate multi-framework copy variants (AIDA, PAS, Story)',
        '3. Simulate engagement scores against historical persona models',
        '4. Schedule winning hook to buffer queue with personalized image'
      ],
      simulatedLogs: [
        '[03:14:08] STREAMING: Listening to 14 tech subreddits & developer feeds',
        '[03:14:09] EVALUATING: Persona matching: "Head of Infrastructure"',
        '[03:14:10] SIMULATION: Hook variant #4 achieved predicted 8.7% CTR',
        '[03:14:11] DISPATCH: Queued to multi-channel deployment pipeline'
      ]
    },
    {
      id: 'automation',
      name: 'Automation Agent',
      tagline: 'n8n Orchestration & Self-Healing Pipelines',
      icon: Workflow,
      status: 'ONLINE',
      description:
        'Monitors active webhook traffic, deduplicates CRM leads, triggers ERP invoice entries, and autonomously heals broken API integrations.',
      exampleTask:
        'Reconcile 1,200 Stripe subscriptions against HubSpot contacts & update MRR telemetry.',
      workflow: [
        '1. Listen to Stripe customer.subscription.updated webhooks',
        '2. Query HubSpot contacts by customer ID with retry backoff',
        '3. Apply business tax rules and verify invoice integrity',
        '4. Commit synchronized record to PostgreSQL analytics warehouse'
      ],
      simulatedLogs: [
        '[03:14:14] EVENT: Webhook batch parsed (1,200 objects)',
        '[03:14:15] CHECK: Hubspot schema verified. 0 validation errors',
        '[03:14:16] RECONCILE: Currency conversions matched via ECB rate table',
        '[03:14:17] COMPLETE: Ledger committed in 412ms. Status 200 OK'
      ]
    },
    {
      id: 'content',
      name: 'Content Agent',
      tagline: 'Multi-Modal Generation & Visual Direction',
      icon: Palette,
      status: 'ONLINE',
      description:
        'Generates brand-compliant graphic banners, technical carousels, video scripts, and markdown documentation with pristine aesthetic standards.',
      exampleTask:
        'Generate 3D isometric product renders and draft technical release announcement.',
      workflow: [
        '1. Parse release changelog & extract architectural features',
        '2. Synthesize Midjourney prompt prompts with cinematic lighting',
        '3. Render 4K promotional renders & compose visual typography',
        '4. Generate ready-to-publish Markdown docs and social assets'
      ],
      simulatedLogs: [
        '[03:14:20] INGEST: Version 4.2 changelog received (18 commits)',
        '[03:14:21] DIFFUSION: Generating seed 849204 (4K Isometric 3D)',
        '[03:14:22] COMPOSITION: Applied Barlow Condensed header overlays',
        '[03:14:23] PACKAGING: 4 assets exported to CDN bucket'
      ]
    },
    {
      id: 'bi',
      name: 'Business Intelligence Agent',
      tagline: 'Cohort Modeling & Autonomous Anomaly Detection',
      icon: LineChart,
      status: 'ONLINE',
      description:
        'Connects directly to your analytics warehouse. Detects unexpected customer churn spikes, models 12-month runway, and drafts predictive briefings.',
      exampleTask:
        'Model Q3 enterprise pipeline retention & flag high-risk subscription renewals.',
      workflow: [
        '1. Query Snowflake data lake for user session telemetry',
        '2. Calculate cohort decay rate using exponential regression',
        '3. Isolate 4 enterprise accounts exhibiting -35% usage drops',
        '4. Generate mitigation action plan and ping Account Executive'
      ],
      simulatedLogs: [
        '[03:14:26] QUERY: Scanned 8.4M session rows across Snowflake',
        '[03:14:27] ANOMALY: Flagged Account #829 (Enterprise Tier)',
        '[03:14:28] REGRESSION: Predicted 84% churn risk within 30 days',
        '[03:14:29] ACTION: Generated proactive executive discount proposal'
      ]
    }
  ];

  const [activeAgentIndex, setActiveAgentIndex] = useState(0);
  const [isRunningSimulation, setIsRunningSimulation] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [activeLogs, setActiveLogs] = useState<string[]>([]);

  const selectedAgent = agents[activeAgentIndex];

  useEffect(() => {
    setActiveLogs(selectedAgent.simulatedLogs);
    setSimulationProgress(0);
    setIsRunningSimulation(false);
  }, [activeAgentIndex]);

  const handleRunSimulation = () => {
    sound.playActivate();
    setIsRunningSimulation(true);
    setSimulationProgress(0);

    const stepInterval = setInterval(() => {
      setSimulationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(stepInterval);
          setIsRunningSimulation(false);
          sound.playClick();
          return 100;
        }
        return prev + 25;
      });
    }, 450);
  };

  return (
    <section id="command-center" className="relative min-h-screen py-24 px-4 md:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="font-mono-code text-xs text-[#00f0ff] uppercase tracking-widest font-semibold flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-[#00f0ff]" />
              INTERACTIVE AI EXPERIENCE // PROTOCOL v4
            </div>
            <h2 className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tight text-white">
              AI COMMAND <span className="text-blue-gradient">CENTER.</span>
            </h2>
          </div>

          {/* FRONTEND DEMO DISCLAIMER BADGE (Required by prompt) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono-code text-[11px] tracking-wider uppercase">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Frontend Demonstration // Synthetic Telemetry</span>
          </div>
        </div>

        {/* Command Center Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Agent Selection List (Left 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="font-mono-code text-xs text-white/50 uppercase tracking-wider mb-1 px-1">
              Select Autonomous Agent Unit:
            </div>
            {agents.map((agent, idx) => {
              const isSelected = activeAgentIndex === idx;
              const Icon = agent.icon;
              return (
                <button
                  key={agent.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveAgentIndex(idx);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer group ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#00f0ff]/15 via-black to-[#0070f3]/10 border-[#00f0ff]/60 shadow-[0_0_25px_rgba(0,240,255,0.25)]'
                      : 'glass-panel border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-[#00f0ff] border-[#00f0ff] text-black'
                        : 'bg-white/5 border-white/10 text-white/70 group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-sm text-white flex items-center gap-1.5">
                        <span>{agent.name}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />}
                      </div>
                      <div className="font-sans text-xs text-white/50 line-clamp-1">{agent.tagline}</div>
                    </div>
                  </div>

                  <span className={`font-mono-code text-[10px] px-2 py-0.5 rounded-full uppercase font-semibold ${
                    isSelected ? 'bg-[#00f0ff]/20 text-[#00f0ff]' : 'text-white/40'
                  }`}>
                    {agent.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Agent Telemetry & Simulation Monitor (Right 8 cols) */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-2xl">
            
            {/* Top Bar with Agent Specs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00f0ff]/20 to-[#d4af37]/20 border border-white/20 flex items-center justify-center text-[#00f0ff]">
                  <selectedAgent.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-white uppercase tracking-tight flex items-center gap-2">
                    <span>{selectedAgent.name}</span>
                    <span className="font-mono-code text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      AUTONOMOUS v4.2
                    </span>
                  </h3>
                  <p className="font-mono-code text-xs text-[#d4af37] tracking-wider uppercase">
                    {selectedAgent.tagline}
                  </p>
                </div>
              </div>

              {/* Simulation Trigger Button */}
              <button
                disabled={isRunningSimulation}
                onClick={handleRunSimulation}
                className={`px-5 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  isRunningSimulation
                    ? 'bg-white/10 text-white/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#00f0ff] to-[#0070f3] text-black hover:opacity-90 glow-blue'
                }`}
              >
                {isRunningSimulation ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Task...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Run Demo Mission</span>
                  </>
                )}
              </button>
            </div>

            {/* Description & Objective */}
            <div className="mb-6">
              <div className="font-mono-code text-xs text-white/50 uppercase tracking-wider mb-2">Agent Capability:</div>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                {selectedAgent.description}
              </p>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-1">
                <span className="font-mono-code text-[11px] text-[#00f0ff] uppercase tracking-wider font-semibold">
                  Active Mission Payload:
                </span>
                <span className="font-sans text-white text-sm">
                  "{selectedAgent.exampleTask}"
                </span>
              </div>
            </div>

            {/* Workflow Visualization */}
            <div className="mb-6">
              <div className="font-mono-code text-xs text-white/50 uppercase tracking-wider mb-3">
                Autonomous Execution Chain:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedAgent.workflow.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/10 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                    <span className="font-mono-code text-xs text-white/80">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between font-mono-code text-xs text-white/60 mb-2">
                <span>SIMULATED EXECUTION PROGRESS</span>
                <span className="text-[#00f0ff] font-bold">{simulationProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#00f0ff] via-[#00a2ff] to-[#d4af37] transition-all duration-300 rounded-full"
                  style={{ width: `${simulationProgress}%` }}
                />
              </div>
            </div>

            {/* Simulated Terminal Telemetry Log */}
            <div>
              <div className="flex items-center justify-between font-mono-code text-xs text-white/50 uppercase tracking-wider mb-2">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>Agent Telemetry Output</span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE STREAM
                </span>
              </div>
              <div className="p-4 rounded-xl bg-black border border-white/10 font-mono-code text-xs text-white/80 space-y-1.5 overflow-x-auto">
                {activeLogs.map((log, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-white/30">&gt;</span>
                    <span className={log.includes('COMPLETE') || log.includes('SYNTHESIS') ? 'text-[#00f0ff]' : 'text-white/70'}>
                      {log}
                    </span>
                  </div>
                ))}
                {simulationProgress > 0 && simulationProgress < 100 && (
                  <div className="text-amber-300 animate-pulse flex items-center gap-2">
                    <span className="text-white/30">&gt;</span>
                    <span>[PROCESSING...] Step execution in progress ({simulationProgress}%)</span>
                  </div>
                )}
                {simulationProgress === 100 && (
                  <div className="text-emerald-400 font-bold flex items-center gap-2">
                    <span className="text-white/30">&gt;</span>
                    <span>[SUCCESS] All autonomous verification nodes confirmed 100% successful.</span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
