import { useState } from "react";
import ActionButton from "./ActionButton";
import FormularioSolidario from "./FormularioSolidario";
import styles from "./TwoActionButtons.module.css";

export default function TwoActionButtons() {
  const [selectedForm, setSelectedForm] = useState<
    null | "compartir" | "ayuda"
  >(null);

  const handleBack = () => setSelectedForm(null);

  return (
    <div className={styles.wrapper}>
      {/* --- SI NO HAY FORMULARIO SELECCIONADO, MOSTRAR BOTONES --- */}
      {!selectedForm && (
        <div className={styles.container}>
          <ActionButton
            label="Quiero compartir"
            showIcon={false}
            onClick={() => setSelectedForm("compartir")}
            bgColor="#0a7396"
          />

          <ActionButton
            label="Necesito una mano"
            showIcon={false}
            onClick={() => setSelectedForm("ayuda")}
            bgColor="#0a7396"
          />
        </div>
      )}

      {/* --- SI HAY FORMULARIO, SE SOBRE-PONE Y OCUPA TODO --- */}
      {selectedForm && (
        <div className={styles.formContainer}>
          {/* Botón volver */}
          <button className={styles.backBtn} onClick={handleBack}>
            ← Volver
          </button>

          <FormularioSolidario selectedTipo={selectedForm} />
        </div>
      )}
    </div>
  );
}
