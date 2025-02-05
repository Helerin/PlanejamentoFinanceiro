import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto"; // Configuração automática do Chart.js
import "./chart.css"; // Importa o estilo específico do gráfico

// Componente para exibir o gráfico de gastos por categoria
const Grafico = ({ gastos }) => {
  // Agrupa os valores por categoria
  const categorias = gastos.reduce((acc, gasto) => {
    acc[gasto.categoria] = (acc[gasto.categoria] || 0) + gasto.valor;
    return acc;
  }, {});

  // Configuração dos dados do gráfico
  const data = {
    labels: Object.keys(categorias), // Categorias
    datasets: [
      {
        data: Object.values(categorias), // Valores de cada categoria
        backgroundColor: [
          "#FF6384", // Vermelho
          "#36A2EB", // Azul
          "#FFCE56", // Amarelo
          "#4BC0C0", // Verde
        ],
        hoverBackgroundColor: [
          "#FF4D67", // Vermelho escuro ao passar o mouse
          "#2B8ED8", // Azul escuro
          "#FFBF47", // Amarelo escuro
          "#3CAAA9", // Verde escuro
        ],
        borderWidth: 1, // Largura da borda entre as fatias
      },
    ],
  };

  // Configuração das opções do gráfico
  const options = {
    responsive: true, // O gráfico se ajusta ao tamanho do contêiner
    plugins: {
      legend: {
        display: true, // Exibe a legenda
        position: "bottom", // Posiciona a legenda abaixo do gráfico
        labels: {
          font: {
            size: 14, // Tamanho da fonte na legenda
          },
        },
      },
      tooltip: {
        callbacks: {
          // Personaliza o texto do tooltip
          label: (tooltipItem) => {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: R$ ${value.toFixed(2)}`; // Formata como moeda
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Gráfico de Gastos por Categoria</h2>
      <Pie data={data} options={options} />
      <div className="legend">
        Veja a distribuição dos seus gastos de forma clara e simples.
      </div>
    </div>
  );
};

export default Grafico;
