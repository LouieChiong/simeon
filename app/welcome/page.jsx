import '../globals.scss'
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
    return (
        <div className="bg-white w-full flex flex-col items-center justify-center h-screen relative">
            <div className="grid tablet:grid-cols-1 laptop:grid-cols-3 desktop:grid-cols-3 w-full h-full">
            <div className="flex flex-col items-center justify-center cursor-pointer">
                <div className="flex flex-col items-center justify-center w-full h-1/2  hover:brightness-50 relative group">
                    <Link href="/author" className="w-full h-full">
                    <Image src="/images/image_3.jpg" height={500} width={900} alt="" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                        <p className=" font-semibold text-2xl uppercase">About Me</p>
                        <small className="p-10 text-center">
                            Learn about the writer behind the stories. From early inspirations to the journey of crafting my first book, my path as an author has been one of passion,
                            perseverance, and creativity. Discover the experiences and life moments that have shaped my work and continue to fuel my storytelling
                        </small>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-1/2  hover:brightness-50 relative group">
                <Link href="/books" className="w-full h-full">
                    <Image src="/images/menu/books.jpg" height={500} width={900} alt="" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                        <p className=" font-semibold text-2xl uppercase">BOOKS</p>
                        <small className="p-10 text-center">
                        Explore my literary creations, where stories come to life through vivid characters and captivating narratives.
                        Dive into my latest works and journey through the worlds I’ve crafted, offering readers unique insights and unforgettable experiences
                        </small>
                    </div>
                </Link>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer">
                <div className="flex flex-col items-center justify-center w-full h-1/2  hover:brightness-50 relative group">
                <Link href="/travels" className="w-full h-full">
                    <Image src="/images/menu/travel.jpg" height={500} width={900} alt="" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                        <p className=" font-semibold text-2xl uppercase">TRAVEL</p>
                        <small className="p-10 text-center">
                        Explore the world and immerse yourself in new cultures, breathtaking landscapes, and unforgettable adventures.
                        Whether you&apos;re seeking relaxation or excitement, travel opens the door to endless possibilities and memories that last a lifetime.
                        </small>
                    </div>
                </Link>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-1/2  hover:brightness-50 relative group">
                <Link href="/family" className="w-full h-full">
                    <Image src="/images/menu/lifestyle.jpg" height={500} width={900} alt="" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                        <p className=" font-semibold text-2xl uppercase">FAMILY</p>
                        <small className="p-10 text-center">
                            Family is the heart of my journey—shaping my values, inspiring my stories, and grounding me through every chapter of life. Discover how the bonds of love, tradition, and connection have influenced my work and continue to guide my path.
                        </small>
                    </div>
                </Link>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer">
                <div className="flex flex-col items-center justify-center w-full h-1/2  hover:brightness-50 relative group">
                <Link href="/auctions" className="w-full h-full">
                    <Image src="/images/menu/auction_2.jpg" height={500} width={900} alt="" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                        <p className=" font-semibold text-2xl uppercase">AUCTIONS</p>
                        <small className="p-10 text-center">
                        Own a piece of my story. Explore a selection of personal memorabilia, rare items, and unique pieces from my journey as a writer, now available for auction.
                        Each item holds a special connection to my creative process and life experiences, offering collectors a chance to acquire something truly meaningful.
                        </small>
                    </div>
                </Link>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-1/2  hover:brightness-50 relative group">
                <Link href="/author" className="w-full h-full">
                    <Image src="/images/menu/content.jpg" height={500} width={900} alt="" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
                        <p className=" font-semibold text-2xl uppercase">Contents</p>
                        <small className="p-10 text-center">
                        Delve into a curated collection of my media, featuring insightful videos, thought-provoking quotes, and behind-the-scenes
                        glimpses into my creative world. From personal reflections to literary insights,
                        explore the diverse content that captures my journey and artistic expression
                        </small>
                    </div>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
}