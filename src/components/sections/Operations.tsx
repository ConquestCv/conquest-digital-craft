import { Calendar, Inbox, ListChecks, FileText, Users, TrendingUp } from "lucide-react";

const Operations = () => (
  <section id="operations" className="section-wrap">
    <div className="section-container">
      <div className="h-eyebrow-block max-w-3xl">
        <span className="eyebrow">executive operations</span>
        <h2 className="section-title">Second brain for founder weeks.</h2>
        <p className="section-lede">
          Two-plus years supporting executives and remote ops. Concept
          dashboards below — the real ones live behind client NDAs.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Priorities dashboard */}
        <div className="term-panel lg:col-span-2">
          <div className="term-header">
            <span className="term-dot bg-destructive/60" />
            <span className="term-dot bg-warning/60" />
            <span className="term-dot bg-accent/70" />
            <span className="ml-2 text-[11px] font-mono text-muted-foreground">this-week.md</span>
          </div>
          <div className="p-6">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Priorities</div>
                <div className="text-lg font-heading font-semibold">This week</div>
              </div>
              <span className="badge-accent">4 owners · 12 items</span>
            </div>
            <div className="space-y-2">
              {[
                { p: "P0", title: "Board deck v3 — CEO review by Thu", state: "In review", ico: FileText, done: false },
                { p: "P0", title: "Series-A intro follow-ups (3)", state: "Sent · awaiting reply", ico: Inbox, done: false },
                { p: "P1", title: "Weekly team sync notes → action items", state: "Shipped", ico: ListChecks, done: true },
                { p: "P1", title: "Calendar defrag · protect Mon/Wed AM", state: "Done", ico: Calendar, done: true },
                { p: "P2", title: "Hiring pipeline dashboard refresh", state: "Owner: HR · nudged", ico: Users, done: false },
              ].map((t) => (
                <div key={t.title} className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0">
                  <span className={`mono-pill !text-[10px] shrink-0 ${t.p === "P0" ? "!text-destructive !border-destructive/30 !bg-destructive/10" : t.p === "P1" ? "!text-accent !border-accent/30 !bg-accent/10" : ""}`}>
                    {t.p}
                  </span>
                  <t.ico className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm truncate ${t.done ? "line-through text-muted-foreground" : "text-foreground"}`}>{t.title}</div>
                    <div className="text-[10px] font-mono text-muted-foreground">{t.state}</div>
                  </div>
                  {t.done && <span className="text-accent text-xs">✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Inbox zero */}
        <div className="term-panel">
          <div className="term-header">
            <span className="term-dot bg-destructive/60" />
            <span className="term-dot bg-warning/60" />
            <span className="term-dot bg-accent/70" />
            <span className="ml-2 text-[11px] font-mono text-muted-foreground">inbox.status</span>
          </div>
          <div className="p-6 text-center">
            <TrendingUp className="w-6 h-6 text-accent mx-auto mb-3" />
            <div className="text-4xl font-heading font-bold text-accent tabular-nums">0</div>
            <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mt-1">
              Unread · Founder inbox
            </div>
            <div className="mt-4 space-y-2 text-left">
              {[
                ["Triage rules", "12 active"],
                ["Auto-drafts", "on"],
                ["Follow-up tracker", "3 pending"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-[11px] font-mono">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-accent">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meeting prep */}
        <div className="panel-hover p-6 lg:col-span-3">
          <div className="flex items-center gap-2 mb-4">
            <span className="eyebrow">Meeting prep · executive summary</span>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { k: "Context", v: "One-pager on attendees, their goals, and prior touchpoints." },
              { k: "Decision needed", v: "Framed as a single question with 2–3 options and trade-offs." },
              { k: "Data", v: "Only the numbers that change the decision — nothing else." },
              { k: "Follow-ups", v: "Pre-drafted actions and a template thank-you note." },
            ].map((c) => (
              <div key={c.k}>
                <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-1">{c.k}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Operations;
