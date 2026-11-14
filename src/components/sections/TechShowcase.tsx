import React, { useState } from 'react';
import { 
  Bot, Workflow, Cpu, Globe, GitPullRequest, 
  MessageSquareCode, Image as ImageIcon, Video, Layers, Sparkles 
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface TechCardItem {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  specs: string[];
  accent: 'blue' | 'gold';
}

export const TechShowcase: React.FC = () => {
  const technologies: TechCardItem[] = [
    {
      id: 'agentic-ai',
      title: 'Agentic AI',
      category: 'COGNITIVE ARCHITECTURE',
      icon: Bot,
      description: 'Autonomous goal decomposition, self-reflection loops, and multi-agent consensus networks.',
      specs: ['ReAct Framework', 'Reflective Trees', 'State Management'],
      accent: 'blue'
    },
    {
      id: 'n8n-automation',
      title: 'n8n Automation',
      category: 'WORKFLOW ENGINE',
      icon: Workflow,
      description: 'Enterprise node-based orchestration connecting self-hosted instances with custom AI nodes.',
      specs: ['Custom Node Extensions', 'Self-Healing Webhooks', 'High-Volume Queues'],
      accent: 'gold'
    },
    {
      id: 'ai-agents',
      title: 'AI Agents',
      category: 'AUTONOMOUS WORKERS',
      icon: Cpu,
      description: 'Specialized domain agents equipped with memory vector stores, specialized toolkits, and dynamic planning.',
      specs: ['Domain Specialization', 'Long-Term Memory', 'Tool Use Protocols'],
      accent: 'blue'
    },
    {
      id: 'api-integration',
      title: 'API Integration',
      category: 'CONNECTIVITY FABRIC',
      icon: Globe,
      description: 'Seamless bidirectional synchronizations with enterprise REST, GraphQL, gRPC, and WebSocket protocols.',
      specs: ['Sub-20ms Latency', 'OAuth 2.0 Security', 'Automated Schema Discovery'],
      accent: 'gold'
    },
    {
      id: 'workflow-engineering',
      title: 'Workflow Engineering',
      category: 'SYSTEM DESIGN',
      icon: GitPullRequest,
      description: 'Robust deterministic business logic designed to handle edge cases, retries, and data transformations.',
      specs: ['Idempotency Guarantees', 'Failover Routing', 'Audit Telemetry'],
      accent: 'blue'
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering',
      category: 'LLM COMPILATION',
      icon: MessageSquareCode,
      description: 'DSPy-optimized meta-prompts, few-shot conditioning, and constrained JSON output schemas.',
      specs: ['Structured Outputs', 'Zero Hallucination Tuning', 'Chain-of-Thought'],
      accent: 'gold'
    },
    {
      id: 'ai-image-gen',
      title: 'AI Image Generation',
      category: 'VISUAL DIFFUSION',
      icon: ImageIcon,
      description: 'Ultra-high-definition multi-modal asset generation using Flux, Midjourney, and custom LoRA adapters.',
      specs: ['4K Resolution', 'Brand Consistency', 'ControlNet Precision'],
      accent: 'blue'
    },
    {
      id: 'ai-video-gen',
      title: 'AI Video Generation',
      category: 'MOTION SYNTHESIS',
      icon: Video,
      description: 'Cinematic camera tracks, temporal consistency, and AI-driven video synthesis pipelines.',
      specs: ['60 FPS Interpolation', 'Cinematic Pan/Zoom', 'Multi-Shot Sequencing'],
      accent: 'gold'
    }
  ];

  const [mousePos, setMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // tilt angle
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePos((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const handleMouseLeave = (id: string) => {
    setMousePos((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  return (
    <section id="technologies" className="relative min-h-screen py-24 px-4 md:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="font-mono-code text-xs text-[#d4af37] uppercase tracking-widest font-semibold flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#d4af37]" />
              TECHNICAL STACK // SPECIALIZATION
            </div>
            <h2 className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tight text-white">
              ENGINEERED FOR <span className="text-gold-gradient">SCALE.</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-white/60 leading-relaxed">
            Every technology in this stack has been battle-tested for enterprise reliability, autonomous resilience, and zero human latency.
          </p>
        </div>

        {/* 3D Floating Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => {
            const tilt = mousePos[tech.id] || { x: 0, y: 0 };
            const Icon = tech.icon;
            const isBlue = tech.accent === 'blue';

            return (
              <div
                key={tech.id}
                onMouseEnter={() => sound.playClick()}
                onMouseMove={(e) => handleMouseMove(tech.id, e)}
                onMouseLeave={() => handleMouseLeave(tech.id)}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1, 1, 1)`,
                  transition: 'transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s'
                }}
                className={`relative p-6 rounded-3xl glass-panel border flex flex-col justify-between group overflow-hidden cursor-pointer ${
                  isBlue
                    ? 'hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]'
                    : 'hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                }`}
              >
                {/* Holographic light reflection spot */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: isBlue
                      ? 'radial-gradient(circle at 50% 0%, rgba(0,240,255,0.15) 0%, transparent 70%)'
                      : 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15) 0%, transparent 70%)'
                  }}
                />

                <div>
                  {/* Top Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-code text-[10px] text-white/40 tracking-wider uppercase font-semibold">
                      {tech.category}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border transition-all ${
                      isBlue 
                        ? 'bg-[#00f0ff]/10 border-[#00f0ff]/30 text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-black' 
                        : 'bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans font-bold text-xl text-white uppercase tracking-tight mb-3">
                    {tech.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                    {tech.description}
                  </p>
                </div>

                {/* Specs pill badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {tech.specs.map((sp, i) => (
                    <span 
                      key={i}
                      className="font-mono-code text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10"
                    >
                      {sp}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
