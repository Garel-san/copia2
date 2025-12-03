import styles from "./MissionVisionSection.module.css";
import SloganLogo from "../assets/SloganLogo.png";

export default function MissionVisionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.cardLeft}>
          <h2>Nuestra Misión</h2>

          <p>
            Generar una cultura de solidaridad en la comunidad para fomentar la
            ayuda mutua, el apoyo y la colaboración entre las personas,
            contribuyendo así a constituir una ciudad más justa y equitativa.
          </p>
        </div>

        {/* COLUMNA CENTRAL */}
        <div className={styles.center}>
          <img src={SloganLogo} alt="Valores fundamentales" />
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.cardRight}>
          <h2>Nuestra Visión</h2>

          <p>
            Fomentar la solidaridad, igualdad y cuidado mutuo creando
            comunidades más fuertes y conectadas donde todos tengan acceso a
            oportunidades y recursos necesarios.
          </p>

          <p>
            Trabajamos para garantizar puentes, vínculos, relaciones y
            conexiones para transformar la realidad a través del compromiso de
            todos los miembros de la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
}
