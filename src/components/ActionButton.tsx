import React from "react";
import styles from "./ActionButton.module.css";

type ActionButtonProps = {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  iconBgColor?: string;
  iconSrc?: string; // imagen del icono
  showIcon?: boolean; // <<< NUEVO
};

export default function ActionButton({
  label,
  onClick,
  bgColor = "#0d6b8c",
  textColor = "#ffffff",
  iconBgColor = "#ffffff",
  iconSrc,
  showIcon = true, // <<< por defecto true para no romper tu UI actual
}: ActionButtonProps) {
  return (
    <div
      className={styles.wrapper}
      onClick={onClick}
      style={
        {
          "--bgColor": bgColor,
          "--textColor": textColor,
          "--iconBg": iconBgColor,
        } as React.CSSProperties
      }
    >
      {/* ICONO (opcional) */}
      {showIcon && (
        <div className={styles.iconContainer}>
          {iconSrc && <img src={iconSrc} alt="" />}
        </div>
      )}

      {/* RECTÁNGULO */}
      <div className={`${styles.buttonBox} ${!showIcon ? styles.noIcon : ""}`}>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
}
