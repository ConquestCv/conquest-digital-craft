import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const skillGroups = [
  {
    label: "Executive Support",
    items: [
      { name: "Calendar Management", note: "Scheduling · conflicts · meeting prep" },
      { name: "Inbox Prioritisation", note: "Triage · templates · zero-state hygiene" },
      { name: "Action-Item Tracking", note: "Owners · deadlines · weekly visibility" },
      { name: "Reminders & Follow-ups", note: "Recurring checks · gentle nudges" },
    ],
  },
  {
    label: "CEO Operations",
    items: [
      { name: "Call & Transcript Review", note: "Synthesis into next steps" },
      { name: "Note Synthesis", note: "Coaching calls · webinars · meetings" },
      { name: "Deadline Tracking", note: "100% visibility across workstreams" },
      { name: "Strategic Task Visibility", note: "Single source of truth for the week" },
    ],
  },
  {
    label: "Client & Coaching Support",
    items: [
      { name: "Coaching-Call Notes", note: "Action items + client updates" },
      { name: "Webinar & Masterclass Follow-ups", note: "Attendee comms · recap emails" },
      { name: "Lead Nurturing", note: "Warm follow-ups · pipeline notes" },
      { name: "Professional Correspondence", note: "Executive tone · ghost-writing-ready" },
    ],
  },
  {
    label: "Digital Organisation",
    items: [
      { name: "Google Drive", note: "Folder structure · document control" },
      { name: "CRM Updates", note: "Salesforce · HubSpot · Zendesk" },
      { name: "Spreadsheet Trackers", note: "Sheets / Excel reporting" },
      { name: "SOP Compliance & Reporting", note: "Audit-ready records" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Google Workspace", note: "Gmail · Calendar · Drive · Docs · Sheets" },
      { name: "Microsoft Excel", note: "Trackers · pivots · reporting" },
      { name: "Zoom · Slack · Trello · Notion", note: "Remote collaboration stack" },
      { name: "Salesforce · HubSpot · Zendesk", note: "CRM & client systems" },
    ],
  },
  {
    label: "Productivity Edge",
    items: [
      { name: "AI Productivity Tools", note: "Drafting · summarisation · structure" },
      { name: "Workflow Documentation", note: "SOPs · templates · playbooks" },
      { name: "Time-Zone Coordination", note: "PST · MST · EST · CST aligned" },
      { name: "Discretion & Confidentiality", note: "Executive-grade handling" },
    ],
  },
];

const metrics = [
  { value: "60–80+", label: "Daily records" },
  { value: "95%", label: "Data accuracy" },
  { value: "100%", label: "Deadline visibility" },
  { value: "4 TZ", label: "PST/MST/EST/CST" },
];

const SkillsPage = () => {
  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">Capabilities</span>
          <h1 className="page-title mt-4">
            The toolkit behind a
            <br />
            <span className="text-muted-foreground font-normal">
              calmer executive week.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            Executive support, CEO operations and digital organisation —
            grounded in Google Workspace, CRM discipline and tracked
            follow-through across Outsource Global, Turing and Flutterwave.
          </p>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-5 py-7 ${i === 0 ? "border-l border-border" : ""}`}
              >
                <div className="stat-value text-foreground">{m.value}</div>
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mt-2">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill groups */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <div key={group.label} className="card-flat p-6">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
                  <h3 className="text-base font-semibold">{group.label}</h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(group.items.length).padStart(2, "0")} items
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="font-mono text-[10px] text-accent mt-1.5 flex-shrink-0">
                          ▸
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-foreground">
                            {item.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {item.note}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Looking for a steady second brain?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Available for full-time, part-time or project-based executive
            support across PST, MST, EST and CST business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/experience" className="btn-secondary">
              View Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
