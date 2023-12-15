'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>([]);

  const router = useRouter();

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
      setSearchResults(data);
      console.log('Data:', data);
    } catch (error) {
      console.error('Client error:', error);
    }
    // router.push(`/dashboard/get/${searchTerm}`);
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
              {searchResults.map((result: any, index: any) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {result.dumperId}
                      </dt>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {result.currentCapacity}
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {result.description}
                      </dd>
                    </dl>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
