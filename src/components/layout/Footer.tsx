import { Mail, MapPin, ArrowUp, Terminal, Twitter, Phone } from "lucide-react";
import resumePdf from "@/assets/resume.pdf.asset.json";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border mt-24 relative">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-md border border-accent/40 bg-accent/10 flex items-center justify-center text-accent">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="text-sm font-heading font-semibold">
                conquest<span className="text-accent">.ops</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              AI Operations & Automation Specialist. I turn recurring
              problems into simple, useful systems — research, drafting,
              automation, executive support.
            </p>
            <span className="badge-success">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-dot" />
              Available for full-time remote
            </span>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                ["about", "About"],
                ["problems", "Problems I Solved"],
                ["workflows", "AI Workflows"],
                ["writing", "Writing"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() =>
                    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-muted-foreground hover:text-accent transition-colors w-fit text-left"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              Reach out
            </h3>
            <div className="space-y-2">
              <a href="mailto:conquestaisiri@gmail.com"
                 className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5" /> conquestaisiri@gmail.com
              </a>
              <a href="tel:+2347049163089"
                 className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5" /> +234 704 916 3089
              </a>
              <a href="https://x.com/iamconqwest" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="w-3.5 h-3.5" /> @iamconqwest
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> Lagos, Nigeria · Remote-ready
              </div>
              <a
                href={resumePdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline pt-1"
              >
                ↓ Download résumé (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-mono">
            © {year} Aisiri Conquest Samuel — Built as a working system.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors font-mono"
          >
            <ArrowUp className="w-3 h-3" /> back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
