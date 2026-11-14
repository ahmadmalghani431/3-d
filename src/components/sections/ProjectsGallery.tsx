import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, X, ArrowUpRight, CheckCircle2, 
  Sparkles, Layers, Cpu, ShieldCheck, Activity 
} from 'lucide-react';
import { sound } from '../../utils/sound';

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  impactMetric: string;
  technologies: string[];
  architectureOverview: string;
  deliverables: string[];
  bannerUrl: string;
}

export const ProjectsGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'ai-research-assistant',
      number: '01',
      title: 'AI Research Assistant',
      category: 'KNOWLEDGE EXTRACTION',
      summary:
        'Autonomous document synthesis engine capable of parsing 1,000+ page technical PDFs, SEC filings, and scientific whitepapers with grounded vector citations.',
      impactMetric: '94% Reduction in Research Time',
      technologies: ['DeepSeek R1', 'ChromaDB', 'LangChain', 'FastAPI', 'Next.js'],
      architectureOverview:
        'Hierarchical chunking pipeline with reciprocal rank fusion (RRF) and dynamic agentic verification before rendering cited answers.',
      deliverables: [
        'Multi-vector PDF document ingestion pipeline',
        'Semantic graph citation cross-validation engine',
        'Interactive executive briefing dashboard',
        'Automated markdown & LaTeX export formatting'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'automated-content-generator',
      number: '02',
      title: 'Automated Content Generator',
      category: 'CREATIVE MULTI-MODAL',
      summary:
        'End-to-end multi-modal publishing powerhouse that generates viral technical carousels, blog deep dives, and banner artwork tailored to brand guidelines.',
      impactMetric: '14x Content Velocity',
      technologies: ['Claude 3.7 Sonnet', 'Flux Diffusion', 'Node.js', 'Tailwind', 'S3'],
      architectureOverview:
        'Topic ideation agent analyzes engagement trends, passes structured JSON to copy engine, triggers image generation node, and formats final web preview.',
      deliverables: [
        'Autonomous topic ideation & SEO analysis',
        'Brand voice consistency validation agent',
        'Dynamic 4K image generation & typesetting',
        'Multi-channel webhook publishing queue'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'intelligent-email-automation',
      number: '03',
      title: 'Intelligent Email Automation',
      category: 'AUTONOMOUS OPERATIONS',
      summary:
        'Zero-inbox triage agent that analyzes incoming client inquiries, categorizes urgency and sentiment, pulls relevant CRM data, and prepares executive responses.',
      impactMetric: '< 3 Min Average Response Time',
      technologies: ['Gmail API', 'n8n', 'OpenAI', 'PostgreSQL', 'Slack API'],
      architectureOverview:
        'Subscribes to Google Cloud Pub/Sub triggers for instant webhook firing. Classifies emails into 8 operational queues and handles 85% of tier-1 support autonomously.',
      deliverables: [
        'Real-time Pub/Sub push notification listener',
        'Zero-shot intent & sentiment classification',
        'Context-aware draft generator with CRM history',
        'Slack approval gateway for high-stakes emails'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ai-business-workflow',
      number: '04',
      title: 'AI Business Workflow',
      category: 'ENTERPRISE ERP & CRM',
      summary:
        'Resilient self-healing infrastructure that synchronizes customer lifecycle events across Stripe, HubSpot, Xero, and internal data lakes with zero human error.',
      impactMetric: '99.98% Transaction Precision',
      technologies: ['n8n Self-Hosted', 'Stripe Webhooks', 'HubSpot API', 'Redis Queue', 'Docker'],
      architectureOverview:
        'Event-driven microservices running on a resilient queue. Detects upstream rate limits, applies exponential backoff, and self-repairs corrupted payload structures.',
      deliverables: [
        'Automated contract to invoice generation loop',
        'Bidirectional customer sync across 4 SaaS tools',
        'Automated revenue leakage detection alerts',
        'Comprehensive audit log with cryptographic hashing'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'autonomous-lead-gen',
      number: '05',
      title: 'Autonomous Lead Generation',
      category: 'GROWTH ENGINE',
      summary:
        'Scrapes high-intent B2B prospect indicators, enriches contact intelligence, verifies deliverability, and crafts hyper-personalized value proposals.',
      impactMetric: '3.8x Outbound Reply Rate',
      technologies: ['Puppeteer', 'Apollo API', 'Claude 3.5 Haiku', 'Postmark', 'Supabase'],
      architectureOverview:
        'Autonomous agent monitors hiring spikes and funding news across target industries, identifies decision makers, and drafts individualized outreach angles.',
      deliverables: [
        'High-intent market trigger detection system',
        'Multi-database prospect enrichment agent',
        'Deliverability validation & spam filter testing',
        'Personalized cold-start pitch generator'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ai-social-manager',
      number: '06',
      title: 'AI Social Media Manager',
      category: 'AUDIENCE ORCHESTRATION',
      summary:
        'Continuous monitoring agent that tracks algorithm shifts, synthesizes conversational replies to key influencers, and manages scheduled broadcasts.',
      impactMetric: '310% Follower Growth Velocity',
      technologies: ['Twitter/X API v2', 'LinkedIn API', 'Vite', 'Gemini Pro', 'Cloudflare Workers'],
      architectureOverview:
        'Edge-deployed listener parses timeline feeds for target keywords, evaluates high-leverage engagement opportunities, and drafts insightful responses.',
      deliverables: [
        'Live sentiment and topic breakout monitor',
        'Influencer conversation engagement assistant',
        'Automated multi-platform scheduling engine',
        'Weekly growth analytics synthesis'
      ],
      bannerUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleOpenProject = (project: ProjectItem) => {
    sound.playActivate();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    sound.playClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 px-4 md:px-8 z-10">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="font-mono-code text-xs text-[#00f0ff] uppercase tracking-widest font-semibold flex items-center gap-2 mb-2">
              <FolderGit2 className="w-4 h-4 text-[#00f0ff]" />
              CASE ARCHIVES // PORTFOLIO
            </div>
            <h2 className="text-4xl sm:text-6xl font-sans font-black uppercase tracking-tight text-white">
              MY <span className="text-blue-gradient">PROJECTS.</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm text-white/60 leading-relaxed">
            A curated selection of autonomous AI systems, intelligent workflows, and multi-agent platforms built for next-generation performance.
          </p>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => handleOpenProject(proj)}
              className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,240,255,0.2)] cursor-pointer"
            >
              <div>
                {/* Visual Header / Cover Image */}
                <div className="relative h-48 w-full overflow-hidden bg-black/60">
                  <img 
                    src={proj.bannerUrl} 
                    alt={proj.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/40 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono-code text-xs font-bold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                      CASE // {proj.number}
                    </span>
                    <span className="font-mono-code text-[10px] uppercase px-2.5 py-1 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30 backdrop-blur-md font-semibold">
                      {proj.impactMetric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="font-mono-code text-[11px] text-[#00f0ff] uppercase tracking-wider font-semibold mb-2">
                    {proj.category}
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-white uppercase tracking-tight mb-3 group-hover:text-[#00f0ff] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 line-clamp-2 leading-relaxed mb-6">
                    {proj.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="font-mono-code text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 3 && (
                    <span className="font-mono-code text-[9px] px-1.5 py-0.5 text-white/40">
                      +{proj.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-[#00f0ff] group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Modal Detail View */}
        {selectedProject && (
          <div 
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass-panel-blue rounded-3xl border border-[#00f0ff]/40 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-code text-xs px-2.5 py-1 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 font-bold uppercase">
                  CASE // {selectedProject.number}
                </span>
                <span className="font-mono-code text-xs text-[#00f0ff] uppercase tracking-wider font-semibold">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tight mb-2">
                {selectedProject.title}
              </h3>

              <div className="font-mono-code text-sm text-[#00f0ff] font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Impact Metric: {selectedProject.impactMetric}</span>
              </div>

              <p className="font-sans text-base text-white/80 leading-relaxed mb-6">
                {selectedProject.summary}
              </p>

              {/* Architecture Overview */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 mb-6">
                <div className="font-mono-code text-xs text-[#d4af37] uppercase tracking-wider font-semibold mb-1">
                  Architecture Overview:
                </div>
                <div className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  {selectedProject.architectureOverview}
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="mb-6">
                <div className="font-mono-code text-xs text-white/50 uppercase tracking-wider mb-3">
                  Key Technical Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Badges */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="font-mono-code text-xs px-3 py-1 rounded-full bg-white/5 text-[#00f0ff] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close Case
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
