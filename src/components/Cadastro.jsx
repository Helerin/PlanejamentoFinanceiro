import React, { useState } from "react";

const Cadastro = ({ adicionarGasto }) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !valor || !data || !categoria) return;

    adicionarGasto({ nome, valor: parseFloat(valor), data, categoria });
    setNome("");
    setValor("");
    setData("");
    setCategoria("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Nome do Gasto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="p-2 border rounded"
      />
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Selecione a Categoria</option>
        <option value="Compras">Compras</option>
        <option value="Streamings">Streamings</option>
        <option value="Cursos">Cursos</option>
        <option value="Outros">Outros</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Adicionar Gasto
      </button>
    </form>
  );
};

export default Cadastro;
