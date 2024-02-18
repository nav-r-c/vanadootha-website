import React from 'react'
import Image from 'next/image'
import CoreImage from '@/public/landing-page/core-1.png'
import { Figtree } from 'next/font/google'

const figtree = Figtree({subsets: ['latin']})

function CoreCard() {
    return (
        <>
        <div>
            <div className='flex flex-col justify-center items-center'>
                <Image src = {CoreImage} width={150} height={150} alt = "Core Belief" />
                <h1 className='font-bold text-accent-4 my-5'>Core Belief</h1>
                <p className={`text-secondary-4 w-[80%] ${figtree.className}`}>To prevent fatalities occurring due to the human - animal conflicts across India due to the wild animal invasions, by developing tangible, artificially intelligent solutions.</p>
            </div>
        </div>
        </>
    )
}

export default CoreCard