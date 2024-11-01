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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        data: [100, -50, 70, -40, 80, -30, 60],
      },
      {
        label: 'Dataset 2',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        data: [60, 90, -20, 70, -50, 40, -60],
      },
      {
        label: 'Dataset 3',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        data: [-30, 80, 60, -90, 30, 100, -70],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    indexAxis: 'y', // Alteração para barras verticais
  };

  return (
    <div className='flex justify-center w-full h-1/2'> {/* Ajuste de tamanho */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
