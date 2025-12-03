import styles from "./OptionsSection.module.css";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";

import Action1 from "../assets/Action1-DphpQCFs.png";
import Action2 from "../assets/Action2-BGSgpba1.png";
import Action3 from "../assets/Action3-BXH5rFqo.png";

export default function OptionsSection() {
  const navigate = useNavigate();

  return (
    <section className={styles.grid}>
      {/* COLUMNA 1 */}
      <div className={styles.cardLeft}>
        <ActionButton
          label="Quiero compartir"
          iconSrc={Action1}
          bgColor="#0a7396ff"
          iconBgColor="#0a7396ff"
          textColor="#ffffff"
          onClick={() => navigate("/ofrecen")} // SECTION 1
        />
        <p>Contanos de qué manera pensás que podrías ayudar a tus vecinos.</p>
      </div>

      {/* COLUMNA 2 */}
      <div className={styles.cardCenter}>
        <ActionButton
          label="Solicito ayuda"
          iconSrc={Action2}
          bgColor="#F5F5F5"
          iconBgColor="#F5F5F5"
          textColor="#0d6b8c"
          onClick={() => navigate("/solicitan")} // SECTION 2
        />
        <p>Estamos para ayudarte y vincularte con vecinos solidarios.</p>
      </div>

      {/* COLUMNA 3 */}
      <div className={styles.cardRight}>
        <ActionButton
          label="Compartir Lomas"
          iconSrc={Action3}
          bgColor="#0a7396ff"
          iconBgColor="#0a7396ff"
          textColor="#ffffff"
          onClick={() => navigate("/compartieron")} // SECTION 3
        />
        <p>
          Personas solidarias que se han encontrado con aquellas que necesitaban
          ayuda.
        </p>
      </div>
    </section>
  );
}
