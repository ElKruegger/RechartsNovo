'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: 'Jan',
    Motivo1: 2400,
    Motivo2: 2400,
    Motivo3: 2400,
  },
  {
    name: 'Feb',
    Motivo1: 3000,
    Motivo2: 1398,
    Motivo3: 2400,
  },
  {
    name: 'Mar',
    Motivo1: 2000,
    Motivo2: 9800,
    Motivo3: 2400,
  },
  {
    name: 'Apr',
    Motivo1: 2780,
    Motivo2: 3908,
    Motivo3: 9500,
  },
  {
    name: 'May',
    Motivo1: 1890,
    Motivo2: 4800,
    Motivo3: 7500,
  },
  {
    name: 'Jun',
    Motivo1: 2390,
    Motivo2: 3800,
    Motivo3: 7500,
  },

  {
    name: 'Jul',
    Motivo1: 2390,
    Motivo2: 3800,
    Motivo3: 6000,
  },
  {
    name: 'Ago',
    Motivo1: 2390,
    Motivo2: 3800,
    Motivo3: 5900,
  },
  {
    name: 'Set',
    Motivo1: 2390,
    Motivo2: 5000,
    Motivo3: 2400,
  },
  {
    name: 'Out',
    Motivo1: 2390,
    Motivo2: 5800,
    Motivo3: 2400,
  },
  {
    name: 'Nov',
    Motivo1: 2390,
    Motivo2: 5800,
    Motivo3: 2400,
  },
  {
    name: 'Dez',
    Motivo1: 2390,
    Motivo2: 3800,
    Motivo3: 2400,
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
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
        <Line type="monotone" dataKey="Motivo1" stroke="#3b82f6" />
        <Line type="monotone" dataKey="Motivo2" stroke="#8b5cf6" />
        <Line type="monotone" dataKey="Motivo3" stroke="#D71B60" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;

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
        <p className="text-sm text-red-400">
          Motivo3:
          <span className="ml-2">${payload[2].value}</span>
        </p>
      </div>
    );
  }
};


export function RenderLineChart() {
  return <LineChartComponent />;
}