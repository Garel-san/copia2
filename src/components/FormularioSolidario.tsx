import { useState } from "react";
import styles from "./FormularioSolidario.module.css";

type FormFields =
  | "nombre"
  | "apellido"
  | "telefono"
  | "compartir"
  | "destinatarios"
  | "solicitud"
  | "detalle"
  | "nombreInstitucion"
  | "funcionInstitucion"
  | "localidad"
  | "direccion"
  | "redSocial";

type FormDataState = {
  [key in FormFields]?: string;
};

export default function FormularioSolidario({
  selectedTipo,
}: {
  selectedTipo: "compartir" | "ayuda";
}) {
  const [conInstitucion, setConInstitucion] = useState(false);
  const [formData, setFormData] = useState<FormDataState>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const formConfig = {
    compartir: {
      sinInstitucion: [
        { name: "nombre", label: "Nombre*", type: "text", required: true },
        { name: "apellido", label: "Apellido*", type: "text", required: true },
        {
          name: "telefono",
          label: "Telefono de Contacto*",
          type: "text",
          required: true,
        },
        {
          name: "compartir",
          label: "¿Qué quisieras compartir?*",
          type: "textarea",
          required: true,
        },
        {
          name: "destinatarios",
          label: "¿Quienes serían los destinatarios?*",
          type: "textarea",
          required: true,
        },
      ],
      conInstitucion: [
        {
          name: "nombreInstitucion",
          label: "Nombre de Institución*",
          type: "text",
          required: true,
        },
        {
          name: "funcionInstitucion",
          label: "Función de la Institución*",
          type: "text",
          required: true,
        },
        {
          name: "localidad",
          label: "Localidad*",
          type: "text",
          required: true,
        },
        {
          name: "direccion",
          label: "Dirección*",
          type: "text",
          required: true,
        },
        {
          name: "redSocial",
          label: "Red social*",
          type: "text",
          required: true,
        },
        { name: "nombre", label: "Nombre*", type: "text", required: true },
        { name: "apellido", label: "Apellido*", type: "text", required: true },
        { name: "telefono", label: "Telefono*", type: "text", required: true },
        {
          name: "compartir",
          label: "¿Qué quisieras compartir?*",
          type: "textarea",
          required: true,
        },
        {
          name: "destinatarios",
          label: "¿Quienes serían los destinatarios?*",
          type: "textarea",
          required: true,
        },
      ],
    },

    ayuda: {
      sinInstitucion: [
        { name: "nombre", label: "Nombre*", type: "text", required: true },
        { name: "apellido", label: "Apellido*", type: "text", required: true },
        { name: "telefono", label: "Telefono*", type: "text", required: true },
        {
          name: "solicitud",
          label: "¿Qué querés solicitar?*",
          type: "textarea",
          required: true,
        },
        {
          name: "detalle",
          label: "Detalle lo que necesitas*",
          type: "textarea",
          required: true,
        },
      ],
      conInstitucion: [
        {
          name: "nombreInstitucion",
          label: "Nombre de Institución*",
          type: "text",
          required: true,
        },
        {
          name: "funcionInstitucion",
          label: "Función de la Institución*",
          type: "text",
          required: true,
        },
        {
          name: "localidad",
          label: "Localidad*",
          type: "text",
          required: true,
        },
        {
          name: "direccion",
          label: "Dirección*",
          type: "text",
          required: true,
        },
        {
          name: "redSocial",
          label: "Red social*",
          type: "text",
          required: true,
        },
        { name: "nombre", label: "Nombre*", type: "text", required: true },
        { name: "apellido", label: "Apellido*", type: "text", required: true },
        { name: "telefono", label: "Telefono*", type: "text", required: true },
        {
          name: "solicitud",
          label: "¿Qué querés solicitar?*",
          type: "textarea",
          required: true,
        },
        {
          name: "detalle",
          label: "Detalle lo que necesitas*",
          type: "textarea",
          required: true,
        },
      ],
    },
  };

  const fields =
    formConfig[selectedTipo][
      conInstitucion ? "conInstitucion" : "sinInstitucion"
    ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ------------------------------------
  // VALIDACIÓN
  // ------------------------------------
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.required && !formData[field.name as FormFields]) {
        newErrors[field.name] = "Este campo es obligatorio";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ------------------------------------
  // SUBMIT REAL
  // ------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");

    if (!validateForm()) return;

    setSending(true);

    const payload = {
      tipo: selectedTipo,
      nombre: formData.nombre || "",
      apellido: formData.apellido || "",
      telefono: formData.telefono || "",
      mensaje:
        selectedTipo === "compartir"
          ? `${formData.compartir}\nDestinatarios: ${formData.destinatarios}`
          : `${formData.solicitud}\nDetalle: ${formData.detalle}`,
    };

    try {
      const res = await fetch("http://localhost:4000/api/formulario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert("Error al enviar el formulario");
        setSending(false);
        return;
      }

      setSuccessMsg("Formulario enviado correctamente!");
      setFormData({});
    } catch (err) {
      alert("Error de conexión");
    }

    setSending(false);
  };

  return (
    <div className={styles.container}>
      {successMsg && <div className={styles.toast}>{successMsg}</div>}

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
                value={formData[field.name as FormFields] || ""}
              />
            ) : (
              <input
                name={field.name}
                type="text"
                placeholder={field.label}
                className={styles.input}
                onChange={handleChange}
                value={formData[field.name as FormFields] || ""}
              />
            )}

            {errors[field.name] && (
              <span className={styles.error}>{errors[field.name]}</span>
            )}
          </div>
        ))}

        <div className={styles.fullWidth}>
          <button className={styles.submitBtn} disabled={sending}>
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}
