import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronRight, LineChart, MousePointer2, Video, Workflow, Brain, PenLine } from "lucide-react";
import chatCapture from "@/assets/chat-capture-ref.png.asset.json";

type Project = {
  id: string;
  title: string;
  icon: any;
  problem: string;
  approach: string;
  built: string;
  result: string;
  tools: string[];
  accent: string;
  visual: "trading" | "scroll" | "recorder" | "automation" | "research" | "content";
};

const projects: Project[] = [
  {
    id: "trading",
    title: "AI Trading Assistant",
    icon: LineChart,
    problem: "Crypto research meant repeating the same lookups every week — token context, market signals, project docs, sentiment — with no consistent way to compare or record what I found.",
    approach: "Wired multiple AI models through OpenRouter into a research pipeline with structured prompts, so every token gets the same treatment. Outputs land in a repeatable decision-support brief instead of a Notes app dump.",
    built: "A multi-model research workflow that ingests token context and market signals, runs them through several models in parallel, then compiles a structured brief.",
    result: "Repeatable token-analysis notes. Faster from question → position. No more starting from scratch every time.",
    tools: ["OpenRouter API", "Claude", "GPT", "Prompt workflows", "Structured reports"],
    accent: "from-accent/40 to-emerald-500/10",
    visual: "trading",
  },
  {
    id: "scroll",
    title: "Scroll-and-Copy Extension",
    icon: MousePointer2,
    problem: "Long ChatGPT conversations, forum threads, and doc pages break when you try to copy them manually — selection resets, sections get missed, you lose context halfway.",
    approach: "Chrome extension that auto-scrolls in small increments and appends copied text to a buffer, so you can go do something else while a long page captures cleanly in the background.",
    built: "A browser extension with start/stop controls, direction and speed settings, and a live block/scroll counter — the workflow demoed on the right.",
    result: "Long pages captured without babysitting. Cursor stays free for other work while the extension runs.",
    tools: ["AI-assisted coding", "Chrome extension APIs", "DOM automation"],
    accent: "from-cyan-500/30 to-accent/10",
    visual: "scroll",
  },
  {
    id: "recorder",
    title: "Custom Screen Recorder",
    icon: Video,
    problem: "Off-the-shelf recorders bury the controls I actually use behind menus, or push me to accounts, or add friction to the simple case: hit record, get a clip.",
    approach: "Built a lightweight recorder around my own workflow — the two controls I need, the format I ship in, the folder it lands in. Nothing else.",
    built: "A desktop utility for quick captures used in documentation, walkthroughs, and troubleshooting.",
    result: "Faster Loom-style updates. Zero friction between 'I should record this' and a shareable clip.",
    tools: ["AI-assisted development", "Desktop utility design", "Workflow testing"],
    accent: "from-violet-500/30 to-accent/10",
    visual: "recorder",
  },
  {
    id: "automation",
    title: "Personal Productivity Suite",
    icon: Workflow,
    problem: "Small tasks that don't deserve a full app — file renaming, research organization, task prep — quietly cost hours across a week.",
    approach: "Instead of finding a tool for each, I built small utilities that snap together: research goes into templates, templates feed daily prep, prep feeds status updates.",
    built: "A set of local utilities and spreadsheet workflows for research organization, file/workflow management, and daily task prep.",
    result: "Fewer things I do by hand. The same 30 minutes of repetitive setup now takes 5.",
    tools: ["AI coding assistants", "Spreadsheet workflows", "Local scripts"],
    accent: "from-amber-500/25 to-accent/10",
    visual: "automation",
  },
  {
    id: "research",
    title: "AI Research & Decision Support",
    icon: Brain,
    problem: "Executive-quality briefs on unfamiliar topics — telecom, crypto, customer support tools — take days if you start from scratch every time.",
    approach: "A structured prompt stack: define the question, pull context across models, verify, then compress into an executive summary with clear recommendations.",
    built: "A repeatable research operating system for software, telecom, crypto, startups, customer support, and productivity tools.",
    result: "New topic → executive brief in a fraction of the time. Consistent shape. Decisions are easier because the shape is familiar.",
    tools: ["Claude", "ChatGPT", "Codex", "Structured prompts", "Executive summaries"],
    accent: "from-blue-500/25 to-accent/10",
    visual: "research",
  },
  {
    id: "content",
    title: "AI Content Production Workflow",
    icon: PenLine,
    problem: "Content pipelines fall apart between research and drafting. Ideas rot, threads lose structure, editing takes longer than writing.",
    approach: "One pipeline: idea → research → outline → draft → edit → publish. Each stage has a template. AI does the heavy lifting, I do the judgment calls.",
    built: "An editorial system for long-form articles, technical explainers, X threads, and community updates.",
    result: "Higher throughput without losing structure or voice. Threads live on X — see the Writing section.",
    tools: ["AI research", "Editorial checklists", "Content templates"],
    accent: "from-rose-500/25 to-accent/10",
    visual: "content",
  },
];

