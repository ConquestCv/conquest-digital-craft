import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type PersonaType = "web2" | "web3";

interface PersonaContextType {
  persona: PersonaType;
  setPersona: (persona: PersonaType) => void;
  isTransitioning: boolean;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider = ({ children }: { children: ReactNode }) => {
  const [persona, setPersonaState] = useState<PersonaType>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-persona");
      return (saved as PersonaType) || "web2";
    }
    return "web2";
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setPersona = (newPersona: PersonaType) => {
    if (newPersona !== persona) {
      setIsTransitioning(true);
      // Allow exit animation to play
      setTimeout(() => {
        setPersonaState(newPersona);
        localStorage.setItem("portfolio-persona", newPersona);
        // Allow enter animation to complete
        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }, 300);
    }
  };

  useEffect(() => {
    localStorage.setItem("portfolio-persona", persona);
  }, [persona]);

  return (
    <PersonaContext.Provider value={{ persona, setPersona, isTransitioning }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error("usePersona must be used within a PersonaProvider");
  }
  return context;
};
