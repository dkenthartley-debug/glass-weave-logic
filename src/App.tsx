import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import ConductiveInterlayers from "./pages/ConductiveInterlayers";
import AircraftSensors from "./pages/AircraftSensors";
import EmiShielding from "./pages/EmiShielding";
import SpecialtyFilms from "./pages/SpecialtyFilms";
import Applications from "./pages/Applications";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/conductive-interlayers" element={<ConductiveInterlayers />} />
            <Route path="/aircraft-sensors" element={<AircraftSensors />} />
            <Route path="/emi-shielding" element={<EmiShielding />} />
            <Route path="/specialty-films" element={<SpecialtyFilms />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
