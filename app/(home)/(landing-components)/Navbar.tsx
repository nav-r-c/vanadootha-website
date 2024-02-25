'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/public/landing-page/VanadoothaNavbar.svg";

export default function Navbar() {

    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
        <div className="shadow-sm z-20">
            <nav className="flex justify-between items-center px-5 md:px-20 py-2">
                <div>
                    <Image src={Logo} width={40} height={40} alt="Vanadootha Logo" />
                </div>

                {/* Normal Menu */}
                <div className="hidden lg:flex gap-10 justify-center items-center text-sm">
                    <Link href="/" className={path === '/' ? `font-medium py-2 border-b-4 border-accent-1` : 'font-medium py-2 hover-underline-animation'}>Home</Link>
                    <Link href="#product" className={path === '#product' ? `font-medium py-2 border-b-4 border-accent-1` : 'font-medium py-2 hover-underline-animation'}>Product</Link>
                    <Link href="#contact-us" className={path === '#contact-us' ? `font-medium py-2 border-b-4 border-accent-1` : 'font-medium py-2 hover-underline-animation'}>Contact Us</Link>
                </div>
                
                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-accent-1 focus:outline-none">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu Content */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-30">
                    <div className="bg-white h-full w-64 p-4">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="font-medium text-gray-800 hover:text-green-500" onClick={closeMenu}>Home</Link>
                            <Link href="#product" className="font-medium text-gray-800 hover:text-green-500" onClick={closeMenu}>Product</Link>
                            <Link href="#contact-us" className="font-medium text-gray-800 hover:text-green-500" onClick={closeMenu}>Contact Us</Link>
                        </div>
                        {/* Close Button */}
                        <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none">
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}
