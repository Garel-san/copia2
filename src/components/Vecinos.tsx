import LomasLoop from "../assets/Lomasloop.png";
import styles from "./Vecinos.module.css";

interface VecinosProps {
  leftTitle: string;
  rightTitle: string;
  rightDescription: string;
}

export default function Vecinos({
  leftTitle,
  rightTitle,
  rightDescription,
}: VecinosProps) {
  return (
    <section className={styles.hero}>
      {/* CONTENEDOR IZQUIERDO */}
      <div className={styles.left}>
        <h2 className={styles.leftTitle}>{leftTitle}</h2>
        <img
          src={LomasLoop}
          alt="Decoración Lomas"
          className={styles.loopImg}
        />
      </div>

      {/* CONTENEDOR DERECHO */}
      <div className={styles.right}>
        <h3 className={styles.rightTitle}>{rightTitle}</h3>
        <p className={styles.rightDescription}>{rightDescription}</p>
      </div>
    </section>
  );
}
