import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react'
import Image from 'next/image'

import ElephantImg from "@/public/landing_page/elephant.png"

interface Proptypes {
    ImageUrl : string | StaticImport,
    heading : string
}

function AnimalCard(props : Proptypes) {
    return (
        <div>
            <Image src = {props.ImageUrl} alt = "Animal" width={200} height={200} className='rounded-2xl shadow-lg' />
            <h1 className='font-medium text-center text-xl my-5'>{props.heading}</h1>
        </div>
    )
}

AnimalCard.defaultProps = {
    ImageUrl : ElephantImg,
    heading : "Animal Name"
}

export default AnimalCard