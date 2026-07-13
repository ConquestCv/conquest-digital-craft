import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Folder, Lightbulb } from "lucide-react";

const education = [
  {
    degree: "Higher National Diploma (HND)",
    institution: "Yaba College of Education",
    period: "Completed",
    description: "Advanced technical education with focus on practical skills.",
  },
  {
    degree: "National Diploma (ND)",
    institution: "Lagos State Polytechnic",
    period: "Completed",
    description: "Foundation in technical education with practical emphasis.",
  },
];

const certifications = [
  { name: "Blockchain Basics", issuer: "Coursera", category: "Blockchain" },
  { name: "Crypto Fundamentals", issuer: "Binance Academy", category: "Crypto" },
  { name: "Web3 Writing & Content", issuer: "Self-Directed", category: "Content" },
  { name: "Community Management", issuer: "Discord/Telegram", category: "Community" },
  { name: "DeFi Fundamentals", issuer: "DeFi Pulse", category: "DeFi" },
  { name: "DAO Operations", issuer: "Ecosystem Learning", category: "DAOs" },
];

const projects = [
  {
    title: "Protocol Research Thread Series",
    description: "Created educational Twitter threads breaking down complex DeFi protocols for broader audiences.",
    tags: ["Research", "Content", "DeFi"],
  },
  {
    title: "Community Onboarding Framework",
    description: "Designed and documented onboarding flows for Web3 Discord communities.",
    tags: ["Community", "Documentation", "UX"],
  },
  {
    title: "Ecosystem Mapping Project",
    description: "Mapped and documented ecosystem relationships for a Layer 1 blockchain.",
    tags: ["Research", "Analysis", "Ecosystem"],
  },
];

const learningAreas = [
  { area: "Protocol Mechanics", desc: "How DeFi, NFTs, and DAOs actually work" },
  { area: "Narrative Dynamics", desc: "Understanding what moves markets and attention" },
  { area: "Coordination Patterns", desc: "How decentralized teams align and execute" },
  { area: "Communication Infrastructure", desc: "Building clarity at scale" },
];

const Web3EducationPage = () => {
  return (
    <div className="relative">
      {/* Hero Glow - Web3 themed */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Learning</span>
        </h1>
        <p className="page-subtitle">
          Formal education plus continuous Web3-specific learning and practical projects.
        </p>
      </section>

      {/* Education */}
      <section className="pb-12">
        <div className="section-container max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Formal Education</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-emerald-500/40">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-base font-heading font-bold">{edu.degree}</h3>
                    <p className="text-emerald-400 font-medium text-sm">{edu.institution}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">{edu.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 Certifications */}
      <section className="py-12 border-y border-border/50">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Web3 Learning & Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 transition-all duration-300 hover:border-emerald-500/40">
                <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded bg-emerald-500/15 text-emerald-400 mb-2">
                  {cert.category}
                </span>
                <h4 className="font-heading font-semibold text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="py-12">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Continuous Learning Areas</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {learningAreas.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-card/60 backdrop-blur-sm p-4 transition-all duration-300 hover:border-emerald-500/40">
                <h3 className="font-heading font-semibold text-sm mb-1 text-emerald-400">{item.area}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 border-t border-border/50">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Folder className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Web3 Projects</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1">
                <h3 className="text-base font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-border/50">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
            Want to Know More?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Let's discuss how I can contribute to your Web3 team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110">
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

export default Web3EducationPage;
