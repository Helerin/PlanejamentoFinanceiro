import React from "react";
import "./ListaDeGastos.css";

const ListaDeGastos = ({ gastos }) => {
  return (
    <div className="lista-container">
      <h2>Lista de Gastos</h2>
      {gastos.length > 0 ? (
        <div className="gastos-list">
          {gastos.map((gasto, index) => (
            <div key={index} className="gasto-card">
              <h3>{gasto.nome}</h3>
              <p>Valor: R$ {gasto.valor.toFixed(2)}</p>
              <p>Data: {gasto.data}</p>
              <p>Categoria: {gasto.categoria}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Não há gastos cadastrados ainda.</p>
      )}
    </div>
  );
};

export default ListaDeGastos;
