import React from 'react'
import CoreCard from './CoreCard'

function CoreBeliefs() {
    return (
        <>
        <div className='p-20 bg-primary-3 text-center'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-2xl text-accent-4 my-5">Our Core Beliefs</h1>
                <div className='grid grid-cols-4 my-5'>
                    <CoreCard />
                    <CoreCard />
                    <CoreCard />
                    <CoreCard />
                </div>
            </div>
        </div>
        </>
    )
}

export default CoreBeliefs