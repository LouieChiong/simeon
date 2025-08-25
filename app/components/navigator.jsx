"use client";
import Link from "next/link";
import Socialite from "./socialite";
import Image from "next/image";
import HamburgerButton from "./hamburgerButton";

export const Navigator = () => {
    return (
        <nav className="bg-white min-h-24 border-2 border-gray-200 w-full absolute top-0 z-10 flex-col justify-center flex">
        {/* Desktop Navbar */}
        <div className="hidden laptop:flex w-full items-center justify-between px-6">
            {/* Left side */}
            <div className="flex items-center justify-evenly gap-x-6 w-full">
                <Socialite />
                <Link href="/" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold nav-button">
                    Home
                </Link>
                <Link href="/author" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold nav-button">
                    Our story
                </Link>
                <Link href="/books" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold nav-button">
                    As an author
                </Link>
                <Link href="/travels" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold nav-button">
                    Travels
                </Link>
                <Link href="/family" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold nav-button">
                    Family
                </Link>
                <Link href="/auctions" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold nav-button">
                    Auctions
                </Link>
                <Link href="/content" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold nav-button">
                    Contents
                </Link>
            </div>
        </div>
            {/* Mobile Navbar */}
        <div className="max-w-screen-xl flex justify-start items-center px-4 mobile:flex tablet:flex laptop:hidden min-h-24">
            <HamburgerButton />
        </div>

        <div>
            <div className="hidden w-full md:block md:w-auto border-t-2" id="drop-down-navbar">
                <ul className="flex flex-col font-medium mt-4 px-3 bg-white gap-y-4">
                    <li className="hover:bg-gray-100">
                        <a href="/" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm" aria-current="page">Home</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="/author" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm" aria-current="page">Our story</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="/books" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">As an author</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="/travels" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">Travels</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="/family" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">Family</a>
                    </li>
                    <li className="hover:bg-gray-100">
                        <a href="/auctions" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">Auctions</a>
                    </li>
                    <li className="hover:bg-gray-100 mb-3">
                        <a href="/author" className="block py-2 px-3 text-gray-900 hover:font-bold hover:bg-gray-100 menu-sm">Contents</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigator;
