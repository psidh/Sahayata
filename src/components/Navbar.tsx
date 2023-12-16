import Link from 'next/link';
export default function Navbar() {
  const linkClass = `py-1 rounded-full bg-blue-800 px-6 text-white border-2 hover:text-black
    hover:bg-white border-blue-800 transition duration-300 text-lg font-normal`;

  const normal = 'text-lg font-normal hover:text-[#1900ff] mx-4 my-2 md:m-0';

  return (
    <div>
      <div className=" bg-white px-6 backdrop-blur-md bg-opacity-20 flex justify-between py-8">
        <div className="flex justify-between items-center space-x-16">
          <img src="/azadi.png" alt="" className="w-20 h-auto ml-5" />
          <img src="/gl.png" alt="" className="w-20 h-auto" />
        </div>
        <div className="space-x-8 hidden lg:flex justify-between items-center">
          <Link href={'/'} className={normal}>
            Home
          </Link>
          <Link href={'/about'} className={normal}>
            About
          </Link>
          <Link href={'/contact'} className={normal}>
            Contact
          </Link>
          <Link href={'/dashboard/view'} className={linkClass}>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
