import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react'
import Image from 'next/image'

import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

interface PropTypes {
    icon : string | StaticImport,
    title : string,
    desc : string
}

function FeatureCard(props : PropTypes) {
    return (
        <>
            <div className='rounded-md bg-accent-2 py-10 px-5 shadow-lg'>
                <Image src = {props.icon} width={50} height={50} alt = "Feature" className='mx-auto' />
                <h1 className='text-xl text-center font-bold text-accent-3 mt-5 '>{props.title.toUpperCase()}</h1>
                <p className={`text-sm ${inter.className} text-accent-4 text-center`}>{props.desc}</p>
             </div>
        </>
    )
}

export default FeatureCard