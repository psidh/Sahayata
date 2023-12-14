'use client'
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import data from '../../data/daily';

interface DummyDataItem {
  slNo: number;
  date: string;
  dumperId: string;
  status: string;
  currentCapacity: number;
  availableCapacity: number;
  operatorId: string;
}

export default function Table(): JSX.Element {
  const [tableData, setTableData] = useState<DummyDataItem[]>([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  return (
    <div className="flex justify-between">
      <div className="w-[30%]">
        <Sidebar />
      </div>
      <div className="w-[70%]">
        <h1 className="text-3xl mx-4 my-8 w-1/2">Insights</h1>
        <table className="table-fixed mx-4 my-8">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">SL.NO</th>
              <th className="py-2 px-4 border-b">DATE</th>
              <th className="py-2 px-4 border-b">DUMPER ID</th>
              <th className="py-2 px-4 border-b">STATUS</th>
              <th className="py-2 px-4 border-b">CURRENT CAPACITY</th>
              <th className="py-2 px-4 border-b">AVAILABLE CAPACITY</th>
              <th className="py-2 px-4 border-b">OPERATOR ID</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="py-2 px-4 border">{item.slNo}</td>
                <td className="py-2 px-4 border">{item.date}</td>
                <td className="py-2 px-4 border">{item.dumperId}</td>
                <td className="py-2 px-4 border">{item.status}</td>
                <td className="py-2 px-4 border">{item.currentCapacity}</td>
                <td className="py-2 px-4 border">{item.availableCapacity}</td>
                <td className="py-2 px-4 border">{item.operatorId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
