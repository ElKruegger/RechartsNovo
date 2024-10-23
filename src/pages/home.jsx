import { RenderLineChart } from "../components/charts/LineChart";
import { RenderBarChart } from "../components/charts/barchart";
import { RenderAreaChart } from "../components/charts/AreaChart";
import { Navbar } from "../components/navbar";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineSsidChart } from "react-icons/md";
import { RiBarChartHorizontalFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="flex flex-1 flex-col w-full p-9 items-center">
        <RenderAreaChart />
        {/* <RenderLineChart /> */}
        {/* <RenderBarChart /> */}
      <div className="flex  items-center w-60 h-32 justify-center bg-zinc-700 rounded-3xl transition duration-500  hover:scale-125">
      <IoStatsChart className="mx-2 rounded-3xl border-2 border-white-700  hover:scale-120 text-3xl hover:border-blue-500"/>
      <MdOutlineSsidChart className="mx-2 rounded-3xl border-2 border-white-700 hover:scale-120 text-3xl hover:border-blue-500" />
      <RiBarChartHorizontalFill className="mx-2 rounded-3xl border-2 border-white-700 hover:scale-120 text-3xl hover:border-blue-500" />

        <div>
        </div>
      </div>
      </div>
    </div>
  )
} 