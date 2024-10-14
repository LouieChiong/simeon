import './globals.scss'
import Socialites from "./components/socialite";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center h-screen relative main-page">
        <div className='w-full h-full absolute flex flex-col items-start justify-center'>
          <div className='flex flex-col mobile:items-center tablet:items-center laptop:items-start justify-center w-full h-full laptop:px-32 tablet:p-0'>
            <span className='text-white section-title mobile:text-[60px] tablet:text-[80px] laptop:text-[80px]' data-aos="fade-up" data-aos-delay="100">Simeon Jonhson</span>
            <div className='flex flex-col mobile:items-center tablet:items-center laptop:items-start justify-center gap-y-4'>
              <span className='text-white welcome-text uppercase border-y-2 '>The Johnson Family Heritage</span>
                <Socialites color="fill-white"/>
                <Link href={'welcome'} className='py-2 w-48 rounded-xl text-center bg-red-800 text-white tracking-widest font-semibold'>Proceed</Link>
            </div>
          </div>
        </div>
    </div>
  );
}