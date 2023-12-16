'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Popup from '@/components/Pop';

// Import necessary modules

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [state, setState] = useState<Boolean>(false);

  const handleSearch = async (event: any) => {
    event.preventDefault();
    setSearchResults([]);
    try {
      const response = await fetch(`/api/dashboard?id=${searchTerm}`, {
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
      setState(true);
      setSearchResults(data);
    } catch (error) {
      console.error('Client error:', error);
    }
  };

  const openPopup = (item: any) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setShowPopup(false);
  };

  return (
    <div className="flex justify-between">
      <div className='w-[25%]'>
        <Sidebar />
      </div>
      <div className="w-[75%] mr-8 flex-shrink-0">
        <label
          htmlFor="searchInput"
          className="block text-5xl text-black font-semibold mx-4 mt-8 my-16 flex-grow "
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

        {searchResults.length > 0 && (
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-gray-700 mx-4 mt-8">
              Search Results
            </h2>
            <hr className="border border-gray-100  my-4" />
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {searchResults.map((item: any, index: number) => (
                <div className="rounded-lg overflow-hidden my-6 shadow-xl border border-gray-200 p-6" key={index}>
                  <h1 className="text-2xl font-semibold mb-4">
                    DumperId {item.dumperId}
                  </h1>
                  <h2 className='text-xl font-normal mb-4'>
                    Date: {item.date}                  
                  </h2>
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                      onClick={() => openPopup(item)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(searchResults.length === 0 && state === true )&& (
          <div className="mt-4 text-red-500 mx-4">
            No results found. Please try again.
          </div>
        )}

        {showPopup && (
          <Popup onClose={closePopup} item={selectedItem} />
        )}
      </div>
    </div>
  );
}
