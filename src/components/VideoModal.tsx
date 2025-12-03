import styles from "./VideoModal.module.css";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  youtubeId: string;
  title: string;
  description: string;
}

export default function VideoModal({
  open,
  onClose,
  youtubeId,
  title,
  description,
}: VideoModalProps) {
  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // evita cierre dentro
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allowFullScreen
          />
        </div>

        <p className={styles.description}>{description}</p>

        <button className={styles.contactBtn}>Contactar</button>
      </div>
    </div>
  );
}
