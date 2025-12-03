import styles from "./FloatingWhatsAppButton.module.css";
import whatsappIcon from "../assets/whatsapp.png";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=541155670286&text=%F0%9F%91%8B%F0%9F%8F%BB%C2%A1Hola!%20Dame%20info%20sobre%20CompartirLomas..."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingButton}
    >
      <img src={whatsappIcon} alt="WhatsApp" className={styles.icon} />
    </a>
  );
}
