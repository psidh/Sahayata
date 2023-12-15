'use client';
import React, { useEffect, useState } from 'react';
import Popup from '@/components/Pop';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const searchTerm = id;

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
        console.log('Data:', data);
        setResponseData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(searchTerm);
  }, [searchTerm]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null); // Assuming you have a state to track the selected item

  const openPopup = (item: any) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setShowPopup(!showPopup);
  };

  return (
    <div className="max-w-xl mx-auto  mt-10">
      {/* Display the fetched data in the div */}
      {responseData ? (
        responseData.map((item: any, index: number) => (
          <div className="rounded-lg overflow-hidden my-6 shadow-xl border border-gray-200 p-6">
            <div key={index} className="border-gray-200">
              <h1 className="text-3xl font-bold mb-4">
                DumperID: {item.dumperId}
              </h1>

              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  onClick={() => openPopup(item)}
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Render the popup if showPopup is true */}
            {showPopup && <Popup onClose={closePopup} item={selectedItem} />}
          </div>
        ))
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}
    </div>
  );
}
