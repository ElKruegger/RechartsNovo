import { LineChart, Line } from 'recharts';
const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page b', uv: 200, pv: 44, amt: 22 },
    { name: 'Page c', uv: 224, pv: 444, amt: 22 },
];

export function RenderLineChart() {
    return (
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
    )
}