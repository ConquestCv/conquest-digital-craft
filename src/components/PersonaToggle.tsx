import { usePersona, PersonaType } from "@/hooks/use-persona";
import { Globe, Hexagon } from "lucide-react";

const PersonaToggle = () => {
  const { persona, setPersona, isTransitioning } = usePersona();

  const handleToggle = (selected: PersonaType) => {
    if (!isTransitioning && selected !== persona) {
      setPersona(selected);
    }
  };

  return (
    <div className="relative flex items-center bg-card/60 backdrop-blur-sm border border-border rounded-full p-0.5 gap-0.5">
      {/* Sliding background indicator */}
      <div
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full transition-all duration-500 ease-out ${
          isTransitioning ? "scale-95 opacity-80" : "scale-100 opacity-100"
        }`}
        style={{
          left: persona === "web2" ? "2px" : "calc(50% + 0px)",
          background: persona === "web3" 
            ? "linear-gradient(135deg, hsl(170 80% 45%) 0%, hsl(190 90% 40%) 100%)"
            : "var(--gradient-purple)",
          boxShadow: persona === "web3"
            ? "0 2px 12px hsl(180 80% 45% / 0.4)"
            : "0 2px 12px hsl(265 90% 65% / 0.4)",
        }}
      />

      {/* Real World (Web2) Option */}
      <button
        onClick={() => handleToggle("web2")}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          persona === "web2"
            ? "text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
        disabled={isTransitioning}
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Real World</span>
      </button>

      {/* Web3 Option */}
      <button
        onClick={() => handleToggle("web3")}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          persona === "web3"
            ? "text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
        disabled={isTransitioning}
      >
        <Hexagon className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Web3</span>
      </button>
    </div>
  );
};

export default PersonaToggle;
