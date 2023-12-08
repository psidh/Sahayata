import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  const linkClass  
  =`py-1 rounded-full bg-blue-800 px-6 text-white border-2 hover:text-black
    hover:bg-white border-blue-800 transition duration-300`
  return (
    <div className="bg-white p-10 backdrop-blur-md bg-opacity-20 flex justify-between">
      <div className="flex justify-between items-center space-x-8">
        <Image src={'/azadi.png'} width={100} height={100} alt="azadi logo" />
        <Image src={'/gl.png'} width={100} height={100} alt="g20 logo" />
      </div>
      <div className='flex justify-between items-center space-x-8'>
        <Link href={'/'} className='text-lg hover:text-[#1900ff]'>Home</Link>
        <Link href={'/about'} className='text-lg hover:text-[#1900ff]'>About</Link>
        <Link href={'/contact'} className='text-lg hover:text-[#1900ff]'>Contact</Link>
        <Link href={'/login'} className={linkClass}>Login</Link>
        <Link href={'/signup'} className={linkClass}>SignUp</Link>
      </div>
    </div>
  );
}
