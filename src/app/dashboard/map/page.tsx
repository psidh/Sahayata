'use client';
import Sidebar from '@/components/Sidebar';
import Map from '@/components/Map';

export default function MapContainer() {
  return (
    <div className="flex justify-between">
      <div className="w-[25%]">
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <Map center={[23, 77]} />
      </div>
    </div>
  );
}
