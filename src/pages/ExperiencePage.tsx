import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Outsource Global",
    role: "Virtual Assistant & Remote Operations Support",
    period: "Nov 2024 – Mar 2026",
    type: "Remote",
    summary:
      "Executive-facing virtual assistant supporting calendar, inbox, documentation and reporting workflows for senior operators across distributed teams.",
    achievements: [
      "Provided executive calendar and inbox support — meeting prep, document handling, spreadsheet updates and ongoing task tracking.",
      "Synthesised messages, calls and notes into action items and pending priorities for managers, ensuring nothing slipped between weeks.",
      "Handled 60–80+ daily records across CRM and shared workspaces with strong data accuracy and audit-ready hygiene.",
      "Built reports, trackers, meeting notes and workflow summaries in Sheets and Excel for cross-team visibility.",
      "Coordinated reminders and follow-ups so deadlines, client requests and recurring commitments stayed on time.",
    ],
    tags: ["Calendar & Inbox", "Action Items", "Sheets / Excel", "CRM"],
  },
  {
    company: "Turing",
    role: "Customer Service Rep · Account Documentation Support",
    period: "Sept 2023 – Jul 2024",
    type: "Remote",
    summary:
      "Documentation-led customer support for a global marketplace — focused on CRM hygiene, accurate interaction histories and clean escalations.",
    achievements: [
      "Documented client interactions and maintained accurate, structured records inside the CRM.",
      "Verified customer details across accounts and kept interaction histories clean for downstream teams.",
      "Built response templates and resolution notes that improved consistency across the support pod.",
      "Escalated cleanly with full context so engineering and ops teams could move faster.",
    ],
    tags: ["CRM Hygiene", "Documentation", "Templates"],
  },
  {
    company: "Flutterwave",
    role: "Operations & Administrative Support Intern (Paid)",
    period: "Jan 2023 – Jul 2023",
    type: "Remote · Internship",
    summary:
      "Operations support for distributed teams — focused on data hygiene, online research, file organisation, task tracking and lightweight reporting.",
    achievements: [
      "Handled daily data entry, online research, digital file organisation, task tracking and basic reporting.",
      "Built Google Sheets trackers for clients, workflow progress and ongoing follow-ups.",
      "Prepared meeting notes and internal summaries to keep cross-team visibility tight.",
      "Supported coordination for senior operations leads across recurring workstreams.",
    ],
    tags: ["Operations", "Sheets", "Documentation"],
  },
];

const ExperiencePage = () => {
  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">Experience</span>
          <h1 className="page-title mt-4">
            Two-plus years supporting
            <br />
            <span className="text-muted-foreground font-normal">
              executives and remote ops.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            Roles at Outsource Global, Turing and Flutterwave — focused on
            executive support, documentation discipline and operational
            visibility across distributed teams.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-7">
              <div className="timeline-rail" />

              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <div className="timeline-marker top-7" />

                    <div className="card-flat p-6 lg:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <span className="num-marker">
                            0{i + 1}.
                          </span>
                          <h3 className="text-xl font-semibold mt-1">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="stat-badge">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="stat-badge">
                            <MapPin className="w-3 h-3" />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-foreground/85 leading-relaxed mb-5">
                        {exp.summary}
                      </p>

                      <ul className="space-y-2.5 mb-5">
                        {exp.achievements.map((a, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span className="font-mono text-[10px] text-accent mt-1.5 flex-shrink-0">
                              ▸
                            </span>
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                        {exp.tags.map((t) => (
                          <span key={t} className="mono-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Want the full version?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Happy to share the detailed CV, references, or jump on a quick call.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/skills" className="btn-secondary">
              View Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
