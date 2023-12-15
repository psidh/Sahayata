'use client';
import Link from 'next/link';
import axios from 'axios';
import '../app/styles.css';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { RiHome2Line } from 'react-icons/ri';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { PiTarget } from 'react-icons/pi';
import { GoPlus } from 'react-icons/go';
import { IoMapOutline } from 'react-icons/io5';

export default function Sidebar() {
  const linkClass = `w-full px-10 text-xl py-2 rounded-lg 
    transition-colors duration-200 transform text-center 
     text-black hover:text-white
  `;
  const buttonClass =`w-full px-8 text-xl py-2 rounded-lg 
  transition-colors duration-200 transform text-center 
  text-black my-2  flex items-end justify-between  
  hover:bg-blue-500 `
  

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
    <div className="h-screen mr-5">
      <div className="">
        <IoIosMenu
          onClick={toggleSidebar}
          className="w-8 h-8 hover:opacity-70 transition duration-200  cursor-pointer"
        />
      </div>
      <Toaster />
      <div className={isSidebarVisible ? `px-12 py-6 card rounded-lg h-screen` : `p-0  h-screen`}>
        <div className={`w-full rounded-md  flex flex-col space-y-2 ${isSidebarVisible ? 'px-0' : 'hidden'}`}
        >
          <Link href={'/dashboard'} className="link hover:text-white">
            <RiHome2Line className="w-6 h-6" />
            <p>Home</p>
          </Link>
          <div className="flex flex-col justify-between">
            <p className="text-2xl my-2">Records </p>
            <hr className=" w-full mb-4" />
            <div>
              <Link href={'/dashboard/data'} className="link  hover:text-white">
                <HiOutlineViewGrid className="w-6 h-6" />
                <p>View</p>
              </Link>
            </div>
            <div>
              <Link href={'/dashboard/new'} className="link hover:text-white">
                <GoPlus className="w-6 h-6" />
                <p>Add</p>
              </Link>
            </div>
            <Link href={'/dashboard/get'} className="link hover:text-white">
              <PiTarget className="w-6 h-6" />
              Get
            </Link>
          </div>
          <Link href={'/dashboard/map'} className="link hover:text-white">
            <IoMapOutline className="w-6 h-6" />
            Map
          </Link>
          <div className='pt-6 pb-4'>
          <p className="text-2xl my-2">User</p>
            <hr className=" w-full mb-4" />
            <button
              onClick={getUserDetails}
              className={`${buttonClass} hover:text-white`}
            >
              Profile
            </button>
            <h2 className={`${buttonClass} hover:text-white`}>
              {data === 'nothing' ? (
                '🔒 Encrypted'
              ) : (
                <Link href={`/dashboard/${data}`} target="_blank" className='cursor-pointer' >
                  🔓 Unlocked
                </Link>
              )}
            </h2>
          </div>
          <button
            onClick={logout}
            className={`${linkClass} hover:bg-red-600 bg-red-500  text-white invisible md:visible`}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
