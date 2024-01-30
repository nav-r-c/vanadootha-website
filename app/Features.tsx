import React from 'react'
import FeatureCard from './FeatureCard'

import AutonomousIcon from "@/public/landing_page/autonomous.svg"
import DefenseIcon from "@/public/landing_page/defense.svg"
import IntrusiveIcon from "@/public/landing_page/intrusive.svg"
import ContactIcon from "@/public/landing_page/contact.png"

import { Figtree } from 'next/font/google'
const figtree = Figtree({subsets: ['latin']})

function Features() {
    return (
        <>
        <div className='my-20'>
            <div className='grid grid-cols-4 gap-10 my-20'>
                <FeatureCard icon={AutonomousIcon} title='Autonomous' desc='No human interference required for the functioning' />
                <FeatureCard icon={DefenseIcon} title='3 lines of defense' desc='A combination of acoustics, flashlights & a mobile application' />
                <FeatureCard icon={IntrusiveIcon} title='non-intrusive' desc='Does not disturb humans in any ways while functioning' />
                <FeatureCard icon={ContactIcon} title='no direct contact' desc='No physical contact shall be made in the defense process' />
            </div>
            <div className={`flex justify-between gap-10 ${figtree.className} text-xl tracking-wide text-justify`}>
                <p className='w-[50%]'>We aim to create safe, sustainable and environmental adaptable products to solve the modern day problems occurring due to the increasing Human - wildlife conflicts.</p>
                <p className='w-[50%]'>In the midst of rapid global development, with the advent of major breakthroughs in science, we strive to adapt and incorporate the new technologies into solving Human-wildlife problems.</p>
            </div>
        </div>
        </>
    )
}

export default Features