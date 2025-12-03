import styles from "./NavBox.module.css";

interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface NavBoxProps {
  items: NavItem[];
  activeIndex?: number;
}

export default function NavBox({ items, activeIndex }: NavBoxProps) {
  return (
    <div className={styles.box}>
      {items.map((item, index) => {
        const handleClick = (e: React.MouseEvent) => {
          if (item.onClick) {
            e.preventDefault(); // Previene navegación si hay lógica propia
            item.onClick();
          }
        };

        return (
          <a
            key={index}
            href={item.href || "#"}
            onClick={handleClick}
            className={`${styles.item} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
