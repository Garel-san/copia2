import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Botón flotante */}
      <FloatingWhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ofrecen" element={<Section1 />} />
        <Route path="/solicitan" element={<Section2 />} />
        <Route path="/compartieron" element={<Section3 />} />
        <Route path="/quiero-compartir" element={<Section4 />} /> {/* NUEVO */}
        <Route path="/solicito-ayuda" element={<Section5 />} />
      </Routes>
    </BrowserRouter>
  );
}
