import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Zap, BarChart3, Clock } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const workPrinciples = [
  "Retention over vanity metrics",
  "Structure over noise",
  "Proactive crisis management over reactive panic",
  "Communication as core revenue infrastructure",
  "Reliability in volatility",
];

const understandings = [
  { name: "Market Cycles", icon: TrendingUp },
  { name: "Fast Pivots", icon: Zap },
  { name: "Narrative Shifts", icon: BarChart3 },
  { name: "Limited Structure", icon: Shield },
  { name: "Resource Constraints", icon: Clock },
];

const Web3AboutPage = () => {
  return (
    <div className="relative network-pattern">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <p className="text-emerald-400 uppercase text-xs font-mono font-medium tracking-wide mb-3">
          Ecosystem Retention Specialist
        </p>
        <h1 className="page-title">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Me</span>
        </h1>
        <p className="page-subtitle">
          Engineering retention systems for high-utility Web3 ecosystems.
        </p>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Side */}
            <div className="relative">
              <div className="sticky top-28">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
                  <div className="relative p-1.5 rounded-2xl border border-emerald-500/30 bg-card/80 backdrop-blur-sm max-w-sm mx-auto">
                    <img
                      src={profileImage}
                      alt="Aisiri Conquest Samuel"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              {/* Core Purpose */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  What I Solve
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    I help Web3 teams <span className="text-foreground font-medium">stop the bleeding</span>—user drop-off, FUD spirals, content that gets impressions but not conversions, communities that grow but don't retain.
                  </p>
                  <p>
                    I'm not a "community manager" or a "content creator." I'm an <span className="text-emerald-400 font-medium">Ecosystem Retention Specialist</span>—I engineer the systems that turn your community from a cost center into a growth engine.
                  </p>
                  <p>
                    Specialized in DePIN, AI, and RWA protocols where technical complexity is the #1 barrier to retail adoption.
                  </p>
                </div>
              </div>

              {/* Positioning */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  My Role in Your Ecosystem
                </h2>
                <div className="terminal-card">
                  <div className="p-5">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      I'm the person you hire when your community is leaking users and your content isn't converting. I sit at the intersection of content engineering, moderation infrastructure, and growth strategy.
                    </p>
                    <div className="mt-4 space-y-2 text-sm font-mono">
                      <p className="text-muted-foreground">→ Turning <span className="text-emerald-400">lurkers into holders</span></p>
                      <p className="text-muted-foreground">→ Turning <span className="text-emerald-400">FUD into structured FAQ responses</span></p>
                      <p className="text-muted-foreground">→ Turning <span className="text-emerald-400">technical jargon into viral content</span></p>
                      <p className="text-muted-foreground">→ Turning <span className="text-emerald-400">announcement channels into retention engines</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Principles */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Operational Commitments
                </h2>
                <ul className="space-y-2">
                  {workPrinciples.map((principle, index) => (
                    <li key={index} className="flex items-center gap-2 group">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Web3 Understanding */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  I Operate Inside Web3 Realities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {understandings.map((item, index) => (
                    <div
                      key={index}
                      className="glass-card flex items-center gap-2 px-3 py-2.5 cursor-pointer text-sm"
                    >
                      <item.icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-muted-foreground text-xs font-mono">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link to="/experience" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110">
                  View Problem-Solver Proof
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Initiate Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3AboutPage;
