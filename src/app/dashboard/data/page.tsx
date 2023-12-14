'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { useRouter, useSearchParams } from 'next/navigation';

interface TableDataItem {
  slNo: number;
  date: string;
  dumperId: string;
  status: string;
  currentCapacity: number;
  availableCapacity: number;
  operatorId: string;
  time: string; // Added time property to the interface
}

export default function Table(): JSX.Element {
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const headClass = 'py-2 px-4 border-b font-sans flex-grow';
  const rowClass = 'py-2 px-4 border';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/dashboard`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error('Server error:', response);
          console.error('Failed to fetch data from the server');
          return;
        }

        const data = await response.json();
        console.log('Response:', data);
        setTableData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); 
      

  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>

      <div className="">
        <h1 className="text-6xl text-blue-800 font-semibold mx-4 mt-8 my-16 flex-grow ">
          Records
        </h1>
        <table className="mx-4 my-8 flex-grow">
          <thead className="bg-gray-200  flex-grow">
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
