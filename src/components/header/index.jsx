import React from "react";
import { Link } from "react-router-dom"; // Importa o Link para navegação
import "./header.css"; // Importa o CSS do cabeçalho

// Componente Header
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo ou título */}
        <h1 className="header-title">Controle Financeiro</h1>

        {/* Links de navegação */}
        <nav className="header-nav">
          <Link to="/cadastro" className="nav-link">
            Cadastro de Gastos
          </Link>
          <Link to="/grafico" className="nav-link">
            Gráfico de Gastos
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
