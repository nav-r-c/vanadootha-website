'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"


import Logo from "@/public/logo.svg"

export default function Navbar() {

    const path = usePathname()

    return (
        <>
        <div className="shadow-sm">
            <nav className="flex justify-between items-center px-[10%] py-2">
                <div>
                    <Image src = {Logo} width={40} height={40} alt="Vanadootha Logo" />
                </div>
                <div className="flex gap-10 justify-center items-center text-md">
                    <Link href = '/' className={path === '/' ? `font-medium p-2 border-b-4 border-accent-1` : 'font-medium p-2 hover-underline-animation'}>Home</Link>
                    <Link href = '/about' className={path === '/about' ? `font-medium p-2 border-b-4 border-accent-1` : 'font-medium p-2 hover-underline-animation'}>About Us</Link>
                    <Link href = '#contact-us' className={path === '#contact-us' ? `font-medium p-2 border-b-4 border-accent-1` : 'font-medium p-2 hover-underline-animation'}>Contact Us</Link>
                </div>
            </nav>
        </div>
        </>
    )
}