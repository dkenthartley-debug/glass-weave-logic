import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import TechnologiesIndex from "./pages/TechnologiesIndex";
import TechnologyDetail from "./pages/TechnologyDetail";
import ProductsIndex from "./pages/ProductsIndex";
import ProductDetail from "./pages/ProductDetail";
import { MarketsIndex, MarketDetail } from "./pages/Markets";
import EngineeringResources from "./pages/EngineeringResources";
import TechnicalLibrary from "./pages/TechnicalLibrary";
import FaqLibrary from "./pages/FaqLibrary";
import WhitePaperAtpd2352 from "./pages/WhitePaperAtpd2352";
import TechBulletinTb001 from "./pages/TechBulletinTb001";
import QualificationStandardHlgQs1724 from "./pages/QualificationStandardHlgQs1724";

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

            {/* Engineering Knowledge Center IA */}
            <Route path="/technologies" element={<TechnologiesIndex />} />
            <Route path="/technologies/:slug" element={<TechnologyDetail />} />
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/markets" element={<MarketsIndex />} />
            <Route path="/markets/:slug" element={<MarketDetail />} />
            <Route path="/engineering-resources" element={<EngineeringResources />} />
            <Route path="/technical-library" element={<TechnicalLibrary />} />
            <Route path="/engineering-resources/faq" element={<FaqLibrary />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/white-papers/atpd-2352-rev-u-sensor" element={<WhitePaperAtpd2352 />} />
            <Route path="/technical-bulletins/tb-001-optical-performance-under-electrical-load" element={<TechBulletinTb001 />} />
            <Route path="/qualification-standards/hlg-qs-1724" element={<QualificationStandardHlgQs1724 />} />



            {/* Existing pages */}
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Legacy solution routes */}
            <Route path="/conductive-interlayers" element={<ConductiveInterlayers />} />
            <Route path="/aircraft-sensors" element={<AircraftSensors />} />
            <Route path="/emi-shielding" element={<EmiShielding />} />
            <Route path="/specialty-films" element={<SpecialtyFilms />} />
            <Route path="/resources" element={<Resources />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
