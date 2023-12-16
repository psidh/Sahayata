'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TableDataItem from '../../../utils/table';

export default function Table(): JSX.Element {
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const headClass = 'py-2 px-4 border font-sans flex-grow text-center';
  const rowClass = 'py-2 px-4 border items-center flex-grow text-center';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/dashboard/get`, {
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
    <div className="flex justify-between">
      <div className="w-[25%]">
        <Sidebar />
      </div>

      <div className="w-[75%]">
        <h1 className="text-6xl font-semibold mx-4 mt-8 my-16 flex-grow ">
          View all records
        </h1>
        <table className="mx-4 my-8 flex-grow">
          <thead className="bg-blue-200 flex-grow">
            <tr>
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
                className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
              >
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
