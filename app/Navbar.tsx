'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import Logo from "@/public/logo.png"

export default function Navbar() {

    const currentPathname = usePathname()

    return (
        <>
            <nav className='flex justify-between items-center py-2 px-20 bg-white shadow-sm'>
                <div>
                    <Image src = {Logo} width={55} height={55} alt = "Vanadootha Logo" />
                </div>
                <div className='flex gap-10'>
                    <Link href = '/' className={`font-medium py-2 ${currentPathname === '/' ? 'border-b-4 border-accent' : ''}`}>HOME</Link>
                    <Link href = '/about' className={`font-medium py-2 ${currentPathname === '/about' ? 'border-b-4 border-accent' : ''}`}>ABOUT US</Link>
                    <Link href = '/contact' className={`font-medium py-2 ${currentPathname === '/contact' ? 'border-b-4 border-accent' : ''}`}>CONTACT US</Link>
                </div>
            </nav>
        </>
    )
}