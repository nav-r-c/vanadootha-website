import React from 'react'
import Image from 'next/image'

import { Figtree } from 'next/font/google'

import BannerImg from "@/public/landing_page/hero-section.svg"
import Link from 'next/link'

const figtree = Figtree({subsets:['latin']})

function Banner() {


    return (
        <>
            <div className='relative'>
                <div className='w-[50%] absolute z-10 h-[100vh] flex flex-col justify-center mx-[10%]'>
                    <h1 className='font-satoshi-black text-5xl text-white leading-tight'>THE SMARTER WAY TO <br></br> DEFEND YOUR FARMLAND.</h1> 
                    <p className={`${figtree.className} text-secondary-2 text-lg w-[60%] my-5`}>With our smart & autonomous product, you don’t have to worry about guarding your fields all night!</p>
                    <Link href = '/contact' className='font-bold text-secondary bg-accent-2 p-2 rounded-md text-center w-[20%]'>CONTACT US</Link>
                </div>
                <Image src = {BannerImg} alt='Vanadootha Banner' width={200} height={200} className='w-[100%] absolute' />
            </div>
        </>
    )
}

export default Banner