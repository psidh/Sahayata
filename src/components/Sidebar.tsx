import Link from 'next/link';
import axios from 'axios';
import '../app/styles.css';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go';
import { IoMapOutline } from 'react-icons/io5';
import { GoSearch } from 'react-icons/go';

export default function Sidebar() {
  const linkClass = `w-full px-10 text-xl py-2 rounded-lg 
    transition-colors duration-200 transform text-center 
     text-black hover:text-white
  `;
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

  return (
    <div>
      <Toaster />
      <div className="w-full px-8 py-6 card rounded-lg h-screen">
        <div className="w-full rounded-md  flex flex-col space-y-2">
          <div className="flex flex-col justify-between">
            <p className="text-2xl my-2">Data</p>
            <hr className=" w-full mb-4" />
            <div>
              <Link href={'/dashboard/view'} className="link  hover:text-white">
                <HiOutlineViewGrid className="w-6 h-6" />
                <p>View All</p>
              </Link>
            </div>
            <div>
              <Link href={'/dashboard/add'} className="link hover:text-white">
                <GoPlus className="w-6 h-6" />
                <p>Add record</p>
              </Link>
            </div>
            <Link href={'/dashboard/search'} className="link hover:text-white">
              <GoSearch className="w-6 h-6" />
              Search a record
            </Link>
          </div>
          <Link href={'/dashboard/map'} className="link hover:text-white">
            <IoMapOutline className="w-6 h-6" />
            Map
          </Link>
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
