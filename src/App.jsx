import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Grafico from "./components/Grafico";
import ListaDeGastos from "./components/ListaDeGastos";

function App() {
  const [gastos, setGastos] = useState([]);

  const adicionarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
        <header className="bg-blue-500 text-white py-4 shadow-md">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold">Controle Financeiro</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6 flex-grow flex flex-col items-center justify-center">
          <nav className="mb-6 flex space-x-4">
            <Link to="/cadastro" className="text-blue-500 hover:underline">Cadastro</Link>
            <Link to="/grafico" className="text-blue-500 hover:underline">Gráfico</Link>
          </nav>
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <Routes>
              <Route path="/cadastro" element={<><Cadastro adicionarGasto={adicionarGasto} /><ListaDeGastos gastos={gastos} /></>} />
              <Route path="/grafico" element={<Grafico gastos={gastos} />} />
            </Routes>
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm">&copy; 2025 Controle Financeiro. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
