"use client";
import Link from "next/link";
import Socialite from "./socialite";
import Image from "next/image";
import HamburgerButton from "./hamburgerButton";

export const navigator = () => {


    return (
    <nav className="bg-white h-[105px] flex-col w-full absolute top-0 z-10 ">
        <div className="columns-3 flex w-full  border-b-2 border-gray-400 tablet:hidden laptop:flex">
            <div className="flex flex-col w-full py-4">
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
            <div className="w-1/2 flex justify-center">
                <Image src="/images/Logo.jpg" alt="" width={100} height={100} />
            </div>
            <div className="flex flex-col w-full py-4 items-center justify-center h-full">
                <div className="flex w-full items-center justify-evenly pt-5">
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >LifeStyle</Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >Auctions</Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >Contents</Link>
                </div>
            </div>
        </div>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 tablet:flex laptop:hidden border-b-2 border-gray-200">
            <div>
                <HamburgerButton />
            </div>
            <div>
                <Image src="/images/Logo.jpg" alt="" width={100} height={100} />
            </div>
            <div> </div>

            <div className="hidden w-full md:block md:w-auto border-t-2" id="drop-down-navbar">
                <ul className="flex flex-col font-medium mt-4 rounded-lg gap-y-3 bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:bg-transparent md:text-blue-700" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default navigator