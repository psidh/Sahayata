import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className="bg-white p-10 backdrop-blur-md bg-opacity-20 flex justify-between">
      <div className="flex justify-between">
        <Image src={'/azadi.png'} width={50} height={75} alt="azadi logo" />
        <Image src={'/gl.png'} width={50} height={75} alt="g20 logo" />
      </div>
      <div>
        <Link href={'/about'}></Link>
        <Link href={'/contact'}></Link>
        <Link href={'/login'}></Link>
        <Link href={'/signup'} className=""></Link>
      </div>
    </div>
  );
}
