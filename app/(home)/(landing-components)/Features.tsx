import React from 'react'
import FeatureCard from './FeatureCard'

import Feature1 from "@/public/landing-page/feature-1.svg"
import Feature2 from "@/public/landing-page/feature-2.svg"
import Feature3 from "@/public/landing-page/feature-3.svg"
import Feature4 from "@/public/landing-page/feature-4.svg"

function Features() {
    return (
        <>
        <div className='bg-primary-3 text-center p-5 md:p-10 lg:p-20'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-2xl text-accent-4 my-5">Key Features</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-5 my-10'>
                    <FeatureCard image={Feature1} heading='Autonomous' desc ="No human interference required for the functioning" />
                    <FeatureCard image={Feature2} heading='3 lines Of Defense' desc ="A combination of acoustics, flashlights & a mobile application" />
                    <FeatureCard image={Feature3} heading='Non Intrusive' desc ="Does not disturb humans in any ways while functioning" />
                    <FeatureCard image={Feature4} heading='No Direct Contact' desc ="No physical contact shall be made in the defense process" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Features