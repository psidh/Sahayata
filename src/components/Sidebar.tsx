'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import axios from 'axios';
import '../app/styles.css';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go';
import { IoMapOutline } from 'react-icons/io5';
import { GoSearch } from 'react-icons/go';
import { VscGraph } from "react-icons/vsc";

export default function Sidebar() {
  const router = useRouter();
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

  const hyperlink = usePathname();


  const linkClass = `w-full px-4 text-lg py-2 rounded-lg 
  transition-colors duration-200 transform text-center 
   my-2  flex items-end justify-between hover:bg-blue-100 `;

  const link  = `w-full px-4 text-lg py-2 rounded-lg 
  transition-colors duration-200 transform text-center 
   my-2  flex items-end justify-between text-white
  bg-blue-500 `
  
  
  
  const chosen1 = (hyperlink === '/dashboard/view' ? link : linkClass);
  const chosen2 = (hyperlink === '/dashboard/add' ? link : linkClass);
  const chosen3 = (hyperlink === '/dashboard/search' ? link : linkClass);
  const chosen4 = (hyperlink === '/dashboard/map' ? link : linkClass);
  const chosen5 = (hyperlink === '/dashboard/analysis' ? link : linkClass);

  return (
    <div>
      <Toaster />
      <div className="w-full px-8 py-6 card rounded-lg h-screen">
        <div className="w-full rounded-md  flex flex-col space-y-2">
          <div className="flex flex-col justify-between">
            <p className="text-2xl font-semibold px-4 my-2">Data</p>
            <hr className=" w-full mb-4" />
            <div>
              <Link href={'/dashboard/view'} className={chosen1}>
                <HiOutlineViewGrid className="w-6 h-6" />
                View All
              </Link>
            </div>
            <div>
              <Link href={'/dashboard/add'} className={chosen2}>
                <GoPlus className="w-6 h-6" />
                Add record
              </Link>
            </div>
            <Link href={'/dashboard/search'} className={chosen3}>
              <GoSearch className="w-6 h-6" />
              Search a record
            </Link>
          </div>
          <Link href={'/dashboard/map'} className={chosen4}>
            <IoMapOutline className="w-6 h-6" />
            Map
          </Link>
          <Link href={'/dashboard/analysis'} className={chosen5}>
            <VscGraph className="w-6 h-6" />
            Quick Analysis
          </Link>
          <button
            onClick={logout}
            className={`py-2 rounded-xl text-xl hover:bg-red-600 bg-red-500 text-white `}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
