import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import VideoGallery from "../components/VideoGallery";
import Vecinos from "../components/Vecinos";
import TwoActionButtons from "../components/TwoActionButtons";

export default function Section1() {
  const videoItems = [
    {
      youtubeId: "GALy2tKSYmI",
      title:
        "Paola comparte su conocimiento y enseña costura para vecinos y vecinas de Lomas",
      description:
        "Paola transmite su conocimiento de costura para que vecinos y vecinas que lo requieran puedan desarrollarlo en su casa, para un emprendimiento o para mejorar su profesion.",
    },
    {
      youtubeId: "yIs6GXJECIw",
      title: 'Sabrina entrena a mujeres en el "Club Las Heras"',
      description:
        'Sabrina comparte su tiempo para entrenar a mujeres en el "Club Las Heras".',
    },
    {
      youtubeId: "-0V6cM83zGM",
      title:
        "Vilma dona su tiempo y conocimiento para asesorar en cuestiones financieras",
      description:
        "Vilma dedicó toda su vida a las finanzas y quiere compartir su tiempo trasmitiendo ese conocimiento a emprendedores o pequeños comerciantes.",
    },
    {
      youtubeId: "sniIUo5MGyU",
      title:
        "Colegio de Farmacéuticos dona cascos fríos para evitar la alopecia",
      description:
        "Les queremos compartir a todos los lomenses que estén transitando una quimioterapia los cascos que van ayudarlos a prevenir la alopecia.",
    },
    {
      youtubeId: "afYFNq4E3pg",
      title: "Noelia, Licenciada en Publicidad y Community Manager",
      description:
        "Noelia propone que cada uno sea su propio CM, aprendiendo herramientas para potenciar sus emprendimientos.",
    },
    {
      youtubeId: "PXQqvwOz90c",
      title: "Graciela, Centro de Jubilados “Siempre bien”",
      description:
        "Somos un gran número de personas con ganas de ayudar, con un espacio y elementos para tejer tejidos.",
    },
    {
      youtubeId: "pGEItIbJwTo",
      title: "Carolina, Centro de Jubilados “Los Pasivos”",
      description:
        "Realizamos manualidades, tejidos y abrigos para quienes más lo necesitan.",
    },
    {
      youtubeId: "q9uHlTHgGJk",
      title: "Matías, Community Manager",
      description:
        "Puedo ayudarte a potenciar tu emprendimiento en redes sociales.",
    },
    {
      youtubeId: "qIjq6h0NLJs",
      title: "Franco, Peluquero",
      description: "Ofrezco mi profesión a vecinos que lo necesiten.",
    },
    {
      youtubeId: "jlqKGH0osMI",
      title: "Adrian, Albañil",
      description:
        "Me gustaría colaborar aportando mis conocimientos en construcción.",
    },
  ];

  return (
    <>
      <HeaderBar />

      <Vecinos
        leftTitle={`Vecinos y vecinas de\n Lomas que eligieron\n      compartir`}
        rightTitle="Comparten con vos"
        rightDescription="En esta sección podés buscar si algunos de los servicios o productos que nuestros vecinos ofrecen pueden servirte de ayuda. Al hacer clic en las tarjetas vas a ver más información del vecino, vecina o institución, como así también solicitarnos que te contactemos con ellos para pedirles una mano."
      />

      <VideoGallery items={videoItems} />

      {/* INTEGRACIÓN FINAL CORRECTA */}
      <TwoActionButtons />

      <Footer />
    </>
  );
}
