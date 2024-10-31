import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import useApi from '../../Hooks/UseData';
import { data } from 'autoprefixer';


// Custom label to show percentages on the right side of the bars
const CustomLabel = ({ x, y, width, value }) => (  //que bosta isso faz?
  <text x={x + width + 10} y={y} dy={10} fill="#333" fontSize={12} textAnchor="start">
    {value}%
  </text>
);

export function RenderHorizontalChart() {
  // Busca dados para cada gráfico usando diferentes endpoints
  const { data: percentData, error: percentError, loading: percentLoading } = useApi('/BuscaPorcentagem');
  const { data: titularData, error: titularError, loading: titularLoading } = useApi('/BuscaTitular');
  const { data: ativoReceptivoData, error: ativoReceptivoError, loading: ativoReceptivoLoading } = useApi('/BuscaAtivoReceptivo');

  //console.log(data)

  // Exibe mensagens de carregamento ou erro específicas para cada endpoint
  if (percentLoading || titularLoading || ativoReceptivoLoading) return <p>Carregando...</p>;
  if (percentError) return <p>Erro ao carregar os dados de Percentual: {percentError.message}</p>;
  if (titularError) return <p>Erro ao carregar os dados de Titular: {titularError.message}</p>;
  if (ativoReceptivoError) return <p>Erro ao carregar os dados de Ativo/Receptivo: {ativoReceptivoError.message}</p>;

  return (
    <div className='flex justify-around w-8/12'>

      {/* Gráfico para Percentual */}
      <ResponsiveContainer width="30%" height={300}>
        <BarChart
          layout="vertical"
          data={percentData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]}/> {/* Esconde o eixo X */}
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          <Bar dataKey="porcentagem" fill="#004C6D">
            <LabelList dataKey="porcentagem" content={<CustomLabel />} /> {/* Adiciona percentuais */}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Gráfico para Ativo e Receptivo */}
      <ResponsiveContainer width="30%" height={300}>
        <BarChart
          layout="vertical"
          data={ativoReceptivoData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          width={300}
          align-items="center"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" offset={150}/>
          <YAxis type="category" dataKey="name" hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="ativo" stackId="a" fill="#196065" />
          <Bar dataKey="receptivo" stackId="a" fill="#A9A9A9" />
        </BarChart>
      </ResponsiveContainer>

      {/* Gráfico para Titular */}
      <ResponsiveContainer width="30%" height={300}>
        <BarChart
          layout="vertical"
          data={titularData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="titular" fill="#004C6D" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
