import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataJunho = [
  {
    name: 'JUNHO',
    ContatoGestores: 2390,
    Fisioterapia_Personal: 3800,
    Orientações_Programa: 2500,
    Psicologico: 2100,
    Serviço_Social: 2000,
  },
];

const dataJulho = [
  {
    name: 'JULHO',
    ContatoGestores: 3490,
    Fisioterapia_Personal: 4300,
    Orientações_Programa: 2100,
    Psicologico: 2100,
    Serviço_Social: 2000,
  },
];

class BarChartJunho extends PureComponent {
  render() {
    return (
      <ResponsiveContainer className="w-6 h-5/6">
        <BarChart
          width={10}
          height={100}
          data={dataJunho}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend/>        
          <Bar dataKey="ContatoGestores" fill="#8884d8" barSize={30}/>
          <Bar dataKey="Fisioterapia_Personal" fill="#82ca9d" barSize={30}/>
          <Bar dataKey="Orientações_Programa" fill="#ffc658" barSize={30}/>
          <Bar dataKey="Psicologico" fill="#ff0000" barSize={30}/>
          <Bar dataKey="Serviço_Social" fill="#0000ff" barSize={30}/>
        </BarChart>
          
      </ResponsiveContainer>
    );
  }
}

class BarChartJulho extends PureComponent {
  render() {
    return (
      <ResponsiveContainer className="w-full h-5/6">
        <BarChart
          width={10}
          height={100}
          data={dataJulho}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Bar dataKey="ContatoGestores" fill="#8884d8" barSize={30}/>
          <Bar dataKey="Fisioterapia_Personal" fill="#82ca9d" barSize={30}/>
          <Bar dataKey="Orientações_Programa" fill="#ffc658" barSize={30}/>
          <Bar dataKey="Psicologico" fill="#ff0000" barSize={30}/>
          <Bar dataKey="Serviço_Social" fill="#0000ff" barSize={30}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export function RenderSimpleBarChart () {
  return (
    <div className='flex justify-between gap-7 items-center h-1/2 w-3/6'>
      <BarChartJunho />
      <BarChartJulho />
    </div>
  );
}






