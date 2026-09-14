import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TechnologiesIndex from "./pages/TechnologiesIndex";
import TechnologyDetail from "./pages/TechnologyDetail";
import Solutions from "./pages/Solutions";
import EngineeringQuality from "./pages/EngineeringQuality";
import { MarketsIndex, MarketDetail } from "./pages/Markets";
import Aerospace from "./pages/Aerospace";
import About from "./pages/About";
import TechnicalLibrary from "./pages/TechnicalLibrary";
import EngineeringReview from "./pages/EngineeringReview";
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
            <Route path="/" element={<Home />} />

            <Route path="/technologies" element={<TechnologiesIndex />} />
            <Route path="/technologies/:slug" element={<TechnologyDetail />} />

            <Route path="/solutions" element={<Solutions />} />
            <Route path="/engineering-quality" element={<EngineeringQuality />} />
            <Route path="/technical-library" element={<TechnicalLibrary />} />
            <Route path="/engineering-review" element={<EngineeringReview />} />

            <Route path="/markets" element={<MarketsIndex />} />
            <Route path="/markets/aerospace" element={<Aerospace />} />
            <Route path="/markets/:slug" element={<MarketDetail />} />

            <Route path="/about" element={<About />} />

            {/* Legacy routes → V1 equivalents */}
            <Route path="/capabilities" element={<Navigate to="/engineering-quality" replace />} />
            <Route path="/facility" element={<Navigate to="/engineering-quality" replace />} />
            <Route path="/applications" element={<Navigate to="/markets" replace />} />
            <Route path="/products" element={<Navigate to="/solutions" replace />} />
            <Route path="/products/*" element={<Navigate to="/solutions" replace />} />
            <Route path="/contact" element={<Navigate to="/engineering-review" replace />} />
            <Route path="/engineering-resources" element={<Navigate to="/technical-library" replace />} />
            <Route path="/engineering-resources/faq" element={<Navigate to="/technical-library" replace />} />
            <Route path="/white-papers/*" element={<Navigate to="/technical-library" replace />} />
            <Route path="/technical-bulletins/*" element={<Navigate to="/technical-library" replace />} />
            <Route path="/qualification-standards/*" element={<Navigate to="/technical-library" replace />} />
            <Route path="/specifications/*" element={<Navigate to="/technical-library" replace />} />
            <Route
              path="/conductive-interlayers"
              element={<Navigate to="/technologies/transparent-conductive-films" replace />}
            />
            <Route
              path="/aircraft-sensors"
              element={<Navigate to="/technologies/embedded-temperature-sensing" replace />}
            />
            <Route path="/emi-shielding" element={<Navigate to="/technologies/emi-rfi-shielding" replace />} />
            <Route
              path="/specialty-films"
              element={<Navigate to="/technologies/transparent-conductive-films" replace />}
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
