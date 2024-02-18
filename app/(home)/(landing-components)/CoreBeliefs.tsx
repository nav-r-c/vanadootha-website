import React from 'react'
import CoreCard from './CoreCard'

import Mission from "@/public/landing-page/core-1.png"
import Vision from "@/public/landing-page/core-2.png"
import Values from "@/public/landing-page/core-3.png"
import Spark from "@/public/landing-page/core-4.png"

function CoreBeliefs() {
    return (
        <>
        <div className='p-20 bg-primary-3 text-center'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-2xl text-accent-4 my-5">Our Core Beliefs</h1>
                <div className='grid grid-cols-4 my-10'>
                    <CoreCard image={Mission} heading='Mission' desc='To prevent fatalities occurring due to the human - animal conflicts across India due to the wild animal invasions, by developing tangible, artificially intelligent solutions.' />
                    <CoreCard image={Vision} heading='Vision' desc='To make the world a safe, healthy and a coexisting habitat for both humans and animals; creating harmony in nature.' />
                    <CoreCard image={Values} heading='Values' desc='Curiosity, Sustainability, Innovation, Responsibility, Creativity' />
                    <CoreCard image={Spark} heading='Spark' desc='The fatalities of wild animals and the plight of farmers in India, was our spark to work on this problem.' />
                </div>
            </div>
        </div>
        </>
    )
}

export default CoreBeliefs