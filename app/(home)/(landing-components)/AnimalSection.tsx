import React from 'react'
import AnimalCard from './AnimalCard'

function AnimalSection() {
    return (
        <>
        <div className='p-20 text-center'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-2xl text-accent-4 my-5">The Animals targeted by Vanadootha</h1>
                <div className='grid grid-cols-4 gap-5 my-5'>
                    <AnimalCard />
                    <AnimalCard />
                    <AnimalCard />
                    <AnimalCard />
                </div>
            </div>
        </div>
        </>
    )
}

export default AnimalSection