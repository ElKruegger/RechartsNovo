import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
  };

  return (
    <div className="flex flex-wrap justify-center gap-44">
      {/* Primeiro Gráfico */}
      <div className="flex-1 basis-[400px] max-w-[500px] h-[400px]">
        <Bar data={data} options={options} />
      </div>
      {/* Segundo Gráfico */}
      <div className="flex-1 basis-[400px] max-w-[500px] h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
