import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const sections = [
  { id: "about", label: "About" },
  { id: "problems", label: "Problems" },
  { id: "workflows", label: "Workflows" },
  { id: "operations", label: "Operations" },
  { id: "research", label: "Research" },
  { id: "writing", label: "Writing" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // section spy
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="Home"
          >
            <span className="w-8 h-8 rounded-md border border-accent/40 bg-accent/10 flex items-center justify-center text-accent">
              <Terminal className="w-4 h-4" />
            </span>
            <span className="text-sm font-heading font-semibold hidden sm:inline">
              conquest<span className="text-accent">.ops</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                  active === s.id
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => jump("contact")}
              className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs"
            >
              Hire Me
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden icon-btn"
              aria-label="Menu"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="section-container py-4 grid grid-cols-2 gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => jump(s.id)}
              className={`text-left text-sm font-medium py-2.5 px-3 rounded-md ${
                active === s.id
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
