'use client';
import React, { useEffect, useState } from 'react';
import Popup from '@/components/Pop';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';

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
    <div className="flex justify-between">
      <div className='w-[30%]'>
        <Sidebar />
      </div>

      <div className="flex w-[70%] flex-col mr-8 flex-shrink-0">
        {/* <div>
          <label
            htmlFor="searchInput"
            className="block text-5xl text-gray-700 font-semibold mx-4 mt-8 my-16 flex-grow "
          >
            Search
            <hr className="border border-gray-100  my-4" />
          </label>

          <form>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                id="searchInput"
                className="px-4 border-indigo-500 focus:ring-indigo-500 flex-1 block w-full rounded-md sm:text-sm "
                placeholder="Enter your search term..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <button
                onClick={handleSearch}
                type="submit"
                className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
            </div>
          </form>
        </div> */}

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
                {showPopup && (
                  <Popup onClose={closePopup} item={selectedItem} />
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
