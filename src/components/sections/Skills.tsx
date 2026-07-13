import { Bot, Cog, Briefcase, Search, Sparkles, MessageSquare, Code2 } from "lucide-react";

const clusters = [
  {
    icon: Bot,
    title: "AI Tools",
    items: ["Claude", "ChatGPT", "Codex", "OpenRouter", "Prompt design", "Multi-model workflows"],
  },
  {
    icon: Cog,
    title: "Automation",
    items: ["AI-assisted coding", "Rapid prototyping", "Chrome extensions", "Desktop utilities", "Spreadsheet workflows"],
  },
  {
    icon: Briefcase,
    title: "Executive Ops",
    items: ["Calendar support", "Inbox triage", "Meeting prep", "Executive summaries", "Priority tracking", "Documentation"],
  },
  {
    icon: Search,
    title: "Research",
    items: ["Competitor research", "Tool comparison", "Market analysis", "Technical research", "Executive briefs"],
  },
  {
    icon: Sparkles,
    title: "Productivity",
    items: ["Google Workspace", "Notion", "Trello", "Excel", "Loom", "Zoom"],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    items: ["Slack", "Stakeholder coordination", "Status updates", "Long-form writing", "Community moderation"],
  },
  {
    icon: Code2,
    title: "Development",
    items: ["GitHub basics", "Browser-based tools", "Debugging with AI", "Prompt-to-prototype"],
  },
];

const Skills = () => (
  <section id="skills" className="section-wrap">
    <div className="section-container">
      <div className="h-eyebrow-block max-w-3xl">
        <span className="eyebrow">skills & tools</span>
        <h2 className="section-title">The stack, grouped by intent.</h2>
        <p className="section-lede">
          No progress bars. What matters is what these tools let me ship —
          research pipelines, automations, executive support systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {clusters.map((c, i) => (
          <div key={c.title} className="panel-hover p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-md border border-accent/40 bg-accent/10 flex items-center justify-center text-accent">
                <c.icon className="w-4 h-4" />
              </span>
              <h3 className="text-base font-heading font-semibold">{c.title}</h3>
              <span className="ml-auto num-marker">0{i + 1}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {c.items.map((it) => (
                <span key={it} className="mono-pill">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
