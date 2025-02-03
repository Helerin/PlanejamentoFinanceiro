import React from "react";

const ListaDeGastos = ({ gastos }) => {
  return (
    <ul className="space-y-2">
      {gastos.map((gasto, index) => (
        <li key={index} className="p-2 border rounded">
          {gasto.nome} - R$ {gasto.valor.toFixed(2)} - {gasto.categoria} - {gasto.data}
        </li>
      ))}
    </ul>
  );
};

export default ListaDeGastos;
