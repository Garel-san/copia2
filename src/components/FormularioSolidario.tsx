import { useState } from "react";
import styles from "./FormularioSolidario.module.css";

const formConfig = {
  compartir: {
    sinInstitucion: [
      { name: "nombre", label: "Nombre*", type: "text" },
      { name: "apellido", label: "Apellido*", type: "text" },
      { name: "telefono", label: "Telefono de Contacto*", type: "text" },
      {
        name: "compartir",
        label: "¿Que quisieras compartir u ofrecer a la comunidad?*",
        type: "textarea",
      },
      {
        name: "destinatarios",
        label: "¿Quienes quisieras que fueran los destinatarios?*",
        type: "textarea",
      },
    ],

    conInstitucion: [
      {
        name: "nombreInstitucion",
        label: "Nombre de Institucion*",
        type: "text",
      },
      {
        name: "funcionInstitucion",
        label: "Funcion de la Institucion*",
        type: "text",
      },
      { name: "localidad", label: "Localidad*", type: "text" },
      { name: "direccion", label: "Direccion*", type: "text" },
      { name: "redSocial", label: "Red social*", type: "text" },
      { name: "nombre", label: "Nombre*", type: "text" },
      { name: "apellido", label: "Apellido*", type: "text" },
      { name: "telefono", label: "Telefono de Contacto*", type: "text" },
      {
        name: "compartir",
        label: "¿Que quisieras compartir u ofrecer a la comunidad?*",
        type: "textarea",
      },
      {
        name: "destinatarios",
        label: "¿Quienes quisieras que fueran los destinatarios?*",
        type: "textarea",
      },
    ],
  },

  ayuda: {
    sinInstitucion: [
      { name: "nombre", label: "Nombre*", type: "text" },
      { name: "apellido", label: "Apellido*", type: "text" },
      { name: "telefono", label: "Telefono de Contacto*", type: "text" },
      { name: "solicitud", label: "¿Que queres solicitar?*", type: "textarea" },
      {
        name: "detalle",
        label: "Contame en detalle que necesitas*",
        type: "textarea",
      },
    ],

    conInstitucion: [
      {
        name: "nombreInstitucion",
        label: "Nombre de Institucion*",
        type: "text",
      },
      {
        name: "funcionInstitucion",
        label: "Funcion de la Institucion*",
        type: "text",
      },
      { name: "localidad", label: "Localidad*", type: "text" },
      { name: "direccion", label: "Direccion*", type: "text" },
      { name: "redSocial", label: "Red social*", type: "text" },
      { name: "nombre", label: "Nombre*", type: "text" },
      { name: "apellido", label: "Apellido*", type: "text" },
      { name: "telefono", label: "Telefono de Contacto*", type: "text" },
      { name: "solicitud", label: "¿Que queres solicitar?*", type: "textarea" },
      {
        name: "detalle",
        label: "Contame en detalle que necesitas*",
        type: "textarea",
      },
    ],
  },
};

export default function FormularioSolidario({
  selectedTipo,
}: {
  selectedTipo: "compartir" | "ayuda";
}) {
  const [conInstitucion, setConInstitucion] = useState(false);
  const [formData, setFormData] = useState({});

  const fields =
    formConfig[selectedTipo][
      conInstitucion ? "conInstitucion" : "sinInstitucion"
    ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchRow}>
        <label className={styles.switchWrapper}>
          <input
            type="checkbox"
            checked={conInstitucion}
            onChange={() => setConInstitucion(!conInstitucion)}
          />
          <span className={styles.slider}></span>
        </label>

        <span className={styles.switchText}>
          ¿Formás parte de una institución?
        </span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div
            key={field.name}
            className={`${styles.inputGroup} ${
              field.type === "textarea" ? styles.fullWidth : ""
            }`}
          >
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                placeholder={field.label}
                className={styles.textarea}
                onChange={handleChange}
              />
            ) : (
              <input
                name={field.name}
                type="text"
                placeholder={field.label}
                className={styles.input}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <div className={styles.fullWidth}>
          <button className={styles.submitBtn}>Enviar</button>
        </div>
      </form>
    </div>
  );
}
