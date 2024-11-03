import BarChart from '../components/Chartjs/Barchart';
import StackedBarChart from '../components/Chartjs/StackedbarChart';
import Table from '../components/Chartjs/Table';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center h-full w-screen gap-10">
      <div className="flex flex-col items-center w-full h-full">

        <div className="absolute left-0 top-0 p-10 ml-0 border-l-4 border-transparent shadow-md">
          <h2 className="text-2xl  text-black">Atendimentos por Serviços</h2>
        </div>

        <p className="text-2xl mt-20 font-medium text-black">Julho/2024</p>
        <p className="text-xl font-light text-black">Mensal</p>

        {/* Gráficos */}
        <BarChart />
        <StackedBarChart />

        {/* Label e gráfico abaixo */}
        <div className="mt-10">
          <div className="p-10 ml-0 border-l-4 border-transparent shadow-md">
            <h2 className="text-2xl  text-black">Atendimento de Serviço por Motivo</h2>

          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}