// ---------- inline visualizations ----------
const Visual = ({ kind }: { kind: Project["visual"] }) => {
  switch (kind) {
    case "trading":
      return <TradingVisual />;
    case "scroll":
      return <ScrollVisual />;
    case "recorder":
      return <RecorderVisual />;
    case "automation":
      return <AutomationVisual />;
    case "research":
      return <ResearchVisual />;
    case "content":
      return <ContentVisual />;
  }
};

const TradingVisual = () => (
  <div className="term-panel h-full">
    <div className="term-header">
      <span className="term-dot bg-destructive/60" />
      <span className="term-dot bg-warning/60" />
      <span className="term-dot bg-accent/70" />
      <span className="ml-2 text-[11px] font-mono text-muted-foreground">trading-assistant / brief</span>
    </div>
    <div className="p-5 space-y-3">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Token</div>
          <div className="text-lg font-heading font-semibold">$AXIRA-DEMO</div>
        </div>
        <span className="badge-accent">Structured brief</span>
      </div>
      {/* mini sparkline */}
      <svg viewBox="0 0 300 80" className="w-full h-20">
        <defs>
          <linearGradient id="spg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 60 L 30 50 L 60 55 L 90 40 L 120 45 L 150 30 L 180 35 L 210 22 L 240 28 L 270 15 L 300 20"
          fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5"
        />
        <path
          d="M 0 60 L 30 50 L 60 55 L 90 40 L 120 45 L 150 30 L 180 35 L 210 22 L 240 28 L 270 15 L 300 20 L 300 80 L 0 80 Z"
          fill="url(#spg)"
        />
      </svg>
      <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
        {[
          ["Signal", "bullish"],
          ["Models", "3 agreed"],
          ["Confidence", "high"],
        ].map(([k, v]) => (
          <div key={k} className="p-2 rounded border border-border bg-background/40">
            <div className="text-muted-foreground text-[10px] uppercase tracking-widest">{k}</div>
            <div className="text-accent">{v}</div>
          </div>
        ))}
      </div>
      <div className="text-[11px] font-mono text-muted-foreground pt-1 border-t border-border">
        <span className="text-accent">✓</span> Research → analysis → decision brief
      </div>
    </div>
  </div>
);

