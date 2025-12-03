import styles from "./VideoCard.module.css";

interface VideoCardProps {
  youtubeId: string;
  title: string;
  description: string;
  onClick: () => void; // NUEVO
}

export default function VideoCard({
  youtubeId,
  title,
  description,
  onClick,
}: VideoCardProps) {
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={thumbnail} alt={title} className={styles.thumbnail} />

      <div className={styles.textBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
