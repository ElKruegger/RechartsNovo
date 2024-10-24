import { useState } from 'react';
import { RenderLineChart } from "../components/charts/LineChart";
import { RenderBarChart } from "../components/charts/barchart";
import { RenderAreaChart } from "../components/charts/AreaChart";
import { Navbar } from "../components/navbar";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineSsidChart } from "react-icons/md";
import { RiBarChartHorizontalFill } from "react-icons/ri";

export default function Home() {

  const [chart, setChart] = useState('area');

  const handleChartChange = (newChart) => {
    setChart(newChart);
  };

    return (
      <div className="flex h-screen w-screen">
        <Navbar />
        <div className="flex flex-1 flex-col w-full p-9 items-center">
        {chart === 'area' ? <RenderAreaChart /> : null}
          {chart === 'line' ? <RenderLineChart /> : null}
          {chart === 'bar' ? <RenderBarChart /> : null}
          <div className="flex  items-center w-60 h-24 justify-center bg-zinc-700 rounded-3xl transition duration-500 ">
            <IoStatsChart className="mx-2 rounded-3xl border-2 border-white-700  hover:scale-120 text-3xl hover:border-blue-500" onClick={() => handleChartChange('bar')} />
            <MdOutlineSsidChart className="mx-2 rounded-3xl border-2 border-white-700 hover:scale-120 text-3xl hover:border-blue-500" onClick={() => handleChartChange('area')}/>
            <RiBarChartHorizontalFill className="mx-2 rounded-3xl border-2 border-white-700 hover:scale-120 text-3xl hover:border-blue-500" onClick={() => handleChartChange('line')}/>
          </div>
        </div>
      </div>
    )
  } 