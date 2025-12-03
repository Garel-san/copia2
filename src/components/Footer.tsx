import styles from "./Footer.module.css";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.left}>
          <p className={styles.description}>
            Compartir Lomas: Queremos generar una comunidad solidaria donde
            vecinos que tengan un oficio, una profesión o simplemente quieran
            colaborar, se contacten con aquellos que tengan una necesidad,
            generando así, una ayuda mutua entre vecinos, contribuyendo a una
            sociedad con más oportunidades.
          </p>

          <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com/desarrollolomas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className={styles.socialIcon}
              />
            </a>

            <a
              href="https://www.facebook.com/desarrollolomas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className={styles.socialIcon}
              />
            </a>
          </div>

          <p className={styles.copy}>
            © 2025 Secretaría de Desarrollo Social de Lomas de Zamora
          </p>
          <p className={styles.address}>Av. Gral Frías 1115</p>
        </div>

        {/* CENTRO */}
        <div className={styles.center}>
          <h3 className={styles.title}>Participá</h3>

          <Link to="/quiero-compartir" className={styles.link}>
            Quiero compartir
          </Link>

          <Link to="/solicito-ayuda" className={styles.link}>
            Solicito ayuda
          </Link>
        </div>

        {/* DERECHA */}
        <div className={styles.right}>
          <h3 className={styles.title}>
            Sobre el Municipio de <br /> Lomas de Zamora
          </h3>

          <a
            className={styles.link}
            href="https://www.lomasdezamora.gov.ar"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </footer>
  );
}
