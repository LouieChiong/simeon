"use client";
import Link from "next/link";
import Socialite from "./socialite";

export const navigator = () => {
    return (
    <nav class="bg-white h-[105px] flex-col w-full absolute top-0 z-10 tablet:hidden laptop:flex">
        <div class="columns-3 flex w-full  border-b-2 border-gray-400">
            <div class="flex flex-col w-full py-4">
                <div className="pb-1">
                    <span className="text-[12px] uppercase hover:font-bold text-gray-500 tracking-wider ms-10">Celebrating 75 Years of spiritual englighment</span>
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
            <div class="w-1/2 flex justify-center">
                {/* <p className="branding">Simeon</p> */}
                <img src="/images/Logo.jpg" alt="" width="100"/>
                {/* <small className="brand-context w-full border-y border-white py-1">The Johnson Family Heritage</small> */}
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