'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import TableDataItem from '../../../utils/table';
import { toast, Toaster } from 'react-hot-toast';

const initialTableState: TableDataItem = {
  slNo: 0,
  date: '',
  dumperId: '',
  status: '',
  currentCapacity: 0,
  availableCapacity: 0,
  operatorId: '',
};

export default function Table(): JSX.Element {
  const [table, setTable] = useState<TableDataItem>(initialTableState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTable({
      ...table,
      [e.target.name]: e.target.value,
    });
  };

  const handlePushData = async () => {
    try {
      const response = await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...table }),
      });

      const responseData = await response.json(); // Parse response JSON

      console.log('Response:', response);

      if (response.ok) {
        toast.success('Pushed Data', {
          style: {
            width: '100px', // Set the width of the toast
            height: '100px', // Set the height of the toast
            top: '50%', // Center the toast vertically
            left: '50%', // Center the toast horizontally
            transform: 'translate(-50%, -50%)', // Adjust the position to center
          },
        });
        setTable(initialTableState);
      } else {
        console.error('Server error:', responseData.error); // Log server error
        console.error('Failed to push data to the server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-between">
      <div>
        <Sidebar />
      </div>
      <div className='w-[70%] mr-8'>
        <h1 className="text-5xl text-blue-800 font-semibold mx-4 mt-8 my-16 flex-grow ">Enter Record: </h1>
        {/* <p className="text-xl  font-semibold mx-4 mt-8 my-16 flex-grow ">Enter the details of the dumper</p> */}

        {/* Input form */}
        <div className="mx-4 my-8 space-y-4 ">
          <label className="flex flex-col">
            SL.NO:
            <input
              type="number"
              name="slNo"
              value={table.slNo}
              onChange={handleInputChange}
              className="p-2 rounded-md border border-[#969696]"
            />
          </label>
          <label className="flex flex-col">
            DATE:
            <input
              type="text"
              name="date"
              value={table.date}
              onChange={handleInputChange}
              className="p-2 rounded-md border border-[#969696]"
            />
          </label>
          <label className="flex flex-col">
            DUMPER ID:
            <input
              type="text"
              name="dumperId"
              value={table.dumperId}
              onChange={handleInputChange}
              className="p-2 rounded-md border border-[#969696]"
            />
          </label>
          <label className="flex flex-col">
            STATUS:
            <input
              type="text"
              name="status"
              value={table.status}
              onChange={handleInputChange}
              className="p-2 rounded-md border border-[#969696]"
            />
          </label>
          <label className="flex flex-col">
            CURRENT CAPACITY:
            <input
              type="number"
              name="currentCapacity"
              value={table.currentCapacity}
              onChange={handleInputChange}
              className="p-2 rounded-md border border-[#969696]"
            />
          </label>
          <label className="flex flex-col">
            AVAILABLE CAPACITY:
            <input
              type="number"
              name="availableCapacity"
              value={table.availableCapacity}
              onChange={handleInputChange}
              className="p-2 rounded-md border border-[#969696]"
            />
          </label>
          <label className="flex flex-col">
            OPERATOR ID:
            <input
              type="text"
              name="operatorId"
              value={table.operatorId}
              onChange={handleInputChange}
              className="p-2 rounded-md border border-[#969696]"
            />
          </label>

          <button
            onClick={async () => {
              await handlePushData();
            }}
            className={`py-2 px-8 my-6 border text-center rounded-md ${
              table.slNo > 0
                ? 'bg-blue-600 text-white hover:bg-blue-800'
                : 'text-gray-500 bg-gray-200'
            } transition duration-300`}
            disabled={table.slNo <= 0}
          >
            Push Data
          </button>
        </div>
      </div>
    </div>
  );
}
