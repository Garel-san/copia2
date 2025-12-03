import styles from "./HeroSection.module.css";
import logohero from "../assets/logohero.png";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img src={logohero} className={styles.icon} />
        <h1>
          Compartir
          <br />
          Lomas
        </h1>
      </div>

      <div className={styles.right}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/E6JlcNiac6k?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=E6JlcNiac6k&iv_load_policy=3&disablekb=1"
          title="Video Compartir Lomas"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
