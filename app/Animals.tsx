import React from 'react'
import AnimalCard from './AnimalCard'

import ElephantImage from "@/public/landing_page/elephant.png"
import WildBoarImage from "@/public/landing_page/wild-boar.png"
import WildBisonImage from "@/public/landing_page/wild-bison.png"
import AntelopeImage from "@/public/landing_page/antelope.png"

function Animals() {
    return (
        <>
        <div className='my-20'>
            <h1 className='font-bold text-accent-3 text-center text-3xl mb-10'>The Animals Targeted By Vanadootha</h1>
            <div className='flex justify-between'>
                <AnimalCard ImageUrl={ElephantImage} heading='Elephant' />
                <AnimalCard ImageUrl={WildBoarImage} heading='Wild Boar' />
                <AnimalCard ImageUrl={WildBisonImage} heading='Wild Bison' />
                <AnimalCard ImageUrl={AntelopeImage} heading='Antelope' />
            </div>
        </div>
        </>
    )
}

export default Animals