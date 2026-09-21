"use client";
import Link from "next/link";
import Socialite from "./socialite";
import Image from "next/image";
import HamburgerButton from "./hamburgerButton";

export const Navigator = () => {
    return (
        <nav className="nav-elegant sticky min-h-24 w-full  top-0 z-10 flex-col justify-center flex">
        {/* Desktop Navbar */}
        <div className="hidden laptop:grid w-full items-center grid-cols-[auto_1fr_auto] gap-x-10 px-8">
            {/* Brand */}
            <Link href="/" className="nav-brand">
                <span className="nav-crest-badge">
                    <Image src="/images/Logo.png" alt="Johnson family crest" width={42} height={42} />
                </span>
                <span className="nav-wordmark">Simeon W. Johnson</span>
            </Link>

            {/* Center links */}
            <div className="flex items-center justify-center gap-x-8">
                <Link href="/" className="nav-button">
                    Home
                </Link>
                <Link href="/author" className="nav-button">
                    Our story
                </Link>
                <Link href="/books" className="nav-button">
                    My Books
                </Link>
                <Link href="/galleries" className="nav-button">
                    Galleries
                </Link>
                <Link href="/timeline" className="nav-button">
                    Timeline
                </Link>
                <Link href="/auctions" className="nav-button">
                    Auctions
                </Link>
                <Link href="/content" className="nav-button">
                    Contents
                </Link>
            </div>

            {/* Social */}
            <Socialite color="fill-gold"/>
        </div>
            {/* Mobile Navbar */}
        <div className="max-w-screen-xl flex justify-between items-center px-4 mobile:flex tablet:flex laptop:hidden min-h-24">
            <Link href="/" className="nav-brand">
                <span className="nav-crest-badge">
                    <Image src="/images/Logo.png" alt="Johnson family crest" width={38} height={38} />
                </span>
            </Link>
            <HamburgerButton />
        </div>

        <div>
            <div className="hidden w-full md:block md:w-auto !z-[999] border-t border-[rgba(212,175,55,0.25)]" id="drop-down-navbar">
                <ul className="flex flex-col px-3 gap-y-0 pb-2">
                    <li>
                        <Link href="/" className="mobile-nav-link" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href="/author" className="mobile-nav-link" aria-current="page">Our story</Link>
                    </li>
                    <li>
                        <Link href="/books" className="mobile-nav-link">My Books</Link>
                    </li>
                    <li>
                        <Link href="/galleries" className="mobile-nav-link">Galleries</Link>
                    </li>
                    <li>
                        <Link href="/timeline" className="mobile-nav-link">Timeline</Link>
                    </li>
                    <li>
                        <Link href="/auctions" className="mobile-nav-link">Auctions</Link>
                    </li>
                    <li>
                        <Link href="/content" className="mobile-nav-link">Contents</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigator;
