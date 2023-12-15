'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import TableDataItem from '../../../utils/table';
import { toast, Toaster } from 'react-hot-toast';

const initialState = {
  date: '',
  dumperId: '',
  status: '',
  currentCapacity: 0,
  availableCapacity: 0,
  operatorId: '',
  time: '',
};
export default function Table(): JSX.Element {
  const [table, setTable] = useState<TableDataItem>(initialState);

  const handlePushData = async () => {
    try {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(table),
      });

      const responseData = await response.json(); // Parse response JSON

      console.log('Response:', response);

      if (response.ok) {
        toast.success('Pushed Data');
        setTable(initialState);
      } else {
        console.error('Server error:', responseData.error); // Log server error
        console.error('Failed to push data to the server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTable({
      ...table,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-between">
      <Toaster />
      <div>
        <Sidebar />
      </div>
      <div className="w-[70%] mr-8 flex-grow ">
        <h1 className="text-5xl text-blue-800 font-semibold mx-4 mt-8 my-16 flex-grow ">
          Enter Record:{' '}
        </h1>
        {/* <p className="text-xl  font-semibold mx-4 mt-8 my-16 flex-grow ">Enter the details of the dumper</p> */}

        {/* Input form */}
        <div className="mx-4 my-8 flex flex-col">
          <div className="space-y-4 flex flex-col justify-between w-[70%]">
            <div className="flex items-center justify-between">
              <label className="flex items-center text-xl font-semibold text-blue-800">
                DATE:
              </label>
              <div>
                <input
                  type="text"
                  name="date"
                  placeholder="Enter DATE"
                  value={table.date}
                  onChange={handleInputChange}
                  className="ml-2 p-2 rounded-md border border-[#969696]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-xl font-semibold text-blue-800">
                DUMPER ID:
              </label>
              <div>
                <input
                  type="text"
                  name="dumperId"
                  placeholder="Enter DUMPER ID"
                  value={table.dumperId}
                  onChange={handleInputChange}
                  className="ml-2 p-2 rounded-md border border-[#969696]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-xl font-semibold text-blue-800">
                STATUS:
              </label>
              <div>
                <input
                  type="text"
                  name="status"
                  placeholder="Enter STATUS"
                  value={table.status}
                  onChange={handleInputChange}
                  className="ml-2 p-2 rounded-md border border-[#969696]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-xl font-semibold text-blue-800">
                CURRENT CAPACITY:
              </label>
              <div>
                <input
                  type="number"
                  name="currentCapacity"
                  placeholder="Enter CURRENT CAPACITY"
                  value={table.currentCapacity}
                  onChange={handleInputChange}
                  className="ml-2 p-2 rounded-md border border-[#969696]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-xl font-semibold text-blue-800">
                AVAILABLE CAPACITY:
              </label>
              <div>
                <input
                  type="number"
                  name="availableCapacity"
                  placeholder="Enter AVAILABLE CAPACITY"
                  value={table.availableCapacity}
                  onChange={handleInputChange}
                  className="ml-2 p-2 rounded-md border border-[#969696]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-xl font-semibold text-blue-800">
                OPERATOR ID:
              </label>
              <div>
                <input
                  type="text"
                  name="operatorId"
                  placeholder="Enter OPERATOR ID"
                  value={table.operatorId}
                  onChange={handleInputChange}
                  className="ml-2 p-2 rounded-md border border-[#969696]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-xl font-semibold text-blue-800">
                TIME:
              </label>
              <div>
                <input
                  type="text"
                  name="time"
                  placeholder="Enter TIME"
                  value={table.time}
                  onChange={handleInputChange}
                  className="ml-2 p-2 rounded-md border border-[#969696]"
                />
              </div>
            </div>
          </div>

          <button
            onClick={async () => {
              await handlePushData();
            }}
            className="py-2 px-8 my-6 border  text-center rounded-md bg-blue-600 text-white hover:bg-blue-800"
            // }}
            // className={`py-2 px-8 my-6 border  text-center rounded-md ${
            //   table.slNo > 0
            //     ? 'bg-blue-600 text-white hover:bg-blue-800'
            //     : 'text-gray-500 bg-gray-200'
            // } transition duration-300`}
            // disabled={table.slNo <= 0}
          >
            Push Data
          </button>
        </div>
      </div>
    </div>
  );
}
