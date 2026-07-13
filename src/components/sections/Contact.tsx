import { Mail, Phone, Twitter, ArrowUpRight, Download, MapPin } from "lucide-react";
import resumePdf from "@/assets/resume.pdf.asset.json";

const Contact = () => (
  <section id="contact" className="section-wrap pb-32">
    <div className="section-container">
      <div className="panel p-8 md:p-14 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="relative grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-5">
            <span className="eyebrow">contact</span>
            <h2 className="section-title">
              Let's build something<br />that runs on its own.
            </h2>
            <p className="section-lede">
              I'm looking for full-time remote work with an AI-first team
              where I can build systems, support leadership, and take
              ownership of the workflows that keep the company moving.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="mailto:conquestaisiri@gmail.com" className="btn-primary">
                <Mail className="w-4 h-4" /> conquestaisiri@gmail.com
              </a>
              <a
                href={resumePdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download className="w-4 h-4" /> Download résumé
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="term-panel">
              <div className="term-header">
                <span className="term-dot bg-destructive/60" />
                <span className="term-dot bg-warning/60" />
                <span className="term-dot bg-accent/70" />
                <span className="ml-2 text-[11px] font-mono text-muted-foreground">contact.json</span>
              </div>
              <div className="p-5 font-mono text-[12px] space-y-3">
                {[
                  { icon: Mail, k: "email", v: "conquestaisiri@gmail.com", href: "mailto:conquestaisiri@gmail.com" },
                  { icon: Phone, k: "phone", v: "+234 704 916 3089", href: "tel:+2347049163089" },
                  { icon: Phone, k: "phone_alt", v: "+234 707 985 2097", href: "tel:+2347079852097" },
                  { icon: Twitter, k: "x", v: "@iamconqwest", href: "https://x.com/iamconqwest" },
                  { icon: MapPin, k: "location", v: "Lagos, NG · Remote", href: null },
                ].map((r) => {
                  const Content = (
                    <div className="flex items-center justify-between gap-3 py-2 border-b border-border/50 last:border-0">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <r.icon className="w-3.5 h-3.5" />
                        {r.k}
                      </span>
                      <span className="text-accent inline-flex items-center gap-1">
                        {r.v}
                        {r.href && <ArrowUpRight className="w-3 h-3 opacity-60" />}
                      </span>
                    </div>
                  );
                  return r.href ? (
                    <a key={r.k} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:text-accent transition-colors">
                      {Content}
                    </a>
                  ) : (
                    <div key={r.k}>{Content}</div>
                  );
                })}
                <div className="pt-2 text-muted-foreground">
                  <span className="text-accent">$</span> awaiting_next_move
                  <span className="animate-blink text-accent">▊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
