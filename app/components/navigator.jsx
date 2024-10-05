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
                    <span className="text-[12px] uppercase hover:font-bold text-gray-500 tracking-wider laptop:ms-6 desktop:ms-16">Celebrating 75 Years of spiritual englighment</span>
                </div>
                <div className="flex w-full items-center justify-evenly laptop:gap-x-6 desktop:gap-x-0 laptop:ms-4 desktop:ms-0">
                    <div className="">
                        <Socialite />
                    </div>
                    <Link href="/" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >Our story</Link>
                    <Link href="/books" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[120px] nav-button" >As an author</Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px] nav-button" >Travels</Link>
                </div>
            </div>
            <div className="w-1/2 flex justify-center">
                <Image src="/images/Logo.jpg" alt="" width={100} height={100} />
            </div>
            <div className="flex flex-col w-full py-4 items-center justify-center h-full mt-4">
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
                <ul className="flex flex-col font-medium mt-4 px-3 bg-white gap-y-4">
                    <li className="hover:bg-gray-100">
                        <a href="/" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm" aria-current="page">Our story</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="/books" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">As an author</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="#" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">Travels</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="#" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">LifeStyle</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="#" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">Auctions</a>
                    </li>
                    <li className="hover:bg-gray-100 mb-3">
                        <a href="#" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">Contents</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default navigator