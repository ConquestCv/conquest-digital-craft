import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileText, TrendingUp } from "lucide-react";
import LiquidMeter from "@/components/LiquidMeter";

const categoryIcons = {
  infrastructure: Shield,
  content: FileText,
  growth: TrendingUp,
};

const impactCategories = [
  {
    title: "Infrastructure & Security",
    iconKey: "infrastructure" as const,
    iconColor: "from-emerald-500 to-teal-600",
    description: "Building and defending the systems that keep communities safe and structured.",
    skills: [
      { name: "Discord/Telegram Architecture", level: 88 },
      { name: "Anti-Sybil Logic", level: 82 },
      { name: "Token-Gating Implementation (Collab.Land)", level: 85 },
      { name: "Bot-Defense Optimization (Wick/Rose)", level: 90 },
    ],
  },
  {
    title: "Content Engineering",
    iconKey: "content" as const,
    iconColor: "from-cyan-500 to-blue-600",
    description: "Creating technical content that retains users, not just impressions.",
    skills: [
      { name: "Technical Scriptwriting (AI/DePIN)", level: 88 },
      { name: "Cinematic Editing for Utility", level: 85 },
      { name: "Narrative Thread Architecture", level: 90 },
      { name: "Protocol Documentation", level: 82 },
    ],
  },
  {
    title: "Strategic Growth",
    iconKey: "growth" as const,
    iconColor: "from-violet-500 to-purple-600",
    description: "Turning community data into actionable growth strategies.",
    skills: [
      { name: "Retention Analytics", level: 85 },
      { name: "AMA Moderation & Summarization", level: 88 },
      { name: "Feedback Loop Implementation", level: 82 },
      { name: "Community Sentiment Tracking", level: 90 },
    ],
  },
];

const tools = [
  { name: "Discord", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg", isColored: false },
  { name: "Telegram", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg", isColored: false },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg", isColored: false },
  { name: "Twitter/X", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg", isColored: false },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", isColored: false },
  { name: "Wick Bot", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg", isColored: false },
  { name: "Rose Bot", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg", isColored: false },
  { name: "Collab.Land", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ethereum.svg", isColored: false },
];

const Web3SkillsPage = () => {
  return (
    <div className="relative network-pattern">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <p className="text-emerald-400 uppercase text-xs font-mono font-medium tracking-wide mb-3">
          Operational Intelligence
        </p>
        <h1 className="page-title">
          Impact <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Categories</span>
        </h1>
        <p className="page-subtitle">
          Skills grouped by what they achieve for your ecosystem—not what they're called.
        </p>
      </section>

      {/* Impact Categories */}
      <section className="pb-12">
        <div className="section-container">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5">
            {impactCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.iconKey];
              return (
                <div
                  key={index}
                  className="glass-card p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.iconColor} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-bold">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground font-mono">{skill.name}</span>
                          <span className="text-emerald-400 font-mono font-medium">{skill.level}%</span>
                        </div>
                        <LiquidMeter level={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 border-y border-border/50">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              Tools & Environments
            </h2>
            <p className="text-muted-foreground text-sm font-mono">
              The stack I deploy daily
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card/50 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 text-center group cursor-pointer hover:-translate-y-1"
              >
                <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className={`w-6 h-6 object-contain ${!tool.isColored ? 'dark:invert' : ''}`}
                  />
                </div>
                <span className="text-[9px] text-muted-foreground font-mono font-medium leading-tight">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
            Need These Capabilities Deployed?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            I engineer community retention, not just community management.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110">
              Initiate Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/experience" className="btn-secondary">
              View Problem-Solver Proof
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3SkillsPage;
