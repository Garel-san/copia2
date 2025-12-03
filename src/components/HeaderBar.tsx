import styles from "./HeaderBar.module.css";
import LogoMuni from "../assets/LogoMuni.svg";
import LogoSecre from "../assets/LogoSecre.svg";
import NavBox from "../components/NavBox";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function HeaderBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll generalizado cuando cambia el hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target)
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  }, [location]);

  // ============================
  // FUNCIONES GENERALIZADAS
  // ============================

  const goToSection = (id: string) => {
    if (location.pathname === "/") {
      // Ya estamos en Home → scrollear
      const target = document.getElementById(id);
      if (target)
        target.scrollIntoView({
          behavior: "smooth",
        });
    } else {
      // No estamos en Home → ir a Home con hash
      navigate(`/#${id}`);
    }
  };

  const scrollToPlataforma = () => goToSection("plataformaSection");
  const scrollToMisionVision = () => goToSection("misionVision");
  const scrollToValores = () => goToSection("valoresSection");
  const scrollToParticipa = () => goToSection("participaSection");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link to="/" className={styles.logoLink}>
            <img src={LogoMuni} className={styles.logoMuni} />
          </Link>

          <Link to="/" className={styles.logoLink}>
            <img src={LogoSecre} className={styles.logoSecre} />
          </Link>
        </div>

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
  );
}
