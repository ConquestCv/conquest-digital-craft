import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Zap, ShieldAlert } from "lucide-react";

const experiences = [
  {
    title: "Hybrid Community Manager & Content Engineer",
    category: "Action > Problem > Result",
    period: "2024 – Present",
    type: "Remote / Ecosystem",
    problem:
      "Retail onboarding in DePIN and AI protocols suffered from massive user drop-off. Technical barriers—complex wallet setups, unfamiliar token mechanics, and dense documentation—meant communities were growing in numbers but hemorrhaging in engagement.",
    action: [
      "Engineered visual 'Technical Simplifiers'—short-form explainer content that broke down wallet setup, staking flows, and protocol mechanics into 60-second digestible formats.",
      "Designed educational onboarding sequences for Discord that guided new members from 'confused lurker' to 'informed participant' within 48 hours.",
      "Produced high-retention Twitter threads that reframed complex utility narratives for retail audiences, focusing on real-world use cases over technical specs.",
      "Implemented Collab.Land token-gating to create tiered access, ensuring engaged members received priority support and alpha.",
    ],
    result:
      "Increased community engagement metrics and reduced repetitive support tickets in Discord by creating self-serve education infrastructure.",
    hasCrisis: false,
  },
  {
    title: "Ecosystem Research & Intelligence Lead",
    category: "Action > Problem > Result",
    period: "2023 – Present",
    type: "Remote / Research",
    problem:
      "Protocols were producing documentation their own communities couldn't understand. Whitepapers read like academic papers. Technical updates confused holders instead of building confidence. The gap between 'what the team built' and 'what the community understood' was destroying trust.",
    action: [
      "Built a structured research practice: mapping DePIN, AI, and RWA ecosystems to identify key players, incentive models, and communication breakdowns.",
      "Produced protocol breakdowns that translated whitepaper-level content into readable summaries for non-technical community members.",
      "Tracked narrative shifts across Twitter, Discord, and research forums—understanding how sentiment moves before price does.",
      "Created evaluation frameworks for new projects: team credibility, token design health, community infrastructure quality, and documentation clarity.",
    ],
    result:
      "Developed a repeatable research and content workflow deployable for any Web3 team needing ecosystem clarity—reducing time-to-understanding for new community members.",
    hasCrisis: false,
  },
  {
    title: "Community Infrastructure Architect",
    category: "Action > Problem > Result",
    period: "2023 – Present",
    type: "Remote / Infrastructure",
    problem:
      "Most Web3 communities are announcement channels with comment sections—not retention systems. The difference between a community that retains members and one that hemorrhages them is structural. Without proper architecture, communities become noise.",
    action: [
      "Designed Discord server architectures: channel hierarchies, role structures, and onboarding flows that reduce confusion for new members by 60%.",
      "Implemented Wick Bot and Rose Bot configurations for automated anti-sybil enforcement and spam interception.",
      "Created welcome sequences that orient new members without requiring manual moderator effort—scaling onboarding without scaling headcount.",
      "Developed community health tracking dashboards: monitoring sentiment, engagement drop-off points, and spam influx patterns.",
    ],
    result:
      "Proven ability to build community infrastructure from scratch or audit and repair broken systems—turning announcement channels into retention engines.",
    hasCrisis: true,
    crisisNote:
      "Managed a coordinated FUD campaign during a token unlock event. Deployed pre-written FAQ responses, locked relevant channels to prevent panic cascading, and published a clear community update within 30 minutes—neutralizing the narrative before it spread to CT.",
  },
  {
    title: "Narrative & Content Strategist",
    category: "Action > Problem > Result",
    period: "2024 – Present",
    type: "Remote / Content",
    problem:
      "Project content was failing to retain followers. Twitter threads were getting impressions but not conversions. Communities were growing but engagement was flat. The content wasn't designed for retention—it was designed for vanity metrics.",
    action: [
      "Wrote Twitter thread frameworks for DePIN, RWA, and AI protocols—structured for retention, not just reach. Hook → Context → Proof → CTA.",
      "Produced explainer content that breaks down token mechanisms, governance processes, and protocol architecture for general audiences.",
      "Developed content calendars and narrative arcs that build community understanding progressively—each piece building on the last.",
      "Translated technical documentation into community-facing announcements that reduced confusion and cut support volume.",
    ],
    result:
      "Positioned as a reliable translator between technical Web3 teams and the crypto-aware public—turning content from a cost center into a retention driver.",
    hasCrisis: false,
  },
];

const Web3ExperiencePage = () => {
  return (
    <div className="relative network-pattern">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <p className="text-emerald-400 uppercase text-xs font-mono font-medium tracking-wide mb-3">
          Problem-Solver Proof
        </p>
        <h1 className="page-title">
          Web3{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            Experience
          </span>
        </h1>
        <p className="page-subtitle">
          I don't list tasks. I show problems I identified, actions I took, and results I delivered.
        </p>
      </section>

      {/* Profile Summary */}
      <section className="pb-8">
        <div className="section-container max-w-3xl">
          <div className="terminal-card">
            <div className="p-6 space-y-3">
              <h2 className="text-sm font-heading font-bold text-emerald-400 uppercase tracking-wide">
                Ecosystem Retention Specialist
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I operate within decentralized ecosystems where retention, not just growth, determines survival.
                My work focuses on engineering the content, moderation, and communication infrastructure that keeps
                communities functional and converts lurkers into holders.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Content Engineering", "Crisis Management", "Infrastructure Design", "Retention Analytics", "Async Operations"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20">
        <div className="section-container max-w-3xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-10 md:pl-16 animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background transition-all duration-300 top-5"
                    style={{ boxShadow: "0 0 16px hsl(170 80% 45% / 0.5)" }}
                  />

                  {/* Card */}
                  <div className="terminal-card">
                    <div className="p-5">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="text-[10px] font-mono font-medium text-emerald-400 uppercase tracking-wide mb-1">
                            {exp.category}
                          </p>
                          <h3 className="text-lg font-heading font-bold">{exp.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-card/80 border border-border">
                            <MapPin className="w-3 h-3" />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Problem */}
                      <div className="mb-4 p-3 rounded-lg bg-red-500/5 border border-red-500/15">
                        <p className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wide mb-1">
                          The Problem
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{exp.problem}</p>
                      </div>

                      {/* Action */}
                      <div className="mb-4">
                        <h4 className="text-xs font-mono font-semibold text-emerald-400 mb-2 uppercase tracking-wide">The Action</h4>
                        <ul className="space-y-2">
                          {exp.action.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <Zap className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Crisis Management Badge */}
                      {exp.hasCrisis && (
                        <div className="mb-4 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                          <div className="flex items-center gap-2 mb-1">
                            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                            <p className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wide">
                              Crisis Management
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{exp.crisisNote}</p>
                        </div>
                      )}

                      {/* Result */}
                      <div className="pt-3 border-t border-emerald-500/15">
                        <p className="text-[10px] font-mono font-semibold text-emerald-400 uppercase tracking-wide mb-1">
                          The Result
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{exp.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Principles */}
          <div className="mt-12 terminal-card">
            <div className="p-6">
              <h3 className="text-sm font-heading font-bold mb-4">Operational Commitments</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Retention over vanity metrics",
                  "Structure over noise",
                  "Proactive crisis management over reactive panic",
                  "Communication as core revenue infrastructure",
                ].map((principle, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {principle}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">Need these problems solved for your ecosystem?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://t.me/BIG_CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110"
              >
                Deploy the Content Engine
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/skills" className="btn-secondary">
                View Impact Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3ExperiencePage;
