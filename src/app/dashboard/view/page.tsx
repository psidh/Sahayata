'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TableDataItem from '../../../utils/table';

export default function Table(): JSX.Element {
  const [tableData, setTableData] = useState<TableDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const headClass = 'py-2 px-4 border font-sans flex-grow text-center';
  const rowClass = 'py-2 px-4 border items-center flex-grow text-center';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/dashboard/`, {
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
        setLoading(false);
        console.log('Response:', data);
        setTableData(data);
      } catch (error) {
        setLoading(false);
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-[25%]">
        <Sidebar />
      </div>

      <div className="w-[75%]">
        <h1 className="block text-3xl text-black font-semibold mr-4 mt-8 mb-8  flex-grow ">
          View All Records
          <hr className="border border-gray-100 mt-1 mb-2" />
        </h1>

        {loading === true ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>
        ) : (
          <table className="mx-4 my-8 flex-grow">
            <thead className="bg-blue-200 flex-grow">
              <tr>
                <th className={headClass}>DATE</th>
                <th className={headClass}>DUMPER ID</th>
                <th className={headClass}>STATUS (VOLUME)</th>
                <th className={headClass}>CARRYING WEIGHT (LOAD SENSOR)</th>
                <th className={headClass}>TOTAL WEIGHT</th>
                <th className={headClass}>OPERATOR ID</th>
                <th className={headClass}>TIME (LOADED)</th>
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
                  {item.status === 'filling' ? (
                    <td className="px-6 py-2 my-1 flex space-x-3 bg-yellow-100">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full border-collapse"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    </td>
                  ) : item.status === 'full' ? (
                    <td className="px-6 py-2 my-1 border bg-red-500 text-white">
                      FULL
                    </td>
                  ) : item.status === 'empty' ? (
                    <td className="px-6 py-2 my-1 border bg-green-200">
                      EMPTY <span className='px-2 py-1 rounded-lg bg-green-400'>Ready</span> 
                    </td>
                  ) : (
                    <td className="px-6 py-2 my-1 border">Unknown Status</td>
                  )}

                  <td className={rowClass}>{item.carryingCapacity}</td>
                  <td className={rowClass}>{item.availableCapacity}</td>
                  <td className={rowClass}>{item.operatorId}</td>
                  <td className={rowClass}>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
