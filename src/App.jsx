import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Grafico from "./components/Grafico";

function App() {
  const [gastos, setGastos] = useState([]);

  const adicionarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/cadastro" className="mr-4">Cadastro</Link>
          <Link to="/grafico">Gráfico</Link>
        </nav>
        <Routes>
          <Route path="/cadastro" element={<Cadastro adicionarGasto={adicionarGasto} />} />
          <Route path="/grafico" element={<Grafico gastos={gastos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
