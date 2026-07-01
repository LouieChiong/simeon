import React from 'react'
import { useState } from 'react';

export const HamburgerButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.getElementById('drop-down-navbar').classList.toggle('hidden');
    };

    return (
        <div>
            <button
                data-collapse-toggle="drop-down-navbar"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]"
                style={{ color: "var(--text-gold)" }}
                aria-controls="drop-down-navbar"
                aria-expanded={isOpen}
                onClick={toggleMenu}
            >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                <span
                    className={`absolute block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 top-2.5' : 'top-0'
                    }`}
                />
                <span
                    className={`absolute block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'top-2.5'
                    }`}
                />
                <span
                    className={`absolute block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 top-2.5' : 'top-5'
                    }`}
                />
                </div>
            </button>
        </div>
    )
}

export default HamburgerButton
