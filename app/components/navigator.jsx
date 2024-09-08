"use client";
import Link from "next/link";
import localFont from "next/font/local";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

export const navigator = () => {

    return (
    <nav class="bg-white h-[70px] flex w-full">
        <div class="columns-3 flex w-full">
            <div class="flex w-full items-center justify-evenly ps-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px]" >Home</Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px]" >Service</Link>
            </div>
            <div class="bg-black text-white w-1/2 min-h-full flex items-center justify-center" className={`${geistSans.variable} antialiased`}>Johnson</div>
            <div class="flex w-full items-center justify-evenly ps-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px]" >Home</Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px]" >Service</Link>
            </div>
        </div>
    </nav>
    )
}

export default navigator