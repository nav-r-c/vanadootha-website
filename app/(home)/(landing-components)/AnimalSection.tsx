import React from 'react'
import AnimalCard from './AnimalCard'

import Elephant from "@/public/landing-page/animal-1.png"
import Boar from "@/public/landing-page/animal-2.png"
import Bison from "@/public/landing-page/animal-3.png"
import Antelope from "@/public/landing-page/animal-4.png"

function AnimalSection() {
    return (
        <>
        <div className='p-20 text-center'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-2xl text-accent-4 my-5">The Animals targeted by Vanadootha</h1>
                <div className='grid grid-cols-4 gap-5 my-10'>
                    <AnimalCard image={Elephant} caption='Elephant' />
                    <AnimalCard image={Boar} caption='Wild Boar' />
                    <AnimalCard image={Bison} caption='Wild Bison' />
                    <AnimalCard image={Antelope} caption='Antelope' />
                </div>
            </div>
        </div>
        </>
    )
}

export default AnimalSection