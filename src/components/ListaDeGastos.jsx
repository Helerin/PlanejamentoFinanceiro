import React from "react";

const ListaDeGastos = ({ gastos }) => {
  if (gastos.length === 0) {
    return <p className="text-gray-500">Nenhum gasto cadastrado ainda.</p>;
  }

  return (
    <ul className="space-y-2">
      {gastos.map((gasto, index) => (
        <li key={index} className="p-2 border rounded flex justify-between">
          <span>{gasto.nome}</span>
          <span>R$ {gasto.valor.toFixed(2)}</span>
          <span>{gasto.categoria}</span>
          <span>{gasto.data}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeGastos;
