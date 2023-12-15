"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { AiOutlineMenu } from "react-icons/ai";
import { RiHome2Line } from "react-icons/ri";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const linkClass  
  =`py-1 rounded-full bg-blue-800 px-6 text-white border-2 hover:text-black
    hover:bg-white border-blue-800 transition duration-300`

  const normal ='text-md hover:text-[#1900ff] mx-4 my-2 md:m-0';

  return (
    <div>
      <div className=" bg-white p-6 backdrop-blur-md bg-opacity-20 flex justify-between">
        <div className='flex justify-between items-center space-x-8'>
        <img src="/azadi.png" alt="" className='w-20 h-auto'/>
        <img src="/gl.png" alt="" className='w-20 h-auto'/>
        </div>
        <div className="space-x-8 hidden lg:flex justify-between items-center">
          <Link href={'/'} className={normal}>Home</Link>
          <Link href={'/about'} className={normal}>About</Link>
          <Link href={'/contact'} className={normal}>Contact</Link>          
          <Link href={'/dashboard/data'} className={linkClass}>Dashboard</Link>
          <Link href={'/login'} className={linkClass}>Login</Link>
          <Link href={'/signup'} className={linkClass}>SignUp</Link>     
        </div>
        <AiOutlineMenu onClick={toggleNav}  className="flex lg:hidden w-6 h-6 md:w-12 md:h-12 cursor-pointer"/>
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="flex flex-col lg:hidden ">
          <Link href={'/'} className={normal}>Home</Link>
          <Link href={'/about'} className={normal}>About</Link>
          <Link href={'/contact'} className={normal}>Contact</Link>
          <Link href={'/dashboard'} className={normal}>Dashboard</Link>
          <Link href={'/login'} className={normal}>Login</Link>
          <Link href={'/signup'} className={normal}>SignUp</Link>    
        </div>
      )}
    </div>
  );
}
