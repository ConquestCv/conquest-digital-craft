import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, FolderGit2 } from "lucide-react";

const education = [
  {
    degree: "Bachelor's Degree (In Progress)",
    institution: "Lagos State University of Science & Technology (LASUSTECH)",
  },
  {
    degree: "Higher National Diploma (HND)",
    institution: "Yaba College of Technology, Lagos",
  },
  {
    degree: "National Diploma (ND)",
    institution: "Lagos State Polytechnic",
  },
];

const certifications = [
  { name: "Remote Operations & Virtual Assistance Mastery", issuer: "Professional Training" },
  { name: "Digital Workplace Productivity & CRM Essentials", issuer: "Professional Training" },
  { name: "Advanced Administrative Support Foundations", issuer: "Professional Training" },
  { name: "Customer Support & Email Handling Essentials", issuer: "Professional Training" },
  { name: "Google Workspace Productivity Training", issuer: "Google" },
  { name: "Digital Marketing Fundamentals", issuer: "Google Digital Skills for Africa" },
];

const projects = [
  {
    name: "Executive Workflow Tracker",
    desc: "A Google Sheets-based weekly tracker for executive priorities, action items and deadlines — surfacing what's owed, by whom, and when, in a single CEO-facing view.",
    tags: ["Sheets", "Executive Ops", "Tracking"],
  },
  {
    name: "Documentation & Response Template System",
    desc: "A library of structured response templates and SOPs for executive correspondence, client follow-ups and recurring workflows — used to keep tone, accuracy and turnaround consistent.",
    tags: ["SOPs", "Templates", "Correspondence"],
  },
  {
    name: "Event & Webinar Support Workflow",
    desc: "An end-to-end workflow for coaching calls, masterclasses and webinars — covering pre-event prep, live note-taking, attendee follow-ups and post-event action-item tracking.",
    tags: ["Events", "Follow-ups", "Notes"],
  },
];

const EducationPage = () => {
  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">Education & Projects</span>
          <h1 className="page-title mt-4">
            Where the foundation
            <br />
            <span className="text-muted-foreground font-normal">
              came from.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            Academic foundation, professional certifications and self-initiated
            projects built around executive support and remote operations.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="pb-16">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">Education</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {education.map((e) => (
              <div key={e.degree} className="card-flat p-6">
                <h3 className="text-base font-semibold mb-1">{e.degree}</h3>
                <p className="text-sm text-accent font-medium">
                  {e.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">Certifications</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {certifications.map((c) => (
              <div key={c.name} className="bg-card p-5">
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {c.name}
                </h4>
                <p className="text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <FolderGit2 className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">Key Projects</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <div key={p.name} className="card-interactive">
                <div className="num-marker mb-3">0{i + 1}.</div>
                <h3 className="text-base font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {p.tags.map((t) => (
                    <span key={t} className="mono-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Want to dig deeper?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Happy to walk through any of these projects or share the full CV.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Contact Me
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

export default EducationPage;
