import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import VideoGallery from "../components/VideoGallery";
import Vecinos from "../components/Vecinos";
import TwoActionButtons from "../components/TwoActionButtons";

export default function Section3() {
  const videoItems = [
    {
      youtubeId: "n9_kzp5m5GE",
      title:
        'Comedor "El Gauchito" compartió una merienda y un momento recreativo en "Café Martínez"',
      description:
        'Niños y las niñas del comedor "El Gauchito" compartieron una merienda y un momento recreativo en "Café Martínez".',
    },
    {
      youtubeId: "hB2OM0WIxZw",
      title: "Almuerzo en “Mostaza”",
      description:
        "Niños y niñas del espacio de apoyo escolar del Sistema Alternativo “Ciudad de la Paz” comparten almuerzo en “Mostaza”.",
    },
    {
      youtubeId: "zoIcnTZwDHo",
      title: "Almuerzo en “Don Chicho”",
      description:
        "Los niños y niñas del espacio “Rincón de luz” almorzaron en “Don Chicho”.",
    },
    {
      youtubeId: "4FUz9tGTwRA",
      title: "La Historia de Eva y Graciela",
      description:
        "Hay conexión entre Eva y Graciela en el espacio “Palomitas Mensajeras” donde entregan abrigos para los niños y niñas.",
    },
    {
      youtubeId: "fbHWLU0LQ0U",
      title: "La historia de Carolina y Ana María",
      description: "Te invitamos a conocer esta nueva historia de conexión.",
    },
    {
      youtubeId: "guTaFFTQCZM",
      title: "La historia de Ana y Matías",
      description: "¡Logramos una conexión! Conocé esta historia.",
    },
    {
      youtubeId: "Bl2abYVk61M",
      title: "La historia de Ina y Adrian",
      description:
        "Otra conexión lograda a través de nuestro programa. Te invitamos a conocer la historia de Ina y Adrian.",
    },
    {
      youtubeId: "h_zva2_EkVw",
      title: "La historia de Tiffany y Franco",
      description: "¡Te invitamos a conocer la historia de esta conexión!",
    },
  ];

  return (
    <>
      <HeaderBar />

      <Vecinos
        leftTitle={`Vecinos y vecinas de\n Lomas que ya\n      compartieron`}
        rightTitle="Ya compartieron"
        rightDescription={`Queremos compartirte la felicidad de aquellos vecinos, vecinas y/o instituciones que hemos podido conectar con vecinos solidarios que les han dado una mano.
¡Esperamos te sientas tan orgulloso como nosotros!`}
      />

      <VideoGallery items={videoItems} />

      <TwoActionButtons />

      <Footer />
    </>
  );
}
