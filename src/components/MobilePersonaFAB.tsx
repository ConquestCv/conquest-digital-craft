import { usePersona } from "@/hooks/use-persona";
import { Globe, Hexagon } from "lucide-react";

const MobilePersonaFAB = () => {
  const { persona, setPersona, isTransitioning } = usePersona();
  const isWeb3 = persona === "web3";

  const handleToggle = () => {
    if (!isTransitioning) {
      setPersona(isWeb3 ? "web2" : "web3");
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isTransitioning}
      aria-label={`Switch to ${isWeb3 ? "Real World" : "Web3"} mode`}
      className={`md:hidden fixed bottom-6 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-full font-medium text-sm text-white shadow-2xl transition-all duration-300 active:scale-95 ${
        isTransitioning ? "opacity-70 scale-95" : "hover:scale-105"
      } ${
        isWeb3
          ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_24px_hsl(170_80%_45%_/_0.5)]"
          : "bg-gradient-to-r from-violet-600 to-purple-600 shadow-[0_4px_24px_hsl(265_90%_65%_/_0.5)]"
      }`}
    >
      {isWeb3 ? (
        <>
          <Globe className="w-4 h-4" />
          <span>Real World</span>
        </>
      ) : (
        <>
          <Hexagon className="w-4 h-4" />
          <span>Web3</span>
        </>
      )}
    </button>
  );
};

export default MobilePersonaFAB;
