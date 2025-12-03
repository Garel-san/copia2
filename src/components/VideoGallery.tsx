import { useRef, useState, useEffect } from "react";
import styles from "./VideoGallery.module.css";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

interface VideoItem {
  youtubeId: string;
  title: string;
  description: string;
}

interface VideoGalleryProps {
  items: VideoItem[];
}

export default function VideoGallery({ items }: VideoGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Estado del Modal
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const openModal = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Detecta si hay espacio para scrollear
  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;

    if (!el) return;

    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.wrapper}>
        {showLeft && (
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={scrollLeft}
          >
            ‹
          </button>
        )}

        <div className={styles.scrollArea} ref={scrollRef}>
          {items.map((item, index) => (
            <VideoCard
              key={index}
              youtubeId={item.youtubeId}
              title={item.title}
              description={item.description}
              onClick={() => openModal(item)} // ← NUEVO
            />
          ))}
        </div>

        {showRight && (
          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={scrollRight}
          >
            ›
          </button>
        )}
      </div>

      {/* Modal cargado dinámicamente */}
      {selectedVideo && (
        <VideoModal
          open={true}
          onClose={closeModal}
          youtubeId={selectedVideo.youtubeId}
          title={selectedVideo.title}
          description={selectedVideo.description}
        />
      )}
    </>
  );
}
