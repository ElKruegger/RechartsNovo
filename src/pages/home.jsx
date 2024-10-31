import { useState } from 'react';
import { Navbar } from "../components/navbar";
import { RenderHorizontalChart } from "../components/charts/horizontalchart";
import { RenderSimpleBarChart } from "../components/charts/SimpleBarchart";
import BarChartStackedBySign from '../components/charts/BarChartStackedBySign';

export default function Home() {
  return (
    <div className="flex flex-1 h-full w-screen ">
      {/* <Navbar /> */}

      <div className="flex flex-1 flex-col gap-10 justify-start items-center h-screen w-screen p-10">
        <h1 className="text-4xl text-black shadow-md bg-white p-4 border-transparent mb-6">Atendimentos por serviço</h1>
        
        <RenderSimpleBarChart />
        {/* <RenderHorizontalChart /> */}
        <BarChartStackedBySign />

        <div className="flex flex-1 flex-col  h-screen w-screen ">
          <h1 className="text-4xl text-black shadow-md bg-white p-4 border-transparent">Atendimento de serviço por motivo</h1>
        </div>
      </div>
    </div>
  );
}
