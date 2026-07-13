import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  FileText,
  Shield,
  BarChart3,
  MessageCircle,
  TrendingUp,
  Target,
  Radio,
  Twitter,
} from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const stats = [
  { label: "Ecosystem Retention" },
  { label: "Content Engineering" },
  { label: "Remote-Native" },
];

const frameworkPillars = [
  {
    title: "Narrative Engineering",
    description:
      "Turning your whitepaper and technical updates into cinematic video narratives and high-performance X threads.",
    icon: FileText,
    stat: "Content → Retention",
  },
  {
    title: "Structural Moderation",
    description:
      "Implementing automated security layers (Wick/Rose/Collab.Land) and proactive crisis management to neutralize FUD.",
    icon: Shield,
    stat: "Security → Trust",
  },
  {
    title: "Growth Loops",
    description:
      "Designing the feedback systems that turn community sentiment into actionable marketing assets.",
    icon: TrendingUp,
    stat: "Sentiment → Growth",
  },
];

const caseFiles = [
  {
    hook: "Most people think DePIN is just another crypto narrative. They're wrong. Here's why it's the most important infrastructure shift of the decade 🧵",
    tag: "DePIN",
    link: "https://x.com/iamconqwest",
    problem: "Retail investors couldn't understand DePIN's real-world value proposition",
    techStack: "DePIN",
    output: "Thread",
    impact: "High Retention",
  },
  {
    hook: "RWA tokenization is breaking into the mainstream — but nobody explains WHY it matters for regular people. I did the research so you don't have to 🧵",
    tag: "RWA",
    link: "https://x.com/iamconqwest",
    problem: "RWA projects failed to communicate value beyond crypto-native audiences",
    techStack: "RWA",
    output: "Thread",
    impact: "Retail Conversion",
  },
  {
    hook: "DAOs keep failing not because of bad ideas — but because of terrible communication infrastructure. Here's the fix 🧵",
    tag: "DAOs",
    link: "https://x.com/iamconqwest",
    problem: "DAO governance suffered from poor internal communication architecture",
    techStack: "DAO/Gov",
    output: "Thread",
    impact: "Structural Fix",
  },
];

const modTools = [
  {
    name: "Wick Bot",
    description: "Anti-sybil enforcement, automated raid protection, and rule-based moderation at scale.",
    icon: Shield,
  },
  {
    name: "Rose Bot",
    description: "Member filtering, welcome automation, and command-driven community management.",
    icon: MessageCircle,
  },
  {
    name: "Collab.Land",
    description: "Token-gated access control, NFT holder verification, and role-based permissions.",
    icon: Zap,
  },
  {
    name: "Discord Dev Tools",
    description: "Custom bot logic, structured channel architecture, and role hierarchy systems.",
    icon: Radio,
  },
];

const modMetrics = [
  { label: "Member Growth Tracked", value: "+47%", sub: "avg. month-over-month" },
  { label: "Spam Blocked", value: "2.4K+", sub: "messages filtered weekly" },
  { label: "Sentiment Score", value: "Positive", sub: "community health index" },
];

