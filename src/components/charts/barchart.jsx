'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: 'Psicologico',
    Motivo1: 4000,
    Motivo2: 2400,
    Motivo3: 2400,
  },
  {
    name: 'Assalto/Seq',
    Motivo1: 3000,
    Motivo2: 1398,
    Motivo3: 2400,
  },
  {
    name: 'Nutri',
    Motivo1: 9800,
    Motivo2: 2000,
    Motivo3: 2400,
  },
  {
    name: 'ADV',
    Motivo1: 7908,
    Motivo2: 780,
    Motivo3: 2400,
  },
  {
    name: 'Saúde',
    Motivo1: 4800,
    Motivo2: 1890,
    Motivo3: 2400,
  },
  {
    name: 'Motivo',
    Motivo1: 1800,
    Motivo2: 4590,
    Motivo3: 2400,
  },
  {
    name: 'Motivo1',
    Motivo1: 3800,
    Motivo2: 2390,
    Motivo3: 2400,
  },
  {
    name: 'motivo2',
    Motivo1: 3800,
    Motivo2: 2390,
    Motivo3: 2400,
  },
  {
    name: 'Avaliacao',
    Motivo1: 3800,
    Motivo2: 2390,
    Motivo3: 2400,
  },
  {
    name: 'Tratamento',
    Motivo1: 3800,
    Motivo2: 2390,
    Motivo3: 2400,

  },
  {
    name: 'Depressao',
    Motivo1: 3800,
    Motivo2: 2390,
    Motivo3: 2400,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer className="flex flex-1 p-10">
      <BarChart
        width={200}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Motivo1" fill="#2563eb" />
        <Bar dataKey="Motivo2" fill="#8b5cf6" />
        <Bar dataKey="Motivo3" fill="#7c3aed" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Motivo1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Motivo2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Motivo3:
          <span className="ml-2">${payload[2].value}</span>
        </p>
      </div>
    );
  }
};


export function RenderBarChart() {
  return (
    <BarChartComponent />
  );
}