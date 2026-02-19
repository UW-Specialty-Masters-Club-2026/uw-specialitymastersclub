import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JoinClub from "./pages/JoinClub";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Newsletters from "./pages/Newsletters";
import PdfReader from "./pages/PdfReader";
import MeetTheTeam from "./pages/MeetTheTeam";
import EventsPage from "./pages/EventsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/join" element={<JoinClub />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/pdf-reader" element={<PdfReader />} />
          <Route path="/events" element={<EventsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
