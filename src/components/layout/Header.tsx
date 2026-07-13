import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Mail } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import profileImage from "@/assets/conquest-profile.jpg";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <img
              src={profileImage}
              alt="Aisiri Conquest"
              className="w-7 h-7 rounded-full object-cover border border-border ring-1 ring-foreground/5"
            />
            <span className="text-sm font-heading font-semibold text-foreground hidden sm:inline">
              Aisiri Conquest
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              Hire Me
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden theme-toggle"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-200 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="section-container py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium py-2.5 px-3 rounded-md transition-colors ${
                location.pathname === item.path
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-3">
            <Mail className="w-3.5 h-3.5" />
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
