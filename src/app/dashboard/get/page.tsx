'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Toast, Toaster } from 'react-hot-toast';
import { TEInput } from 'tw-elements-react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const router = useRouter();

  const handleSearch = (event :any) => {
    event.preventDefault();
    router.push(`/dashboard/get/${searchTerm}`);
  }
  
  
  return (
    <div className="flex justify-between">
      <div >
        <Sidebar />
      </div>
      <div  className="w-[70%] mr-8 flex-shrink-0">
        <label
          htmlFor="searchInput"
          className="block text-5xl text-gray-800 font-semibold mx-4 mt-8 my-16 flex-grow "
        >
          Search:
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
      </div>
    </div>
  );
}
