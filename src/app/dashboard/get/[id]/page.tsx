'use client';
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function GetData() {
  const [dumperId, setDumperId] = useState('');
  const [result, setResult] = useState('null');
  const [error, setError] = useState('null');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDumperId(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dumperId }),
      });

      const Data = await response.json(); // Parse response JSON

      console.log('Response:', response);

      if (response.ok) {
        toast.success('Fetched Data', {
          style: {
            width: '100px', // Set the width of the toast
            height: '100px', // Set the height of the toast
            top: '50%', // Center the toast vertically
            left: '50%', // Center the toast horizontally
            transform: 'translate(-50%, -50%)', // Adjust the position to center
          },
        });
        setResult(Data);
      } else {
        console.error('Server error:', Data.error); // Log server error
        console.error('Failed to fetch data from the server');
      }
    } catch (error: any) {
      console.error('Error:', error);

    }
  };

  // const {TableData} = fetchData();

  return (
    <div className="flex">
      <Toaster />
      <div>
        <Sidebar />
      </div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Get Data by Dumper ID</h1>
        <div className="flex items-center mb-4">
          <label className="mr-4">
            Dumper ID:
            <input
              type="text"
              value={dumperId}
              onChange={handleInputChange}
              className="p-2 border rounded-md"
            />
          </label>
          <button
            onClick={fetchData}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {result && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Search Result:</h2>
            <pre className="bg-gray-100 p-4 rounded-md">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
