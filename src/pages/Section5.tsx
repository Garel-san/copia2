import HeaderBar from "../components/HeaderBar";
import Vecinos from "../components/Vecinos";
import FormularioSolidario from "../components/FormularioSolidario";
import Footer from "../components/Footer";

export default function Section5() {
  return (
    <>
      <HeaderBar />

      <Vecinos
        leftTitle={`Estamos comprometidos en darte\n una mano\n`}
        rightTitle="Ayuda Puntual"
        rightDescription={`Te pedimos que completes el formulario con el mayor detalle posible. Queremos entender bien qué necesitás para poder conectarte con la persona correcta.`}
      />

      {/* FORMULARIO DE SOLICITAR AYUDA */}
      <FormularioSolidario selectedTipo="ayuda" />

      <Footer />
    </>
  );
}
