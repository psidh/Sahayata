'use client';
import React, { useEffect, useState } from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const searchTerm = params.id;

  const [responseData, setResponseData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async (searchTerm: string) => {
      try {
        const response = await fetch(`/api/dashboard/${searchTerm}`, {
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

        setResponseData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      {/* Display the fetched data in the div */}
      {responseData ? (
        <div>
          <h1>{responseData.dumperId}</h1>
          <p>Date: {responseData.date}</p>
          <p>Status: {responseData.status}</p>
          <p>Current Capacity: {responseData.currentCapacity}</p>
          <p>Available Capacity: {responseData.availableCapacity}</p>
          <p>Operator ID: {responseData.operatorId}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
