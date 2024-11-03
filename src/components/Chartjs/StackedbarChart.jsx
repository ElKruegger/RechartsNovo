import useApi from '../../Hooks/UseData';
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const PercentageChart = () => {
  const { data: percentageData, loading, error } = useApi('/BuscaPorcentagem');

  const data = {
    labels: percentageData ? percentageData.map(item => item.servico) : [], // Ajuste conforme a estrutura dos dados retornados
    datasets: [
      {
        label: 'Percentage',
        backgroundColor: 'rgba(45, 110, 114)',
        data: percentageData ? percentageData.map(item => item.porcentagem) : [], // Ajuste para o campo que representa a porcentagem
      },
    ],
  };


 const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Percentage Chart' },
    },
    indexAxis: 'y', // Para barras horizontais
  };

  return <Bar data={data} options={options} />;
};

const AtivoReceptivoChart = () => {

  const { data: ativoReceptivoData, loading, error } = useApi('/BuscaAtivoReceptivo');


  const data = {
    labels: ativoReceptivoData ? ativoReceptivoData.map(item => item.servico) : [],
    datasets: [
      {
        label: 'Ativo',
        backgroundColor: 'rgba(45, 110, 114)',
        data: ativoReceptivoData ? ativoReceptivoData.map(item => item.ativo * -1) : [], // Multiplicando por -1 para dados à esquerda
        stack: 'center',
      },
      {
        label: 'Receptivo',
        backgroundColor: 'rgba(171,171,171)',
        data: ativoReceptivoData ? ativoReceptivoData.map(item => item.receptivo) : [],
        stack: 'center',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Ativo/Receptivo Chart' },
    },
    scales: {
      x: {
        stacked: true,
        min: -10, // Ajuste conforme necessário para o valor mínimo
        max: 10 ,  // Ajuste conforme necessário para o valor máximo
        grid: {
          color: (context) => (context.tick.value === 0 ? 'black' : '#e5e5e5'), // Linha central em preto
          lineWidth: (context) => (context.tick.value === 0 ? 2 : 1),
        },
      },
      y: {
        stacked: true,
      },
    },
    indexAxis: 'y', // Para barras horizontais
  };

  return <Bar data={data} options={options} />;
};


const TitularChart = () => {
  const { data, error, loading } = useApi('/BuscaTitular');

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Titular',
        backgroundColor: 'rgba(45, 110, 114)',
        data: [],
      },
    ],
  });

  useEffect(() => {
    if (data) {
      const labels = data.map((item) => item.servico);
      const value = data.map((item) => item.totalAtendimento);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Titular',
            backgroundColor: 'rgba(45, 110, 114)',
            data: value,
          },
        ],
      });
    }
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Titular Chart' },
    },
    indexAxis: 'y', // Set to 'x' for vertical bars
  };

  return <Bar data={chartData} options={options} />;
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div className="flex justify-center w-full h-96"> {/* Increased height */}
        <PercentageChart />
      </div>
      <div className="flex justify-center w-full h-96"> {/* Increased height */}
        <AtivoReceptivoChart />
      </div>
      <div className="flex justify-center w-full h-96"> {/* Increased height */}
        <TitularChart />
      </div>
    </div>
  );
};

export default Dashboard;
