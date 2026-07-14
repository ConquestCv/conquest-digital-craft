import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";

const nav = [
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/work", label: "Work" },
  { to: "/operations", label: "Ops" },
  { to: "/research", label: "Research" },
  { to: "/writing", label: "Writing" },
  { to: "/skills", label: "Skills" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Home">
            <span className="w-8 h-8 rounded-md border border-accent/40 bg-accent/10 flex items-center justify-center text-accent">
              <Terminal className="w-4 h-4" />
            </span>
            <span className="text-sm font-heading font-semibold hidden sm:inline">
              conquest<span className="text-accent">.ops</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((s) => (
              <NavLink
                key={s.to}
                to={s.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {s.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => navigate("/contact")}
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
          {nav.map((s) => (
            <NavLink
              key={s.to}
              to={s.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-left text-sm font-medium py-2.5 px-3 rounded-md ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`
              }
            >
              {s.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-left text-sm font-medium py-2.5 px-3 rounded-md text-accent bg-accent/10"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
