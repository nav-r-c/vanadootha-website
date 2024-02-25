'use client'

import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Feature from "@/public/landing-page/feature-1.svg"
import { Inter } from 'next/font/google'

import { motion } from "framer-motion"

const inter = Inter({subsets: ['latin']})

interface PropTypes {
    image : string | StaticImport,
    heading : string,
    desc : string
}

function FeatureCard(props : PropTypes) {
    return (
        <>
        <motion.div 
            className='p-5 lg:p-10 bg-white rounded-md shadow-lg flex flex-col justify-start items-center'
            initial = {{opacity : 0, y : 30}}
            whileInView={{opacity : 1, y : 0}}
            viewport={{ once : true, margin : "-20px" }}
        >
            <div>
                <Image src = {props.image} width={50} height={50} alt = "Feature" className='my-5' />
            </div>
            <div>
                <h1 className='text-accent-4 font-bold text-lg my-2'>{props.heading}</h1>
                <p className={`text-[0.75em] text-secondary-5 ${inter.className}`}>{props.desc}</p>
            </div>
        </motion.div>
        </>
    )
}

FeatureCard.defaultProps = {
    image : Feature,
    heading : "Feature Name",
    desc : "No human interference required for the functioning"
}

export default FeatureCard