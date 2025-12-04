import styles from "./BannerSection.module.css";
import Logohero from "../assets/logohero.png";
import Lomasloop from "../assets/Lomasloop.png";

export default function BannerSection() {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${Lomasloop})` }}
    >
      {/* === DESKTOP (título en una sola línea) === */}
      <div className={styles.rowDesktop}>
        <img
          src={Logohero}
          alt="Icono Compartir Lomas"
          className={styles.heroIcon}
        />

        <div className={styles.separator}></div>

        <div className={styles.textDesktop}>
          <span className={styles.subTitleDesktop}>Desde</span>
          <span className={styles.mainTitleDesktop}>Compartir Lomas</span>
        </div>
      </div>

      {/* === MOBILE (título en cascada) === */}
      <div className={styles.rowMobile}>
        <img
          src={Logohero}
          alt="Icono Compartir Lomas"
          className={styles.heroIcon}
        />

        <div className={styles.separator}></div>

        <div className={styles.textMobile}>
          <span className={styles.subTitleMobile}>Desde</span>
          <span className={styles.mainTitleLine}>Compartir</span>
          <span className={styles.mainTitleLine}>Lomas</span>
        </div>
      </div>

      <p className={styles.bottomText}>
        promovemos la cultura de la solidaridad <br />y colaboración entre
        vecinos.
      </p>
    </section>
  );
}
