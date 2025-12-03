import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Normalizar (primero SIEMPRE)
import "./normalize.css";

// Estilos globales (SIEMPRE van aquí)
import "./global.css";

// Componente raíz
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
