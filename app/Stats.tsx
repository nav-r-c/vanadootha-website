import React from 'react'
import StatsCard from './StatsCard'

function Stats() {
    return (
        <>
            <div className='my-20'>
                <h1 className='font-bold text-accent-3 text-center text-3xl mb-10'>Statistics of Human - Animal <br></br> Conflicts As Per The Year 2022</h1>
                <div className='grid grid-cols-4 gap-10'>
                    <StatsCard statistic={"5543"} desc='Acres of land area damaged by wild animals in a single state of Andhra Pradesh' />
                    <StatsCard statistic={"30000"} desc=' Cases of human wildlife conflict in the years, 2021 - 22 as stated by Government of Karnataka' />
                    <StatsCard statistic='4000 Cr' desc='Total loss for farmers across India ' />
                    <StatsCard statistic='40%' desc='Crop loss by wild animals across India' />
                </div>
            </div>  
        </>
    )
}

export default Stats