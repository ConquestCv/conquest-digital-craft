import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Problems from "@/components/sections/Problems";
import Workflows from "@/components/sections/Workflows";
import Operations from "@/components/sections/Operations";
import Research from "@/components/sections/Research";
import Writing from "@/components/sections/Writing";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }, [hash]);

  return (
    <div className="animate-fade-in">
      <Hero />
      <About />
      <Problems />
      <Workflows />
      <Operations />
      <Research />
      <Writing />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