const ScrollVisual = () => {
  const [blocks, setBlocks] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setBlocks((b) => (b >= 12 ? 0 : b + 1));
      setScrollPct((p) => (p >= 100 ? 0 : p + 8));
    }, 700);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="term-panel h-full relative overflow-hidden">
      <div className="term-header">
        <span className="term-dot bg-destructive/60" />
        <span className="term-dot bg-warning/60" />
        <span className="term-dot bg-accent/70" />
        <span className="ml-2 text-[11px] font-mono text-muted-foreground">chat-capture.js</span>
      </div>
      <div className="p-4 grid grid-cols-5 gap-3">
        {/* mock page */}
        <div className="col-span-3 h-52 rounded border border-border bg-background/40 relative overflow-hidden">
          <div className="absolute inset-x-0 space-y-2 p-3" style={{ transform: `translateY(${-scrollPct * 0.6}px)`, transition: "transform 0.6s linear" }}>
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="space-y-1">
                <div className="h-1.5 rounded bg-muted-foreground/25" style={{ width: `${60 + (i * 13) % 40}%` }} />
                <div className="h-1.5 rounded bg-muted-foreground/15" style={{ width: `${40 + (i * 7) % 45}%` }} />
              </div>
            ))}
          </div>
          {/* scan line */}
          <div className="absolute inset-x-0 h-8 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="h-full w-full scan-bar rounded" />
          </div>
        </div>
        <div className="col-span-2 rounded border border-accent/30 bg-accent/5 p-3 space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-accent">capture buffer</div>
          <div className="text-2xl font-heading font-bold text-accent tabular-nums">{blocks} <span className="text-xs text-muted-foreground">blocks</span></div>
          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
            <div className="h-full bg-accent transition-all duration-500" style={{ width: `${scrollPct}%` }} />
          </div>
          <div className="text-[10px] font-mono text-muted-foreground">scroll {scrollPct}% · mode: down</div>
          <img src={chatCapture.url} alt="Chat Capture UI reference" className="mt-2 rounded border border-border w-full object-cover object-top h-14" />
        </div>
      </div>
    </div>
  );
};

