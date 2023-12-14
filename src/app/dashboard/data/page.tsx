'use client'
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import data from '../../../data/data';

interface DummyDataItem {
  slNo: number;
  date: string;
  dumperId: string;
  status: string;
  currentCapacity: number;
  availableCapacity: number;
  operatorId: string;
  time: string;
}

export default function Table(): JSX.Element {
  const [tableData, setTableData] = useState<DummyDataItem[]>([]);

  useEffect(() => {
    setTableData(data);
  }, []);

  const headClass = `py-2 px-4 border-b font-sans flex-grow `
  const rowClass = `py-2 px-4 border`
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <h1 className="text-6xl text-blue-800 font-semibold mx-4 mt-8 my-16 flex-grow  ">Records</h1>
        <table className=" mx-4 my-8 flex-grow ">
          <thead className="bg-gray-200  flex-grow ">
            <tr>
              <th className={headClass}>SL.NO</th>
              <th className={headClass}>DATE</th>
              <th className={headClass}>DUMPER ID</th>
              <th className={headClass}>STATUS</th>
              <th className={headClass}>CURRENT CAPACITY</th>
              <th className={headClass}>AVAILABLE CAPACITY</th>
              <th className={headClass}>OPERATOR ID</th>
              <th className={headClass}>TIME</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className={rowClass}>{item.slNo}</td>
                <td className={rowClass}>{item.date}</td>
                <td className={rowClass}>{item.dumperId}</td>
                <td className={rowClass}>{item.status}</td>
                <td className={rowClass}>{item.currentCapacity}</td>
                <td className={rowClass}>{item.availableCapacity}</td>
                <td className={rowClass}>{item.operatorId}</td>
                <td className={rowClass}>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
