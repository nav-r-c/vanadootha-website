import React from 'react'
import FeatureCard from './FeatureCard'

function Features() {
    return (
        <>
        <div className='bg-primary-3 text-center p-20'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-2xl text-accent-4 my-5">Key Features</h1>
                <div className='grid grid-cols-4 my-5 gap-5'>
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                </div>
            </div>
        </div>
        </>
    )
}

export default Features