'use client';
import Link from 'next/link';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

export default function Sidebar() {
  const linkClass = `w-full md:px-20 text-xl md:py-4 rounded-lg 
  text-white font-semibold transition-colors duration-200 transform text-center
  `;

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const router = useRouter();
  const [data, setData] = useState('nothing');

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout successful');
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

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
    <div>
      <IoIosMenu  onClick={toggleSidebar} className='w-6 h-6 hover:opacity-70 transition duration-200 mx-8 cursor-pointer'/>
      <Toaster/>
      <div className={`flex justify-between ml-4 mb-8`}> 
      <div className={`w-full rounded-md p-2 md:p-8  flex flex-row items-center md:flex-col md:space-y-2 ${isSidebarVisible ? '' : 'hidden'}` }>
        <Link href={'/dashboard'} className={`${linkClass} hover:bg-blue-600 bg-blue-500`}>Home</Link>
        <Link href={'/dashboard/data'} className={`${linkClass} hover:bg-blue-600 bg-blue-500`}>View Record</Link>
        <Link href={'/dashboard/new'} className={`${linkClass} hover:bg-blue-600 bg-blue-500`}>Add Record</Link>
        <Link href={'/dashboard/get'} className={`${linkClass} hover:bg-blue-600 bg-blue-500`}>Get Record</Link>
        <Link href={'/dashboard/map'} className={`${linkClass} hover:bg-blue-600 bg-blue-500`}>Map</Link>
        <button onClick={getUserDetails} className={`${linkClass} hover:bg-yellow-600 bg-yellow-500 invisible md:visible`}>Profile</button>
        <h2 className={`${linkClass} hover:bg-red-600 bg-red-500  invisible md:visible`}>
          {data === 'nothing' ? (
            '🔒 Encrypted'
          ) : (
            <Link href={`/dashboard/${data}`} target="_blank">
              🔓 Unlocked
            </Link>
          )}
        </h2>
        <button onClick={logout} className={`${linkClass} hover:bg-red-600 bg-red-500  invisible md:visible`}>Logout</button>
      </div>
      </div>
    </div>
  )
}
