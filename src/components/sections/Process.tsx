import { Eye, Search, Compass, Layout, Hammer, TestTube2, Sparkles, FileText, Repeat } from "lucide-react";

const steps = [
  { icon: Eye, label: "Observe", body: "Sit with the workflow long enough to see where it actually breaks — not where people say it breaks." },
  { icon: Search, label: "Identify the bottleneck", body: "Name the single friction that costs the most time or attention. If you can't name it, you can't fix it." },
  { icon: Compass, label: "Research", body: "Look at how others solved adjacent problems. Pull context from multiple AI models and real teams." },
  { icon: Layout, label: "Design a better workflow", body: "Sketch the target state end to end before writing a single line. Cheap on paper, expensive in code." },
  { icon: Hammer, label: "Build or automate", body: "Whatever the smallest shippable version is — that. Extension, script, template, prompt stack, checklist." },
  { icon: TestTube2, label: "Test", body: "Run it against the real workload for a week. Watch where it flexes and where it snaps." },
  { icon: Sparkles, label: "Improve", body: "Ruthlessly cut friction. Every step that survives round two is one someone else will keep using." },
  { icon: FileText, label: "Document", body: "One page: what it does, when to use it, how to hand it off. This is the difference between a hack and a system." },
  { icon: Repeat, label: "Repeat", body: "Same loop, next bottleneck. Compounding small fixes is how a founder's week gets an extra day." },
];

const Process = () => (
  <section className="section-wrap pt-4">
    <div className="section-container">
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left rail: connector diagram (desktop) */}
        <aside className="hidden lg:block lg:col-span-2 sticky top-24 h-fit">
          <div className="term-panel">
            <div className="term-header">
              <span className="term-dot bg-destructive/60" />
              <span className="term-dot bg-warning/60" />
              <span className="term-dot bg-accent/70" />
              <span className="ml-2 text-[10px] font-mono text-muted-foreground">loop.sh</span>
            </div>
            <div className="p-3 font-mono text-[10px] text-muted-foreground leading-loose">
              {steps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-1.5">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.label.toLowerCase().split(" ")[0]}</span>
                </div>
              ))}
              <div className="pt-2 text-accent">
                <span className="animate-blink">▊</span> loop --forever
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-10 relative">
          {/* vertical connector line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" aria-hidden />

          <ol className="space-y-5">
            {steps.map((s, i) => (
              <li key={s.label} className="relative pl-14 animate-slide-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="absolute left-0 top-0 w-10 h-10 rounded-md border border-accent/40 bg-accent/10 text-accent flex items-center justify-center">
                  <s.icon className="w-4 h-4" />
                </span>
                <div className="panel-hover p-5">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="num-marker">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-heading font-semibold">{s.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex items-center gap-3 text-[11px] font-mono text-muted-foreground pl-14">
            <span className="text-accent">→</span> the whole loop, on repeat, on every problem worth solving.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Process;
