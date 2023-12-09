'use client';
import axios from 'axios';
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function ProfilePage() {
  const router = useRouter();

  const [data, setData] = useState('nothing');

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout successful');
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/users/me');
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className='flex justify-between'>
      <div>
      <Sidebar />
      </div>
      <div></div>
      <div className="flex flex-col space-x-2">
        <button
          onClick={logout}
          className="py-2 px-6 mb-4 border rounded-full transition duration-300
         hover:bg-white hover:text-black"
        >
          Logout
        </button>
        <button
          onClick={getUserDetails}
          className="py-2 px-6 mt-4 border rounded-full transition duration-300
          hover:bg-green "
        >
          Get User Details
        </button>
        <h2 className="py-2 px-6 mt-4 rounded-full bg-blue-500">
          {data === 'nothing' ? (
            'Nothing'
          ) : (
            <Link href={`/dashboard/${data}`} target="_blank">
              {data}
            </Link>
          )}
        </h2>
      </div>
    </div>
  );
}
