"use client";
import Link from "next/link";
import Socialite from "./socialite";

export const navigator = () => {
    return (
    <nav class="bg-white h-[80px] flex flex-col w-full absolute top-0 z-10">
        {/* <div className="md:indent-0 lg:indent-16 absolute lg:bg-red-500 md:bg-red-50">

        </div> */}
        <div class="columns-3 flex w-full border-b-2 border-gray-400">
            <div class="flex flex-col w-full py-4">
                <div className="pb-1">
                    <span className="text-[12px] uppercase hover:font-bold text-gray-500 tracking-wider ms-16">Celebrating 75 Years of spiritual englighment</span>
                </div>
                <div className="flex w-full items-center justify-evenly">
                    <div className="">
                        <Socialite />
                    </div>
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >Our story</Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[120px] nav-button" >As an author</Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >Travels</Link>
                </div>
            </div>
            <div class="bg-black text-white w-1/2 h-full flex flex-col text-center items-center justify-center font-jung px-5 py-4">
                <p className="branding">Simeon</p>
                <small className="brand-context w-full border-y border-white py-1">The Johnson Family Heritage</small>
            </div>
            <div class="flex flex-col w-full py-4 items-center justify-center h-full">
                <div className="flex w-full items-center justify-evenly pt-5">
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >LifeStyle</Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >Auctions</Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >Contents</Link>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default navigator