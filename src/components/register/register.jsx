import React, { useState } from "react";
import "./register.css"; // Importa os estilos do formulário

// Componente para cadastro de gastos
const Cadastro = ({ adicionarGasto }) => {
  // Estados para controlar os valores dos campos do formulário
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [categoria, setCategoria] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Valida se todos os campos foram preenchidos
    if (!nome || !valor || !data || !categoria) {
      alert("Por favor, preencha todos os campos!"); // Mensagem de erro para o usuário
      return;
    }

    // Cria o objeto do novo gasto e o envia para o componente pai
    adicionarGasto({
      nome,
      valor: parseFloat(valor), // Converte o valor para número
      data,
      categoria,
    });

    // Limpa os campos do formulário
    setNome("");
    setValor("");
    setData("");
    setCategoria("");
  };

  return (
    <div className="register-container">
      <h2>Cadastro de Gastos</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Campo: Nome do Gasto */}
        <input
          type="text"
          placeholder="Nome do Gasto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-input"
        />

        {/* Campo: Valor */}
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="form-input"
        />

        {/* Campo: Data */}
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="form-input"
        />

        {/* Campo: Categoria */}
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="form-input"
        >
          <option value="">Selecione a Categoria</option>
          <option value="Compras">Compras</option>
          <option value="Streamings">Streamings</option>
          <option value="Cursos">Cursos</option>
          <option value="Outros">Outros</option>
        </select>

        {/* Botão: Adicionar Gasto */}
        <button type="submit" className="form-button">
          Adicionar Gasto
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
