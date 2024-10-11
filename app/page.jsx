import './globals.scss'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center h-screen relative">
      <Image src="/images/image_3.jpg" height={5000} width={5000} alt="" className="w-full h-full object-cover" />
        <div className='w-full h-full absolute flex flex-col items-center justify-center'>
          <h1 className='text-white welcome-text'>Thank You for Visiting</h1>
          <Link href={'welcome'} className='py-1 w-44 rounded-xl text-center bg-red-800 text-white tracking-widest'>Proceed</Link>
        </div>
    </div>
  );
}