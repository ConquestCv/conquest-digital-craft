import { Search, PenSquare, Brain, FileText, Zap, Sparkles } from "lucide-react";

const flows = [
  {
    icon: Search,
    title: "AI Research",
    steps: ["Question", "Multi-model context", "Verify", "Executive brief"],
  },
  {
    icon: PenSquare,
    title: "Content Production",
    steps: ["Idea", "Research", "Outline", "Draft", "Edit", "Publish"],
  },
  {
    icon: Brain,
    title: "Decision Support",
    steps: ["Options", "Trade-offs", "Risks", "Recommendation"],
  },
  {
    icon: FileText,
    title: "Executive Documentation",
    steps: ["Raw notes", "Structure", "Summary", "Action items"],
  },
  {
    icon: Sparkles,
    title: "Prompt Development",
    steps: ["Task", "Draft prompt", "Test", "Refine", "Reuse"],
  },
  {
    icon: Zap,
    title: "Productivity Automation",
    steps: ["Repeat spotted", "Utility built", "Wired in", "Time back"],
  },
];

const Workflows = () => (
  <section id="workflows" className="section-wrap relative">
    <div className="section-container">
      <div className="h-eyebrow-block max-w-3xl">
        <span className="eyebrow">ai workflows & systems</span>
        <h2 className="section-title">How the work actually gets done.</h2>
        <p className="section-lede">
          These are the pipelines I run every week. Same shape each time —
          which is why the output is consistent and the second run is
          always faster than the first.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {flows.map((f, idx) => (
          <div key={f.title} className="panel-hover p-6 group relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-9 h-9 rounded-md border border-accent/40 bg-accent/10 flex items-center justify-center text-accent">
                <f.icon className="w-4 h-4" />
              </span>
              <h3 className="text-lg font-heading font-semibold">{f.title}</h3>
              <span className="ml-auto num-marker">0{idx + 1}</span>
            </div>

            {/* Animated node chain */}
            <div className="relative">
              <svg viewBox={`0 0 ${f.steps.length * 100} 60`} className="w-full h-20">
                {/* connectors */}
                {f.steps.slice(0, -1).map((_, i) => (
                  <line
                    key={i}
                    x1={i * 100 + 60}
                    x2={(i + 1) * 100 + 40}
                    y1="30"
                    y2="30"
                    stroke="hsl(var(--accent))"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-flow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
                {/* nodes */}
                {f.steps.map((s, i) => (
                  <g key={s}>
                    <circle
                      cx={i * 100 + 50}
                      cy="30"
                      r="10"
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--accent))"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx={i * 100 + 50}
                      cy="30"
                      r="4"
                      fill="hsl(var(--accent))"
                      opacity={0.7}
                    />
                  </g>
                ))}
              </svg>
              <div
                className="grid gap-1 mt-1"
                style={{ gridTemplateColumns: `repeat(${f.steps.length}, minmax(0, 1fr))` }}
              >
                {f.steps.map((s) => (
                  <div key={s} className="text-[10px] font-mono text-center text-muted-foreground truncate">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Workflows;
