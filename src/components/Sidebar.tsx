'use client';
import Link from 'next/link';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

export default function Sidebar() {
  const linkClass = `w-full md:px-28 md:py-6 rounded-lg bg-blue-200
   text-gray-700 transition-colors duration-200 transform text-center
  hover:bg-gray-100 hover:text-gray-900`;

  const logClass = `w-full md:px-28 md:py-6 rounded-lg bg-red-500
  transition-colors duration-200 transform text-center
  hover:bg-red-400 text-white`;

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
    <div >
      
      <IoIosMenu  onClick={toggleSidebar} className='w-12 h-12 mx-8 cursor-pointer'/>
      <Toaster/> 

      <div className={`flex justify-between mx-4 my-8`}> 
      <div className={`w-full rounded-md p-2 md:p-8 bg-blue-300/50 flex flex-row items-center md:flex-col md:space-y-2 ${isSidebarVisible ? '' : 'hidden'}` }>
        
        <Link href={'/dashboard'} className={linkClass}>Home</Link>
        <Link href={'/dashboard/data'} className={linkClass}>Data</Link>
        <Link href={'/dashboard/map'} className={linkClass}>Map</Link>
        <button onClick={getUserDetails} className={`${logClass} hidden md:flex`}>🔒 </button>
        <h2 className={`${logClass} hidden md:flex`}>
          {data === 'nothing' ? (
            '🔒 Encrypted'
          ) : (
            <Link href={`/dashboard/${data}`} target="_blank">
              🔓 Click to 
            </Link>
          )}
        </h2>
        <button onClick={logout} className={`${logClass} hidden md:flex`}>Logout</button>
      </div>
      </div>
    </div>
  )
}
