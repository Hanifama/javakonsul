import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ServicePage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";
import GaleryPage from "./pages/Galery";
import ContactPage from "./pages/Contact";
import DetailPortfolioPage from "./pages/DetailPortfolio";
import ServiceDetailPage from "./pages/ServicesDetailPage";
import ScrollToTop from "./components/_shared/scrollTotopfunct";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<DetailPortfolioPage />} />
        <Route path="/article" element={<GaleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </>
  );
}
