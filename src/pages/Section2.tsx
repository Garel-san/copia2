import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import VideoGallery from "../components/VideoGallery";
import Vecinos from "../components/Vecinos";
import TwoActionButtons from "../components/TwoActionButtons";

export default function Section2() {
  const videoItems = [
    {
      youtubeId: "CvBO8_Kwn1I",
      title: "Eva, Sistema Alternativo “Palomitas Mensajeras”",
      description:
        "Realizamos apoyo escolar, contamos con comedor y jardín maternal. Trabajamos junto a personas voluntarias que atienden a los niños y niñas que asisten al espacio.",
    },
    {
      youtubeId: "iQoEGSpX0fU",
      title: "Ana María, Capilla Ceferino Namuncurá",
      description:
        "Realizamos actividades para niños y niñas, apoyo escolar, y escuela de adultos. Precisamos ropa en general, especialmente ropa de abrigo para los vecinos y vecinas que concurren a nuestra institución.",
    },
    {
      youtubeId: "IzT_RrTpOSU",
      title: "Ana, Panadera",
      description:
        "Tengo un emprendimiento de panificados, al que me gustaría darle difusión para que nos conozcan nuestros vecinos.",
    },
    {
      youtubeId: "lDwBCIcukeE",
      title: "Tiffany, Acompañante pedagógica",
      description:
        "Formo parte del sistema de educación alternativo Wawa Wasi de Budge, y necesitamos profesionales que quieran colaborar con nuestra institución.",
    },
    {
      youtubeId: "UFEBDU88_wE",
      title: "Ina, presidenta de centro de jubilados",
      description:
        "Soy presidenta del centro Tercera Juventud de San José. Estamos en busca de un albañil para techar un sector y evitar filtraciones.",
    },
  ];

  return (
    <>
      <HeaderBar />

      <Vecinos
        leftTitle={`Vecinos y vecinas de\n Lomas que necesitan de\n      tu solidaridad`}
        rightTitle="Necesitan de ustedes"
        rightDescription={`En esta sección vas a encontrar historias de vida de vecinos, y/o instituciones que están necesitando una mano.
Si te identificás con algunos de ellos y pensás que podrás ayudar, hacé clic en la tarjeta para conocerlos más. Después vas a poder enviarnos tus datos para que te ayudemos a ayudar.`}
      />

      <VideoGallery items={videoItems} />

      <TwoActionButtons />

      <Footer />
    </>
  );
}
