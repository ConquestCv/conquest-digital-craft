import Hero from "@/components/sections/Hero";
import { Link } from "react-router-dom";
import { ArrowUpRight, Workflow, LineChart, ClipboardCheck, Brain, PenLine, Wrench } from "lucide-react";

const teasers = [
  { to: "/about", eyebrow: "01 · about", title: "How I think", copy: "Executive support taught me how a founder's week actually works. AI made me faster at all of it.", icon: Workflow },
  { to: "/process", eyebrow: "02 · process", title: "How I work", copy: "Observe → identify → research → design → build → test → improve → document → repeat.", icon: Workflow },
  { to: "/work", eyebrow: "03 · problems", title: "Problems I solved", copy: "Six case studies. Each started with something breaking, being slow, or being repetitive.", icon: LineChart },
  { to: "/operations", eyebrow: "04 · ops", title: "Executive operations", copy: "Concept dashboards for priorities, inbox, meetings, docs, decisions, and calendars.", icon: ClipboardCheck },
  { to: "/research", eyebrow: "05 · research", title: "Research OS", copy: "One repeatable shape for every topic — context, comparison, risks, recommendation.", icon: Brain },
  { to: "/writing", eyebrow: "06 · writing", title: "Writing & content", copy: "Threads, briefs, teachable systems. Writing is how I stress-test a workflow.", icon: PenLine },
  { to: "/skills", eyebrow: "07 · stack", title: "Skills & tools", copy: "AI tools, automation, executive ops, research, productivity, comms, development.", icon: Wrench },
];

const HomePage = () => (
  <div className="animate-fade-in">
    <Hero />

    <section className="section-wrap pt-0">
      <div className="section-container">
        <div className="h-eyebrow-block max-w-3xl">
          <span className="eyebrow">index</span>
          <h2 className="section-title">Everything, one click away.</h2>
          <p className="section-lede">
            Seven short pages. Each answers one question about how I think,
            how I work, or what I've shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teasers.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="panel-hover p-6 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-9 h-9 rounded-md border border-accent/40 bg-accent/10 flex items-center justify-center text-accent">
                  <t.icon className="w-4 h-4" />
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-1">
                {t.eyebrow}
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-accent transition-colors">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.copy}
              </p>
            </Link>
          ))}
          <Link
            to="/contact"
            className="panel-hover p-6 group relative overflow-hidden bg-accent/5 border-accent/30"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="badge-accent">→ start here</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">
              Contact
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-time remote. AI-first teams. Founder-led ops. Let's talk.
            </p>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
