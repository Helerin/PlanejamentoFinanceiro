import React, { useState } from "react"; // Importa React e o hook useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa o roteador e os componentes de rotas
import AddSpent from "./components/addSpent/index"; // Componente para cadastro de gastos
import Grafico from "./components/chart/chart"; // Componente para exibir o gráfico
import Header from "./components/header/index"; // Componente do cabeçalho
import "./App.css"; // Importa os estilos globais

function App() {
  // Estado global para armazenar os gastos
  const [gastos, setGastos] = useState([]);

  // Função para adicionar um novo gasto
  const adicionarGasto = (novoGasto) => {
    setGastos((prevGastos) => [...prevGastos, novoGasto]); // Adiciona o gasto ao estado atual
  };

  return (
    <Router>
      <div className="app-container">
        {/* Cabeçalho com links de navegação */}
        <Header />

        {/* Configuração das rotas */}
        <Routes>
          {/* Rota para a página de cadastro de gastos */}
          <Route path="/cadastro" element={<AddSpent onAddGasto={adicionarGasto} />} />

          {/* Rota para a página do gráfico */}
          <Route path="/grafico" element={<Grafico gastos={gastos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
