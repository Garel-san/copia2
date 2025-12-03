import HeaderBar from "../components/HeaderBar";
import Vecinos from "../components/Vecinos";
import FormularioSolidario from "../components/FormularioSolidario";
import Footer from "../components/Footer";

export default function Section4() {
  return (
    <>
      <HeaderBar />

      <Vecinos
        leftTitle={`¡Estamos orgullosos de tu\n compromiso solidario!\n`}
        rightTitle="Quiero compartir"
        rightDescription={`Te pedimos que completes el formulario con el mayor detalle posible. Contanos cómo crees que podés. Desde el Municipio, nos pondremos en contacto contigo para conectarte con personas que necesiten de tu ayuda y proteger tu esfuerzo y garantizar que la ayuda llegué a donde tiene que llegar.`}
      />

      {/* FORMULARIO DE COMPARTIR */}
      <FormularioSolidario selectedTipo="compartir" />

      <Footer />
    </>
  );
}
