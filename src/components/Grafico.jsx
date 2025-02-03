import React from "react";
import { Pie } from "react-chartjs-2";

const Grafico = ({ gastos }) => {
  const categorias = gastos.reduce((acc, gasto) => {
    acc[gasto.categoria] = (acc[gasto.categoria] || 0) + gasto.valor;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categorias),
    datasets: [
      {
        data: Object.values(categorias),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gráfico de Gastos por Categoria</h2>
      <Pie data={data} />
    </div>
  );
};

export default Grafico;
