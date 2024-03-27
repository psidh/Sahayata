import BarGraph from '@/components/BarGraph';
import Sidebar from '@/components/Sidebar';

export default function Page() {
  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-[25%]">
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <div className="flex flex-col">
          <BarGraph />
          {/* <Third /> */}
          {/* <Second /> */}
        </div>
      </div>
    </div>
  );
}