const Web3HomePage = () => {
  const scrollToProofOfWork = () => {
    document.getElementById("proof-of-work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative network-pattern">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-24 sm:pt-20 pb-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-3">
                <p className="text-emerald-400 font-medium tracking-wide uppercase text-xs font-mono">
                  Ecosystem Retention Specialist
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                  Architecting{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                    Community Retention
                  </span>{" "}
                  for High-Utility Ecosystems.
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I bridge the gap between technical infrastructure and retail adoption. Specialized in{" "}
                  <span className="text-foreground font-medium">DePIN, AI, and RWA protocols</span>, I engineer the content and moderation systems that turn 'Lurkers' into 'Holders'.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  >
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={scrollToProofOfWork}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110"
                >
                  View My Proof of Work
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://t.me/BIG_CQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Hire Me on Telegram
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-90" />
                <div className="relative p-2 rounded-2xl border border-emerald-500/30 bg-card/80 backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel - Ecosystem Retention Specialist"
                    loading="lazy"
                    className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] object-cover rounded-xl"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap font-mono">
                    Utility Architect
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== THE ECOSYSTEM FRAMEWORK ====== */}
      <section className="py-16 border-t border-border/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-emerald-400 uppercase text-xs font-mono font-medium tracking-wide mb-2">
              The Framework
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3">
              The Ecosystem{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                Framework
              </span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Three interconnected pillars that transform community chaos into measurable retention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {frameworkPillars.map((pillar, index) => (
              <div
                key={index}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110 mb-4">
                  <pillar.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pillar.description}</p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                  <Target className="w-3 h-3" />
                  {pillar.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROOF OF WORK — Case Files ====== */}
      <section id="proof-of-work" className="py-16 border-t border-border/50 scroll-mt-24">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-emerald-400 uppercase text-xs font-mono font-medium tracking-wide mb-2">Case Files</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Proof of Work
            </h2>
            <p className="text-muted-foreground text-sm">
              Technical problems I identified and solved through content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {caseFiles.map((thread, index) => (
              <div
                key={index}
                className="terminal-card group relative"
              >
                <div className="p-5 flex flex-col gap-4">
                  {/* Tweet Header */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <Twitter className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">ConQuest</p>
                      <p className="text-[10px] text-muted-foreground font-mono">@iamconqwest</p>
                    </div>
                    <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                      #{thread.tag}
                    </span>
                  </div>

                  {/* Hook Text */}
                  <p className="text-sm text-foreground leading-relaxed flex-1">
                    {thread.hook}
                  </p>

                  {/* Problem Tooltip */}
                  <div className="px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-wide mb-0.5">The Problem I Solved</p>
                    <p className="text-xs text-muted-foreground">{thread.problem}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={thread.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors group-hover:underline"
                  >
                    Read Full Thread on X
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Stats Bar */}
                <div className="stats-bar">
                  <span>Tech Stack: {thread.techStack}</span>
                  <span>Output: {thread.output}</span>
                  <span>Impact: {thread.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COMMUNITY MANAGEMENT & MODERATION ====== */}
      <section className="py-16 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-emerald-400 uppercase text-xs font-mono font-medium tracking-wide mb-2">Infrastructure</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Community Management & Moderation
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Managing technical dialogue and educational onboarding infrastructure that keeps ecosystems functional, safe, and growing.
            </p>
          </div>

          {/* Mod Tech Stack */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {modTools.map((tool, index) => (
              <div
                key={index}
                className="glass-card p-5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                  <tool.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-sm font-heading font-bold mb-1">{tool.name}</h3>
                <p className="text-xs text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </div>

          {/* Moderation Report Graphic */}
          <div className="terminal-card">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold">Community Health Dashboard</h3>
                  <p className="text-xs text-muted-foreground font-mono">30-day ecosystem snapshot</p>
                </div>
                <span className="ml-auto px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                  Active
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {modMetrics.map((metric, index) => (
                  <div key={index} className="rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-4 text-center">
                    <p className="text-2xl md:text-3xl font-heading font-bold text-emerald-400 mb-1">
                      {metric.value}
                    </p>
                    <p className="text-xs font-medium text-foreground mb-0.5">{metric.label}</p>
                    <p className="text-[10px] text-muted-foreground font-mono">{metric.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Anti-Sybil Detection", "Educational Onboarding", "Role Architecture", "Sentiment Tracking", "Member Vetting"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/8 border border-emerald-500/20 text-emerald-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 border-t border-border/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Operational Commitments
            </h2>
            <p className="text-muted-foreground text-sm">
              Reliability is rare in Web3. Here's how I deliver it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {
                title: "Zero Ramp-Up Time",
                desc: "I understand ecosystem context immediately. No hand-holding, no onboarding delays.",
              },
              {
                title: "Async-First Operations",
                desc: "Distributed teams, different timezones—I operate independently without synchronous check-ins.",
              },
              {
                title: "Outcome-Driven Execution",
                desc: "Every piece of content drives retention. Every moderation action protects trust. Nothing academic.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-5"
              >
                <div className="text-emerald-400 text-3xl mb-2 font-mono">&gt;_</div>
                <h3 className="font-heading font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 rounded-3xl mx-4 lg:mx-auto lg:max-w-4xl my-8">
        <div className="section-container text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Ready to Optimize Your Ecosystem?
            </h2>
            <p className="text-muted-foreground text-sm">
              If your community is leaking users, your content isn't converting, or your moderation is reactive instead of proactive—let's fix it.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href="https://t.me/BIG_CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110"
              >
                Deploy the Content Engine
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/contact" className="btn-secondary">
                Initiate Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3HomePage;
