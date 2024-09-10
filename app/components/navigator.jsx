"use client";
import Link from "next/link";

export const navigator = () => {
    return (
    <nav class="bg-white h-[80px] flex w-full">
        <div class="columns-3 flex w-full">
            <div class="flex w-full items-center justify-evenly ps-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px]" >Home</Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px]" >Service</Link>
            </div>
            <div class="bg-black text-white w-1/2 min-h-full flex flex-col text-center items-center justify-center font-jung px-5">
                <p className="branding">Simeon</p>
                <small className="brand-context w-full border-y border-white py-1">The Johnson Family Heritage</small>
            </div>
            <div class="flex w-full items-center justify-evenly ps-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px]" >Home</Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 font-normal hover:font-bold w-[100px]" >Service</Link>
            </div>
        </div>
    </nav>
    )
}

export default navigator