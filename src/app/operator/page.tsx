'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserAlt } from 'react-icons/fa';
import { GoPlus, GoSearch } from 'react-icons/go';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { IoMapOutline } from 'react-icons/io5';
import { VscGraph } from 'react-icons/vsc';
import { IoNotifications } from 'react-icons/io5';

export default function page() {
  const hyperlink = usePathname();

  const linkClass = `w-full px-4 text-lg py-2 rounded-lg 
  transition-colors duration-200 transform text-center 
   my-2  flex items-end justify-between hover:bg-blue-100 `;

  const link = `w-full px-4 text-lg py-2 rounded-lg 
  transition-colors duration-200 transform text-center 
   my-2  flex items-end justify-between text-white
  bg-blue-500 `;

  const chosen1 = hyperlink === '/dashboard/view' ? link : linkClass;
  const chosen2 = hyperlink === '/dashboard/add' ? link : linkClass;
  const chosen3 = hyperlink === '/dashboard/search' ? link : linkClass;
  const chosen4 = hyperlink === '/dashboard/map' ? link : linkClass;
  const chosen5 = hyperlink === '/dashboard/analysis' ? link : linkClass;
  const chosen6 = hyperlink === '/dashboard/dumper' ? link : linkClass;
  const chosen7 =
    hyperlink === '/dashboard/operator-analysis' ? link : linkClass;
  return (
    <div className="flex justify-between">
      <div className="w-[25%]">
        <div className="w-full px-8 py-6 card rounded-lg">
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
                  Offline Sync
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
            <Link href={'/dashboard/operator-analysis'} className={chosen7}>
              <VscGraph className="w-6 h-6" />
              Operator Analysis
            </Link>
            <Link href={'/dashboard/profile'} className={chosen6}>
              <FaUserAlt className="w-6 h-6" />
              User Profile
            </Link>

            <button
              className={`py-2 rounded-xl text-xl hover:bg-red-600 bg-red-500 text-white `}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="w-[75]">
      <IoNotifications className='w-16 h-16' />
        <h1 className='text-3xl '> Your Task has been completed. Next Laucnh</h1>
      </div>
    </div>
  );
}
