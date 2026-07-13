import { Binoculars, GitCompare, ScanSearch, Coins, Headphones, Cpu } from "lucide-react";

const domains = [
  { icon: Cpu, label: "Software", note: "APIs, SDKs, dev tools" },
  { icon: ScanSearch, label: "AI", note: "Models, agents, prompt eng." },
  { icon: Coins, label: "Crypto", note: "Tokens, protocols, on-chain" },
  { icon: Headphones, label: "Customer support", note: "Tools, workflows, benchmarks" },
  { icon: Binoculars, label: "Telecom", note: "Providers, plans, coverage" },
  { icon: GitCompare, label: "Productivity", note: "Tools, comparisons, ROI" },
];

const Research = () => (
  <section id="research" className="section-wrap">
    <div className="section-container">
      <div className="h-eyebrow-block max-w-3xl">
        <span className="eyebrow">research & knowledge</span>
        <h2 className="section-title">A structured way to know things.</h2>
        <p className="section-lede">
          Every research pass produces the same artefact shape — context,
          comparison, risks, recommendation. So the next reader (usually
          the executive) sees exactly what they need without hunting for it.
        </p>
      </div>

      {/* Knowledge map */}
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 panel p-6 relative overflow-hidden">
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">Domain map</div>
          <svg viewBox="0 0 500 320" className="w-full h-72">
            {/* central hub */}
            <g>
              <circle cx="250" cy="160" r="42" fill="hsl(var(--accent) / 0.1)" stroke="hsl(var(--accent))" strokeWidth="1.5" />
              <text x="250" y="158" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontFamily="Space Grotesk" fontWeight="600">
                Research
              </text>
              <text x="250" y="172" textAnchor="middle" fill="hsl(var(--accent))" fontSize="9" fontFamily="JetBrains Mono">
                OS
              </text>
            </g>
            {domains.map((d, i) => {
              const angle = (i / domains.length) * Math.PI * 2 - Math.PI / 2;
              const x = 250 + Math.cos(angle) * 130;
              const y = 160 + Math.sin(angle) * 110;
              return (
                <g key={d.label}>
                  <line x1="250" y1="160" x2={x} y2={y}
                        stroke="hsl(var(--accent))" strokeOpacity="0.35" strokeWidth="1"
                        strokeDasharray="3 4" className="animate-flow" style={{ animationDelay: `${i * 0.2}s` }} />
                  <circle cx={x} cy={y} r="22" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
                  <text x={x} y={y - 2} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontFamily="Space Grotesk" fontWeight="500">
                    {d.label.split(" ")[0]}
                  </text>
                  <text x={x} y={y + 10} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" fontFamily="JetBrains Mono">
                    {d.label.split(" ")[1] || ""}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="lg:col-span-5 space-y-3">
          {domains.map((d) => (
            <div key={d.label} className="flex items-start gap-3 p-3 rounded-md border border-border bg-card/40 hover:border-accent/40 transition-colors">
              <span className="w-8 h-8 rounded-md border border-accent/30 bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <d.icon className="w-4 h-4" />
              </span>
              <div>
                <div className="text-sm font-medium">{d.label}</div>
                <div className="text-xs text-muted-foreground">{d.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Research;
