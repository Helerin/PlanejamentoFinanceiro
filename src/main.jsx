import React from "react"; // Importa a biblioteca React
import { StrictMode } from "react"; // Ativa verificações adicionais no React em modo de desenvolvimento
import { createRoot } from "react-dom/client"; // Cria o ponto de montagem para o React
import "./index.css"; // Importa estilos globais
import App from "./App.jsx"; // Importa o componente principal da aplicação

// Obtém o elemento HTML onde o React será renderizado
const rootElement = document.getElementById("root");

// Renderiza o componente principal da aplicação (App) dentro do elemento root
createRoot(rootElement).render(
  <StrictMode>
    <App /> {/* Componente principal */}
  </StrictMode>
);
