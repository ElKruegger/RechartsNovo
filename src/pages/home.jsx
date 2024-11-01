
import { data } from 'autoprefixer';
import BarChart from '../components/Chartjs/Barchart';
import StackedBarChart from '../components/Chartjs/StackedbarChart';

export default function Home() {
  return (
    <div className="flex flex-1 h-full w-screen ">
      <div className="flex flex-1 flex-col gap-10 justify-start items-center w-full h-full">
        
        <BarChart/>
        <StackedBarChart/>
        </div>
      </div>
  );
}