import { Calendar, Inbox, ListChecks, FileText, Users, TrendingUp, Clock, CheckCircle2, AlertCircle, GitBranch, Target, ArrowRight } from "lucide-react";

const Operations = () => (
  <section className="section-wrap pt-4">
    <div className="section-container space-y-6">
      {/* Row 1: Priorities (wide) + Inbox */}
      <div className="grid lg:grid-cols-3 gap-5">
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
                  {t.done && <CheckCircle2 className="w-3.5 h-3.5 text-accent" />}
                </div>
              ))}
            </div>
          </div>
        </div>

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
                ["VIP senders", "9 flagged"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-[11px] font-mono">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-accent">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Calendar planning */}
      <div className="term-panel">
        <div className="term-header">
          <span className="term-dot bg-destructive/60" />
          <span className="term-dot bg-warning/60" />
          <span className="term-dot bg-accent/70" />
          <span className="ml-2 text-[11px] font-mono text-muted-foreground">calendar.week</span>
        </div>
        <div className="p-6">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Calendar defrag</div>
              <div className="text-lg font-heading font-semibold">Deep work protected</div>
            </div>
            <span className="badge-accent">14h focus · 6h meetings</span>
          </div>
          <div className="grid grid-cols-5 gap-2 text-[10px] font-mono">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, di) => (
              <div key={d} className="space-y-1">
                <div className="text-center text-muted-foreground uppercase tracking-widest">{d}</div>
                {[9, 10, 11, 12, 13, 14, 15, 16].map((h) => {
                  const focus = (di === 0 || di === 2) && h < 12;
                  const meeting = h === 13 || (di === 1 && h === 15) || (di === 3 && h === 10);
                  const cls = focus
                    ? "bg-accent/25 border-accent/50 text-accent"
                    : meeting
                    ? "bg-destructive/15 border-destructive/40 text-destructive"
                    : "bg-background/40 border-border text-muted-foreground";
                  return (
                    <div key={h} className={`px-1.5 py-1 rounded border ${cls}`}>
                      {focus ? "focus" : meeting ? "1:1" : `${h}:00`}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-[10px] font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-accent/60" /> Focus block</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-destructive/60" /> Meeting</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded border border-border" /> Available</span>
          </div>
        </div>
      </div>

      {/* Row 3: Meeting prep + Decision brief */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="term-panel">
          <div className="term-header">
            <span className="term-dot bg-destructive/60" />
            <span className="term-dot bg-warning/60" />
            <span className="term-dot bg-accent/70" />
            <span className="ml-2 text-[11px] font-mono text-muted-foreground">meeting-prep.md</span>
          </div>
          <div className="p-6">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">One-pager</div>
            <div className="text-lg font-heading font-semibold mb-4">Meeting prep · exec summary</div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Context", v: "Attendees, prior touchpoints, their goals." },
                { k: "Decision", v: "One question · 2–3 options · trade-offs." },
                { k: "Data", v: "Only numbers that change the decision." },
                { k: "Follow-ups", v: "Pre-drafted actions + thank-you." },
              ].map((c) => (
                <div key={c.k}>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-accent mb-1">{c.k}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="term-panel">
          <div className="term-header">
            <span className="term-dot bg-destructive/60" />
            <span className="term-dot bg-warning/60" />
            <span className="term-dot bg-accent/70" />
            <span className="ml-2 text-[11px] font-mono text-muted-foreground">decision-brief.md</span>
          </div>
          <div className="p-6">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Decision support</div>
            <div className="text-lg font-heading font-semibold mb-3">Should we adopt [tool X]?</div>
            <div className="space-y-2">
              {[
                { k: "Options", v: "3 vendors compared", ico: GitBranch },
                { k: "Risks", v: "Data residency, cost @ scale", ico: AlertCircle },
                { k: "Recommendation", v: "Option B · 6-week pilot", ico: Target },
                { k: "Owner", v: "Ops · review Fri", ico: Users },
              ].map((r) => (
                <div key={r.k} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
                  <r.ico className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="text-[11px] font-mono text-muted-foreground w-28">{r.k}</span>
                  <span className="text-sm text-foreground flex-1">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 4: Documentation flow */}
      <div className="term-panel">
        <div className="term-header">
          <span className="term-dot bg-destructive/60" />
          <span className="term-dot bg-warning/60" />
          <span className="term-dot bg-accent/70" />
          <span className="ml-2 text-[11px] font-mono text-muted-foreground">docs.pipeline</span>
        </div>
        <div className="p-6">
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Documentation</div>
          <div className="text-lg font-heading font-semibold mb-5">Scattered notes → structured outputs</div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
            {[
              { s: "meeting notes", c: "muted" },
              { s: "summary", c: "muted" },
              { s: "action items", c: "accent" },
              { s: "assigned tasks", c: "accent" },
              { s: "follow-up", c: "accent" },
              { s: "completion", c: "accent" },
            ].map((n, i, arr) => (
              <div key={n.s} className="flex items-center gap-2">
                <span className={`px-3 py-1.5 rounded border ${n.c === "accent" ? "border-accent/40 bg-accent/10 text-accent" : "border-border text-muted-foreground bg-background/40"}`}>
                  {n.s}
                </span>
                {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground" />}
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { k: "Avg turnaround", v: "< 2h", ico: Clock },
              { k: "Action clarity", v: "owner+date", ico: Target },
              { k: "Follow-through", v: "tracked", ico: CheckCircle2 },
              { k: "Format", v: "one-page", ico: FileText },
            ].map((s) => (
              <div key={s.k} className="p-3 rounded border border-border bg-background/40">
                <s.ico className="w-3.5 h-3.5 text-accent mb-1.5" />
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{s.k}</div>
                <div className="text-sm font-medium text-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Operations;
