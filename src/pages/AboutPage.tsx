import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const competencies = [
  {
    title: "Calendar & inbox ownership",
    body: "Triaging meetings, requests and messages so the executive's day stays focused on decisions, not logistics.",
  },
  {
    title: "Notes → action items",
    body: "Synthesising calls, coaching sessions and webinars into clear next steps, owners and deadlines.",
  },
  {
    title: "CEO operations support",
    body: "Tracking strategic tasks, escalating what matters, and giving the CEO a single source of truth for the week.",
  },
  {
    title: "Client & coaching follow-ups",
    body: "Professional correspondence, gentle nudges and lead nurturing — kept warm, organised and on time.",
  },
  {
    title: "CRM & spreadsheet discipline",
    body: "60–80+ daily records across CRM and shared workspaces, kept accurate and audit-ready.",
  },
  {
    title: "Google Workspace fluency",
    body: "Drive, Docs, Sheets and Calendar wielded as an operational system — not just office tools.",
  },
  {
    title: "Discretion & confidentiality",
    body: "Calm handling of sensitive context, executive communication and private workflows.",
  },
  {
    title: "Deadline-driven follow-through",
    body: "Reminders, recurring checks and structured trackers so nothing slips between people or weeks.",
  },
];

const principles = [
  "Protect the executive's time first — everything else flows from that.",
  "If it isn't tracked, it didn't happen.",
  "Discretion is a deliverable, not a default.",
  "Calm, organised, deadline-driven — every week.",
];

const AboutPage = () => {
  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">About</span>
          <h1 className="page-title mt-4">
            I keep executive weeks
            <br />
            <span className="text-muted-foreground font-normal">
              calm, organised and on time.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            Virtual Executive Assistant with 2+ years supporting CEOs and
            remote ops — calendar &amp; inbox triage, call-note synthesis,
            action-item tracking, and clean documentation across CRM and
            Google Workspace.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left — portrait + quick facts */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-5">
                <div className="card-flat overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                <div className="card-flat p-5 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                    Quick facts
                  </div>
                  {[
                    ["Based", "Lagos, Nigeria"],
                    ["Mode", "Remote · Full / Part-time"],
                    ["Stack", "Google Workspace · CRM"],
                    ["Time zones", "PST · MST · EST · CST"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{k}</span>
                      <span className="text-foreground font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right — content */}
            <div className="lg:col-span-8 space-y-14">
              <div className="space-y-4">
                <span className="eyebrow">Background</span>
                <div className="space-y-4 text-foreground/85 text-base leading-relaxed">
                  <p>
                    I'm{" "}
                    <span className="text-foreground font-medium">
                      Aisiri Conquest Samuel
                    </span>
                    , a Virtual Executive Assistant supporting founders and
                    operations leaders across calendar management, inbox
                    triage, executive correspondence and project follow-through.
                  </p>
                  <p>
                    My focus is structure: turning calls, coaching sessions
                    and webinars into tracked action items, keeping CRM and
                    Drive clean, and making sure deadlines and client requests
                    are visible to the people who need them.
                  </p>
                  <p>
                    Discreet, organised and deadline-driven — comfortable
                    holding sensitive context and aligning to PST, MST, EST or
                    CST business hours for international engagements.
                  </p>
                </div>
              </div>

              {/* Competencies */}
              <div className="space-y-5">
                <span className="eyebrow">Core Competencies</span>
                <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
                  {competencies.map((c) => (
                    <div key={c.title} className="bg-card p-5">
                      <h4 className="text-sm font-semibold text-foreground mb-1.5">
                        {c.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating principles */}
              <div className="space-y-5">
                <span className="eyebrow">Operating Principles</span>
                <ul className="space-y-3">
                  {principles.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-foreground/90"
                    >
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Link to="/experience" className="btn-primary">
                  View Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
