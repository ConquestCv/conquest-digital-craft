import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import Layout from "./components/layout/Layout";
import PageTransition from "./components/PageTransition";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <PageTransition>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
