import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function BarChart() {
  const dataJuly = {
    labels: ['Contato Gestores', 'Fisioterapia/Personal', 'Orientações', 'Psicologico', 'Serviço Social'],
    datasets: [
      {
        label: 'July',
        data: [12, 15, 8, 5, 10], // Replace with July data
        backgroundColor: ['#FF69B4', '#8B4513', '#32CD32', '#FFD700', '#1E90FF'], // Cores: marrom, rosa, verde, amarelo, azul
      },
    ],
  };

  const dataJune = {
    labels: ['Contato Gestores', 'Fisioterapia/Personal', 'Orientações', 'Psicologico', 'Serviço Social'],
    datasets: [
      {
        label: 'June',
        data: [10, 20, 5, 7, 12], // Replace with June data
        backgroundColor: ['#FF69B4', '#8B4513', '#32CD32', '#FFD700', '#1E90FF'], // Cores: marrom, rosa, verde, amarelo, azul
      },
    ],
  };

  return (
    <div className="flex flex-wrap justify-center gap-44">
      <div className="flex-1 basis-[400px] max-w-[500px] h-[400px]">
        <h2>June Data</h2>
        <Bar data={dataJune} />
      </div>

      <div className="flex-1 basis-[400px] max-w-[500px] h-[400px]">
        <h2>July Data</h2>
        <Bar data={dataJuly} />
      </div>
    </div>
  );
}

export default BarChart;
