'use client'

import React from 'react'
import AnimalImage from "@/public/landing-page/animal-1.png"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import { motion } from "framer-motion"

interface PropTypes {
    image : string | StaticImport,
    caption : string
}

function AnimalCard(props : PropTypes) {
    return (
        <>
        <motion.div 
            className='text-center flex flex-col justify-center items-center'
            initial = {{opacity : 0, y : 30}}
            whileInView={{opacity : 1, y : 0}}
            viewport={{ once : true, margin : "-20px" }}
        >
            <Image src = {props.image} width={500} height={250} alt = "Animal" className='rounded-md shadow-lg' />
            {/* <Image src = {props.image} width={150} height={150} alt = "Animal" className='blokc md:hidden rounded-md shadow-lg' /> */}
            <h2 className='my-2 text-lg text-accent-4 font-bold'>{props.caption}</h2>
        </motion.div>
        </>
    )
}

AnimalCard.defaultProps = {
    image : AnimalImage,
    caption : "Animal"
}

export default AnimalCard