import React from 'react'
import AnimalImage from "@/public/landing-page/animal-1.png"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface PropTypes {
    image : string | StaticImport,
    caption : string
}

function AnimalCard(props : PropTypes) {
    return (
        <>
        <div className='text-center flex flex-col justify-center items-center'>
            <Image src = {props.image} width={200} height={200} alt = "Animal" className='rounded-md shadow-lg' />
            {/* <Image src = {props.image} width={150} height={150} alt = "Animal" className='blokc md:hidden rounded-md shadow-lg' /> */}
            <h1 className='my-2 text-lg text-accent-4 font-bold'>{props.caption}</h1>
        </div>
        </>
    )
}

AnimalCard.defaultProps = {
    image : AnimalImage,
    caption : "Animal"
}

export default AnimalCard