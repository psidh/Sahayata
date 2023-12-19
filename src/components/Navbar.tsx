'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const link = usePathname();

  const linkClass = `py-1 rounded-full bg-black px-6 text-white border-2 border-black hover:text-black
    hover:bg-white  transition duration-300 text-lg font-normal`;

  const linkHClass = `py-1 rounded-full bg-blue-500 px-6 text-white border-2 hover:text-blue-500
  hover:bg-white border-blue-500 transition duration-300 text-lg font-normal`;

  const normal = 'text-lg font-normal hover:text-[#1900ff] mx-4 my-2 md:m-0';
  const select = `text-lg font-normal text-blue-600 mx-4 my-2 md:m-0  px-4 py-2   
  border border-l-0 border-r-0 border-t-0 border-b-4 border-blue-500 font-semibold underline-blue-500`;

  const chosen = link === '/' ? select : normal;
  const chosen2 = link === '/about' ? select : normal;
  const chosen3 = link === '/support' ? select : normal;
  const chosen4 =
    link === '/dashboard/view' ||
    link === '/dashboard/search' ||
    link === '/dashboard/add' ||
    link === '/dashboard/map'
      ? linkHClass
      : linkClass;
  const chosen5 = link === '/faqs' ? select : normal;
  const chosen6 = link === '/privacy-policy' ? select : normal;

  return (
    <div>
      <div className=" bg-white px-6 backdrop-blur-md bg-opacity-20 flex justify-between py-8">
        <div className="flex justify-between items-center space-x-6 pl-8">
          <img src="/coal.svg" alt="" className="w-20 h-20" />
          <img src="/sih.webp" alt="" className="w-14 h-14" />
          <img src="/azadi.png" alt="" className="w-20 h-auto" />
          <img src="/gl.png" alt="" className="w-20 h-auto" />
        </div>
        <div className="space-x-8 flex justify-between items-center">
          <Link href={'/'} className={chosen}>
            Home
          </Link>
          <Link href={'/about'} className={chosen2}>
            About
          </Link>
          <Link href={'/support'} className={chosen3}>
            Support
          </Link>
          <Link href={'/faqs'} className={chosen5}>
            FAQs
          </Link>
          <Link href={'/privacy-policy'} className={chosen6}>
            Privacy Policy
          </Link>
          <Link href={'/dashboard/view'} className={chosen4}>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
