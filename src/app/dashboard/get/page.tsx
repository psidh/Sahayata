'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const router = useRouter();

  const handleSearch = (event :any) => {
    event.preventDefault();
    router.push(`/dashboard/get/${searchTerm}`);
  }
  
  
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-[50%]">
        <label
          htmlFor="searchInput"
          className="block text-sm font-medium text-gray-700"
        >
          Search:
        </label>
        <form>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              id="searchInput"
              className="px-4 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
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
        {}
      </div>
    </div>
  );
}
