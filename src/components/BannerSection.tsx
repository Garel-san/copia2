import styles from "./BannerSection.module.css";
import Logohero from "../assets/logohero.png";
import Lomasloop from "../assets/Lomasloop.png";

export default function BannerSection() {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${Lomasloop})` }}
    >
      {/* CONTENEDOR CENTRAL */}
      <div className={styles.row}>
        <img
          src={Logohero}
          alt="Icono Compartir Lomas"
          className={styles.heroIcon}
        />

        <div className={styles.separator}></div>

        <div className={styles.textBlock}>
          <span className={styles.subTitle}>Desde</span>
          <span className={styles.mainTitle}>Compartir Lomas</span>
        </div>
      </div>

      <p className={styles.bottomText}>
        promovemos la cultura de la solidaridad <br />y colaboración entre
        vecinos.
      </p>
    </section>
  );
}
