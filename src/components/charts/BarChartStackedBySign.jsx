import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'A', positive: 4000, negative: -2400 },
  { name: 'B', positive: 3000, negative: -1398 },
  { name: 'C', positive: 2000, negative: -9800 },
  { name: 'D', positive: 2780, negative: -3908 },
  { name: 'E', positive: 1890, negative: -4800 },
  { name: 'F', positive: 2390, negative: -3800 },
  { name: 'G', positive: 3490, negative: -4300 },
];

const BarChartStackedBySign = () => (
  <ResponsiveContainer width="50%" height={400}>
    <BarChart
    layout='vertical'
      width={500}
      height={300}
      data={data}
      stackOffset="sign"
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="positive" stackId="stack" fill="#82ca9d" />
      <Bar dataKey="negative" stackId="stack" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartStackedBySign;