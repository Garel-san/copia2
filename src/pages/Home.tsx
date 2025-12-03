import HeaderBar from "../components/HeaderBar";
import HeroSection from "../components/HeroSection";
import MissionVisionSection from "../components/MissionVisionSection";
import BannerSection from "../components/BannerSection";
import OptionsSection from "../components/OptionsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeaderBar />

      <div id="plataformaSection">
        <HeroSection />
      </div>

      <div id="misionVision">
        <MissionVisionSection />
      </div>

      <div id="valoresSection">
        <BannerSection />
      </div>

      <div id="participaSection">
        <OptionsSection />
      </div>

      <Footer />
    </>
  );
}
