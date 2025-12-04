import { useEffect, useState } from "react";
import styles from "./HeaderBar.module.css";
import LogoMuni from "../assets/LogoMuni.svg";
import LogoSecre from "../assets/LogoSecre.svg";
import NavBox from "../components/NavBox";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function HeaderBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Estado del menú mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll en hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  // Función genérica para navegación interna
  const goToSection = (id: string) => {
    setMenuOpen(false); // cerrar menú si estamos en mobile

    if (location.pathname === "/") {
      const target = document.getElementById(id);
      if (target)
        target.scrollIntoView({
          behavior: "smooth",
        });
    } else {
      navigate(`/#${id}`);
    }
  };

  const scrollToPlataforma = () => goToSection("plataformaSection");
  const scrollToMisionVision = () => goToSection("misionVision");
  const scrollToValores = () => goToSection("valoresSection");
  const scrollToParticipa = () => goToSection("participaSection");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          {/* Botón hamburguesa (solo visible en mobile) */}
          <button className={styles.burger} onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </button>

          {/* Logos */}
          <div className={styles.left}>
            <Link to="/" className={styles.logoLink}>
              <img src={LogoMuni} className={styles.logoMuni} />
            </Link>

            <Link to="/" className={styles.logoLink}>
              <img src={LogoSecre} className={styles.logoSecre} />
            </Link>
          </div>

          {/* NAV DESKTOP (NO se toca) */}
          <nav className={styles.nav}>
            <div className={styles.dropdownWrapper}>
              <a className={styles.navItem}>Compartir Lomas</a>

              <div className={styles.dropdown}>
                <NavBox
                  items={[
                    { label: "Plataforma", onClick: scrollToPlataforma },
                    { label: "Misión y visión", onClick: scrollToMisionVision },
                    { label: "Nuestros valores", onClick: scrollToValores },
                    { label: "Participá", onClick: scrollToParticipa },
                  ]}
                />
              </div>
            </div>

            <Link to="/ofrecen" className={styles.navItem}>
              Vecinos que ofrecen
            </Link>

            <Link to="/solicitan" className={styles.navItem}>
              Vecinos que solicitan
            </Link>

            <Link to="/compartieron" className={styles.navItem}>
              Ya compartieron
            </Link>
          </nav>
        </div>
      </header>

      {/* ======= MENÚ LATERAL MOBILE ======= */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.mobileContent}>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <a onClick={() => goToSection("plataformaSection")}>
            Compartir Lomas
          </a>
          <Link to="/ofrecen" onClick={() => setMenuOpen(false)}>
            Vecinos que ofrecen
          </Link>
          <Link to="/solicitan" onClick={() => setMenuOpen(false)}>
            Vecinos que solicitan
          </Link>
          <Link to="/compartieron" onClick={() => setMenuOpen(false)}>
            Ya compartieron
          </Link>
        </div>
      </div>
    </>
  );
}
