import { RenderLineChart } from "../components/charts/line-chart";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <RenderLineChart />
    </div>
  )
} 