const RecorderVisual = () => (
  <div className="term-panel h-full">
    <div className="term-header">
      <span className="term-dot bg-destructive/60" />
      <span className="term-dot bg-warning/60" />
      <span className="term-dot bg-accent/70" />
      <span className="ml-2 text-[11px] font-mono text-muted-foreground">recorder.app</span>
    </div>
    <div className="p-6 flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-destructive/20 border border-destructive/40 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-destructive animate-pulse-dot" />
        </div>
        <div className="absolute inset-0 rounded-full border border-destructive/30 animate-ping" />
      </div>
      <div className="text-center">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">recording</div>
        <div className="text-2xl font-heading font-bold tabular-nums">00:47</div>
      </div>
      <div className="flex items-end gap-1 h-10">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-accent"
            style={{
              height: `${20 + Math.abs(Math.sin(i * 0.9) * 80)}%`,
              opacity: 0.4 + Math.abs(Math.sin(i * 0.5)) * 0.6,
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 w-full text-[10px] font-mono text-center">
        {["1080p", "mp4", "local"].map((t) => (
          <div key={t} className="p-1.5 rounded border border-border bg-background/40 text-muted-foreground">{t}</div>
        ))}
      </div>
    </div>
  </div>
);

const AutomationVisual = () => (
  <div className="term-panel h-full">
    <div className="term-header">
      <span className="term-dot bg-destructive/60" />
      <span className="term-dot bg-warning/60" />
      <span className="term-dot bg-accent/70" />
      <span className="ml-2 text-[11px] font-mono text-muted-foreground">automations.yml</span>
    </div>
    <svg viewBox="0 0 320 200" className="w-full h-56 p-4">
      {[
        { x: 40, y: 30, label: "research" },
        { x: 40, y: 100, label: "files" },
        { x: 40, y: 170, label: "tasks" },
        { x: 280, y: 100, label: "output" },
      ].map((n) => (
        <g key={n.label}>
          <rect x={n.x - 34} y={n.y - 12} width="68" height="24" rx="5"
            fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeOpacity="0.4" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="hsl(var(--foreground))"
                fontSize="10" fontFamily="JetBrains Mono">{n.label}</text>
        </g>
      ))}
      <g stroke="hsl(var(--accent))" strokeOpacity="0.6" fill="none" strokeWidth="1.2" strokeDasharray="3 3">
        {[30, 100, 170].map((y) => (
          <path key={y} d={`M 74 ${y} C 160 ${y}, 200 100, 246 100`} className="animate-flow" />
        ))}
      </g>
      <g fill="hsl(var(--accent))">
        <circle cx="280" cy="100" r="6" className="animate-pulse-dot" />
      </g>
    </svg>
    <div className="px-4 pb-4 text-[11px] font-mono text-muted-foreground">
      Small utilities → composed system → one clean output.
    </div>
  </div>
);

const ResearchVisual = () => (
  <div className="term-panel h-full">
    <div className="term-header">
      <span className="term-dot bg-destructive/60" />
      <span className="term-dot bg-warning/60" />
      <span className="term-dot bg-accent/70" />
      <span className="ml-2 text-[11px] font-mono text-muted-foreground">brief.md</span>
    </div>
    <div className="p-5 space-y-3">
      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Executive Brief</div>
      <div className="text-base font-heading font-semibold">Should we adopt [X tool]?</div>
      <div className="space-y-2">
        {[
          { k: "Context", pct: 100 },
          { k: "Comparison", pct: 82 },
          { k: "Risks", pct: 68 },
          { k: "Recommendation", pct: 45 },
        ].map((r) => (
          <div key={r.k}>
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-1">
              <span>{r.k}</span><span className="text-accent">{r.pct}%</span>
            </div>
            <div className="h-1 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-accent" style={{ width: `${r.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2 text-[11px] font-mono text-muted-foreground">
        <span className="text-accent">→</span> One repeatable shape across every topic
      </div>
    </div>
  </div>
);

const ContentVisual = () => (
  <div className="term-panel h-full">
    <div className="term-header">
      <span className="term-dot bg-destructive/60" />
      <span className="term-dot bg-warning/60" />
      <span className="term-dot bg-accent/70" />
      <span className="ml-2 text-[11px] font-mono text-muted-foreground">pipeline.md</span>
    </div>
    <div className="p-5">
      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
        {["idea", "research", "outline", "draft", "edit", "publish"].map((s, i, arr) => (
          <div key={s} className="flex items-center gap-1.5">
            <span className={`px-2 py-1 rounded border ${i < 5 ? "border-accent/40 bg-accent/10 text-accent" : "border-border text-muted-foreground"}`}>
              {s}
            </span>
            {i < arr.length - 1 && <ChevronRight className="w-3 h-3 text-muted-foreground" />}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {[
          ["Threads", "12+"],
          ["Long-form", "structured"],
          ["Community", "recurring"],
          ["Voice", "preserved"],
        ].map(([k, v]) => (
          <div key={k} className="p-3 rounded border border-border bg-background/40">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{k}</div>
            <div className="text-sm font-medium text-accent">{v}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ---------- section ----------
const Problems = () => (
  <section id="problems" className="section-wrap">
    <div className="section-container">
      <div className="h-eyebrow-block max-w-3xl">
        <span className="eyebrow">problems i solved</span>
        <h2 className="section-title">Not projects. Problems.</h2>
        <p className="section-lede">
          Every one of these started with something breaking, being slow, or
          being repetitive. Here's the friction, the fix, and what changed
          after.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="panel p-5 md:p-8 relative overflow-hidden group"
          >
            <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 pointer-events-none`} />

            <div className="relative grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="num-marker">CASE 0{i + 1}</span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="w-8 h-8 rounded-md border border-accent/40 bg-accent/10 flex items-center justify-center text-accent">
                    <p.icon className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-semibold tracking-tight">
                  {p.title}
                </h3>

                <div className="space-y-4">
                  {[
                    ["The problem", p.problem],
                    ["My approach", p.approach],
                    ["What I built", p.built],
                    ["Result", p.result],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-accent mb-1">
                        {k}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tools.map((t) => (
                    <span key={t} className="mono-pill !text-[10px] !py-0.5">{t}</span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <Visual kind={p.visual} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Problems;
