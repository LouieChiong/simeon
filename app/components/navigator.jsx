"use client";
import Link from "next/link";
import Socialite from "./socialite";
import Image from "next/image";
import HamburgerButton from "./hamburgerButton";

export const Navigator = () => {
    return (
        <nav className="bg-primary-secondary sticky min-h-24 w-full  top-0 z-10 flex-col justify-center flex">
        {/* Desktop Navbar */}
        <div className="hidden laptop:flex w-full items-center justify-between px-6">
            {/* Left side */}
            <div className="flex items-center justify-evenly gap-x-6 w-full">
                <Socialite color="fill-gold"/>
                <Link href="/" className="transform transition-transform duration-300 hover:scale-110 font-normal hover:font-bold nav-button">
                    Home
                </Link>
                <Link href="/author" className="transform transition-transform duration-300 hover:scale-110 font-normal hover:font-bold nav-button">
                    Our story
                </Link>
                <Link href="/books" className="transform transition-transform duration-300 hover:scale-110 font-normal hover:font-bold nav-button">
                    My Books
                </Link>
                <Link href="/galleries" className="transform transition-transform duration-300 hover:scale-110 font-normal hover:font-bold nav-button">
                    Galleries
                </Link>
                <Link href="/auctions" className="transform transition-transform duration-300 hover:scale-110 font-normal hover:font-bold nav-button">
                    Auctions
                </Link>
                <Link href="/content" className="transform transition-transform duration-300 hover:scale-110 font-normal hover:font-bold nav-button">
                    Contents
                </Link>
            </div>
        </div>
            {/* Mobile Navbar */}
        <div className="max-w-screen-xl flex justify-start items-center px-4 mobile:flex tablet:flex laptop:hidden min-h-24">
            <HamburgerButton />
        </div>

        <div>
            <div className="hidden w-full md:block md:w-auto border-t-2 !z-[999]" id="drop-down-navbar">
                <ul className="flex flex-col font-medium mt-4 px-3 gap-y-4">
                    <li className="">
                        <a href="/" className="block py-2 px-3 text-white hover:font-bold menu-sm" aria-current="page">Home</a>
                    </li>
                    <li className="">
                        <a href="/author" className="block py-2 px-3 text-white hover:font-bold menu-sm" aria-current="page">Our story</a>
                    </li>
                    <li className="">
                        <a href="/books" className="block py-2 px-3 text-white hover:font-bold menu-sm">My Books</a>
                    </li>
                    <li className="">
                        <a href="/galleries" className="block py-2 px-3 text-white hover:font-bold  menu-sm">Galleries</a>
                    </li>
                    <li className="">
                        <a href="/auctions" className="block py-2 px-3 text-white hover:font-bold  menu-sm">Auctions</a>
                    </li>
                    <li className="mb-3">
                        <a href="/author" className="block py-2 px-3 text-white hover:font-bold  menu-sm">Contents</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigator;
