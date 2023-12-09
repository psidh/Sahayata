import Link from 'next/link';

export default function Sidebar() {

  const linkClass = `w-full px-12 py-6 rounded-lg bg-blue-200
   text-gray-700 transition-colors duration-200 transform
  hover:bg-gray-100 hover:text-gray-900`

  return (
    <div className='flex justify-between mx-4 my-8'>
      <div className='w-full rounded-lg p-8 bg-blue-300/50 flex flex-col space-y-2 '>
        <Link href={'/dashboard'} className={linkClass}>Home</Link>
        <Link href={'/dashboard/details'} className={linkClass}>Data</Link>
        <Link href={'/dashboard/map'} className={linkClass}>Map</Link>
        <Link href={'/dashboard'} className={linkClass}>Lorem ipsum</Link>
        <Link href={'/dashboard'} className={linkClass}>Lorem ipsum</Link>
        <Link href={'/dashboard'} className={linkClass}>Lorem ipsum</Link>
      </div>
    </div>
  )
}