'use client';
import { useApi } from '../../Hooks/UseData';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer className={'flex flex-1 p-10'}>
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="servico"
          stroke="#2563eb"
          fill="#3b82f6"
          name="Serviço"
        />
        <Area
          type="monotone"
          dataKey="totalAtendimento"
          stroke="#7c3aed"
          fill="#D71B60"
          name="Total de Atendimentos"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Motivo Chamada: 
          <span className="ml-2">{payload[0].payload.name}</span>
        </p>
        <p className="text-sm text-blue-400">
          Serviço: 
          <span className="ml-2">{payload[0].payload.servico}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Total Atendimentos: 
          <span className="ml-2">{payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export function RenderAreaChart() {
  const { data, error, loading } = useApi('/GetAtendimento/GetMotivoChamadaData');

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar dados: {error.message}</p>;

  if (!data) return <p>Nenhum dado disponível</p>;

  const salesData = data.map(item => ({
    name: item.motivoChamadaNome,
    servico: item.servico,
    totalAtendimento: item.totalAtendimento,
  }));

  return <AreaChartComponent data={salesData} />;
}
