import React, { useState } from "react";
import "./addSpent.css";

const AddSpent = ({ onAddGasto }) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !valor || !data || !categoria) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    onAddGasto({
      nome,
      valor: parseFloat(valor),
      data,
      categoria,
    });

    setNome("");
    setValor("");
    setData("");
    setCategoria("");
  };

  return (
    <div className="addSpent-container">
      <h2>Adicionar Gasto</h2>
      <form onSubmit={handleSubmit} className="addSpent-form">
        <input
          type="text"
          placeholder="Nome do gasto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor (ex: 100.00)"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Escolha uma categoria</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros</option>
        </select>
        <button type="submit">Adicionar Gasto</button>
      </form>
    </div>
  );
};

export default AddSpent;
