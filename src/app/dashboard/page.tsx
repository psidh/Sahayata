'use client'
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import data from '../../data/daily';


export default function Table(): JSX.Element {
  // const [tableData, setTableData] = useState<TableDataItem[]>([]);

  // useEffect(() => {
  //   setTableData(data);
  // }, []);

  // const [pushData, setPushData] = useState({
  //   slNo: 0,
  //   date: 'string',
  //   dumperId: '',
  //   status: '',
  //   currentCapacity: 0,
  //   availableCapacity: 0,
  //   operatorId: ''
  // });
  
  const tableData = data;


  return (
    <div className="flex justify-between">
      <div>
        <Sidebar />
      </div>
      <div>
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



