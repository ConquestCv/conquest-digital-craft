import { Link } from "react-router-dom";
import { ArrowRight, Search, AlertTriangle, CheckCircle2 } from "lucide-react";

const auditCases = [
  {
    project: "Early-Stage DePIN Protocol",
    sector: "DePIN",
    issue: "Community had 8,000+ members but daily active users were under 200. The Discord had 47 channels with no hierarchy—new members couldn't find relevant information and left within 48 hours.",
    fix: "Restructured the entire Discord architecture: collapsed 47 channels into 12 organized categories, implemented a guided onboarding flow using Rose Bot, created a 'Start Here' channel with progressive educational content, and deployed Wick Bot anti-sybil measures that filtered 300+ bot accounts.",
    result: "Daily active users increased from under 200 to 600+ within 3 weeks. Support tickets dropped by 40% as self-serve education replaced repetitive mod responses.",
    stats: { sector: "DePIN", duration: "3 weeks", impact: "3x DAU increase" },
  },
  {
    project: "AI Infrastructure Token",
    sector: "AI",
    issue: "Project was publishing daily Twitter threads that averaged 15K impressions but near-zero profile clicks or community conversions. Content was technically accurate but written for insiders, not retail investors. Their Telegram had become a price-discussion channel with no educational content.",
    fix: "Audited the content pipeline and rebuilt the thread architecture: Hook → Context → Proof → CTA framework. Replaced insider jargon with real-world analogies. Created a Telegram content calendar that drip-fed simplified protocol explainers. Implemented a feedback loop where community questions became next week's content.",
    result: "Profile click-through rate improved significantly. Telegram shifted from price speculation to protocol discussion. Community sentiment scores moved from 'Neutral' to 'Positive' within 4 weeks.",
    stats: { sector: "AI", duration: "4 weeks", impact: "Sentiment shift to Positive" },
  },
  {
    project: "RWA Tokenization Platform",
    sector: "RWA",
    issue: "During a token unlock event, a coordinated FUD campaign hit Crypto Twitter. The community team had no crisis playbook—moderators were responding individually with conflicting information, amplifying confusion instead of resolving it.",
    fix: "Built a crisis management framework: pre-written FAQ templates for common FUD narratives, a moderation escalation chain, channel locking protocols for panic events, and a rapid-response community update template. Deployed the framework during the event—locked speculation channels, published a clear update within 30 minutes, and directed all discussion to a single monitored thread.",
    result: "FUD narrative was neutralized before it gained mainstream CT traction. No significant holder exodus during the unlock. Framework is now the project's permanent crisis playbook.",
    stats: { sector: "RWA", duration: "< 1 hour response", impact: "FUD neutralized" },
  },
];

const Web3AuditsPage = () => {
  return (
    <div className="relative network-pattern">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <p className="text-emerald-400 uppercase text-xs font-mono font-medium tracking-wide mb-3">
          The Secret Weapon
        </p>
        <h1 className="page-title">
          Ecosystem{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            Audits
          </span>
        </h1>
        <p className="page-subtitle">
          I don't just wait for tasks. I audit your community's UX and find the leaks before they drain your ecosystem.
        </p>
      </section>

      {/* Intro */}
      <section className="pb-8">
        <div className="section-container max-w-3xl">
          <div className="terminal-card">
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-400" />
                <h2 className="text-sm font-heading font-bold text-emerald-400 uppercase tracking-wide">
                  Proactive Problem Detection
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most community managers wait for problems to surface. I walk into your ecosystem and find the structural issues before they become crises. Below are three anonymized examples of how I've identified and solved retention-critical problems in early-stage utility projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20">
        <div className="section-container max-w-3xl">
          <div className="space-y-6">
            {auditCases.map((audit, index) => (
              <div
                key={index}
                className="terminal-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 space-y-4">
                  {/* Project Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-wide mb-1">
                        Case #{index + 1}
                      </p>
                      <h3 className="text-lg font-heading font-bold">{audit.project}</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                      {audit.sector}
                    </span>
                  </div>

                  {/* Issue Found */}
                  <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/15">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                      <p className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wide">
                        Issue Identified
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{audit.issue}</p>
                  </div>

                  {/* Fix Implemented */}
                  <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/15">
                    <div className="flex items-center gap-2 mb-1">
                      <Search className="w-3.5 h-3.5 text-amber-400" />
                      <p className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wide">
                        Fix Implemented
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{audit.fix}</p>
                  </div>

                  {/* Result */}
                  <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <p className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wide">
                        Result
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{audit.result}</p>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="stats-bar">
                  <span>Sector: {audit.stats.sector}</span>
                  <span>Duration: {audit.stats.duration}</span>
                  <span>Impact: {audit.stats.impact}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              Want an Audit for Your Project?
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              I'll walk into your community, find the structural leaks, and deliver an actionable fix plan.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110 font-mono"
              >
                Initiate Ecosystem Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://t.me/BIG_CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary font-mono"
              >
                Direct on Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3AuditsPage;
