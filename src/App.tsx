import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./hooks/use-theme";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProcessPage from "./pages/ProcessPage";
import WorkPage from "./pages/WorkPage";
import OperationsPage from "./pages/OperationsPage";
import ResearchPage from "./pages/ResearchPage";
import WritingPage from "./pages/WritingPage";
import SkillsPage from "./pages/SkillsPage";
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
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/operations" element={<OperationsPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/writing" element={<WritingPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/experience" element={<Navigate to="/work" replace />} />
              <Route path="/education" element={<Navigate to="/about" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
