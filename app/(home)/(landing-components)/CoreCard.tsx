'use client'

import React from 'react'
import Image from 'next/image'
import CoreImage from '@/public/landing-page/core-1.png'
import { Figtree } from 'next/font/google'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import { motion } from 'framer-motion'

const figtree = Figtree({subsets: ['latin']})

interface PropTypes {
    image : string | StaticImport,
    heading : string,
    desc : string
}

function CoreCard(props : PropTypes) {
    return (
        <>
        <motion.div
            initial = {{opacity : 0, y : 30}}
            whileInView={{opacity : 1, y : 0}}
            viewport={{ once : true, margin : "-20px" }}
        >
            <div className='flex flex-col justify-center items-center'>
                <Image src = {props.image} width={150} height={150} alt = "Core Belief" />
                <h3 className='font-bold text-accent-4 my-2 lg:my-5 text-md md:text-lg'>{props.heading}</h3>
                <p className={`text-secondary-4 text-sm w-[90%] lg:w-[80%] ${figtree.className}`}>
                    <span className='text-pretty'>{props.desc}</span>
                </p>
            </div>
        </motion.div>
        </>
    )
}

CoreCard.defaultProps  = {
    image : CoreImage,
    heading : 'Core Belief',
    desc : 'To prevent fatalities occurring due to the human - animal conflicts across India due to the wild animal invasions, by developing tangible, artificially intelligent solutions.'
}

export default CoreCard