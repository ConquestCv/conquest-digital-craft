import { ArrowRight, Download, Sparkles, Zap, Search, Bot } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";
import resumePdf from "@/assets/resume.pdf.asset.json";

const chips = [
  { icon: Bot, label: "AI Operations" },
  { icon: Zap, label: "Workflow Automation" },
  { icon: Search, label: "Deep Research" },
  { icon: Sparkles, label: "AI Tool Builder" },
];

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      {/* animated workflow lines background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        aria-hidden
      >
        <defs>
          <linearGradient id="flowGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[15, 35, 55, 75].map((y, i) => (
          <path
            key={i}
            d={`M -20 ${y * 8} C 300 ${y * 8 - 40}, 700 ${y * 8 + 40}, 1400 ${y * 8}`}
            fill="none"
            stroke="url(#flowGrad)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="animate-flow"
            style={{ animationDelay: `${i * 0.6}s`, animationDuration: `${6 + i}s` }}
          />
        ))}
      </svg>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="animate-slide-up stagger-1">
              <span className="badge-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-dot" />
                Available — AI-first teams · founder-led ops
              </span>
            </div>

            <h1 className="animate-slide-up stagger-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-tight">
              I build{" "}
              <span className="text-gradient">useful systems</span>
              <br />
              for AI-first operations.
            </h1>

            <p className="animate-slide-up stagger-3 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Aisiri Conquest Samuel — AI Operations & Automation Specialist.
              I use AI every day to research, draft, automate, and support
              executives. When I hit friction in a workflow, I build the fix.
            </p>

            <div className="animate-slide-up stagger-4 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo("problems")} className="btn-primary">
                View my work <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo("contact")} className="btn-secondary">
                Contact me
              </button>
              <a
                href={resumePdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Download className="w-4 h-4" /> Résumé
              </a>
            </div>

            <div className="animate-slide-up stagger-5 pt-4 flex flex-wrap items-center gap-2">
              {chips.map((c) => (
                <div key={c.label} className="mono-pill">
                  <c.icon className="w-3 h-3 text-accent" />
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — terminal panel with profile + live signals */}
          <div className="lg:col-span-5 animate-slide-up stagger-3">
            <div className="term-panel relative">
              <div className="term-header">
                <span className="term-dot bg-destructive/70" />
                <span className="term-dot bg-warning/70" />
                <span className="term-dot bg-accent/80" />
                <span className="ml-2 text-[11px] font-mono text-muted-foreground">
                  ~/conquest/status.sh
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative shrink-0">
                    <img
                      src={profileImage}
                      alt="Aisiri Conquest Samuel"
                      className="w-20 h-20 rounded-md object-cover glow-ring"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent border-2 border-card animate-pulse-dot" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                      operator
                    </div>
                    <div className="text-lg font-heading font-semibold leading-tight">
                      Aisiri Conquest Samuel
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Lagos, NG · Remote-first
                    </div>
                  </div>
                </div>

                <div className="space-y-2 font-mono text-[12px]">
                  {[
                    ["ai_workflows", "6 systems", "text-accent"],
                    ["automations_shipped", "5+ tools", "text-accent"],
                    ["research_ops", "structured", "text-accent"],
                    ["exec_support", "2+ yrs", "text-accent"],
                  ].map(([k, v, c]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3 py-1.5 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground">{k}</span>
                      <span className={`${c} font-medium`}>{v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-border">
                  <div className="text-[11px] font-mono text-muted-foreground">
                    <span className="text-accent">$</span> ready --to-build
                    <span className="animate-blink text-accent">▊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
