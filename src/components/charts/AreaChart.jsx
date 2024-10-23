'use client';

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

const productSales = [
  {
    name: 'Jan',
    Motivo1: 1000,
    Motivo2: 2400,
    Motivo3: 3400,
  },
  {
    name: 'Feb',
    Motivo1: 4000,
    Motivo2: 5400,
    Motivo3: 6400,
  },
  {
    name: 'Mar',
    Motivo1: 7000,
    Motivo2: 8400,
    Motivo3: 9400,
  },
  {
    name: 'Apr',
    Motivo1: 10000,
    Motivo2: 9400,
    Motivo3: 8400,
  },
  {
    name: 'May',
    Motivo1: 1000,
    Motivo2: 2400,
    Motivo3: 2400,
  },
  {
    name: 'Ago',
    Motivo1: 1000,
    Motivo2: 2400,
    Motivo3: 2400,
  },
  {
    name: 'Sep',
    Motivo1: 4000,
    Motivo2: 2400,
    Motivo3: 5400,
  },
  {
    name: 'Out',
    Motivo1: 3000,
    Motivo2: 5400,
    Motivo3: 7400,
  },
  {
    name: 'Nov',
    Motivo1: 1000,
    Motivo2: 1800,
    Motivo3: 4500,
  },
  {
    name: 'Dec',
    Motivo1: 1000,
    Motivo2: 9400,
    Motivo3: 10400,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer className={'flex flex-1 p-10'} >
      <AreaChart
        width={500}
        height={300}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="Motivo1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />

        <Area
          type="monotone"
          dataKey="Motivo2"
          stroke="#7c3aed"
          fill="#D71B60"
          stackId="1"
        />

        <Area
          type="monotone"
          dataKey="Motivo3"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
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
          Motivo1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Motivo2:
          <span className="ml-2">${payload[1].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Motivo3:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;

export function RenderAreaChart() {
  return <AreaChartComponent />;
}
