import React from 'react'
import Image from 'next/image'
import CoreImage from '@/public/landing-page/core-1.png'
import { Figtree } from 'next/font/google'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const figtree = Figtree({subsets: ['latin']})

interface PropTypes {
    image : string | StaticImport,
    heading : string,
    desc : string
}

function CoreCard(props : PropTypes) {
    return (
        <>
        <div>
            <div className='flex flex-col justify-center items-center'>
                <Image src = {props.image} width={150} height={150} alt = "Core Belief" />
                <h1 className='font-bold text-accent-4 my-2 lg:my-5 text-md md:text-lg'>{props.heading}</h1>
                <p className={`text-secondary-4 text-sm lg:text-md lg:w-[80%] ${figtree.className}`}>{props.desc}</p>
            </div>
        </div>
        </>
    )
}

CoreCard.defaultProps  = {
    image : CoreImage,
    heading : 'Core Belief',
    desc : 'To prevent fatalities occurring due to the human - animal conflicts across India due to the wild animal invasions, by developing tangible, artificially intelligent solutions.'
}

export default CoreCard