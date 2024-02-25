'use client'

import React from 'react'
import Video from './Video'

import { motion } from 'framer-motion'

function VideoSection() {
    return (
        <>
        <div className='p-5 md:p-10 lg:p-20 text-center bg-primary-3'>
            <motion.div 
                className='w-[80%] mx-auto flex flex-col justify-center items-center'
                initial = {{opacity : 0}}
                whileInView={{opacity : 1}}
                viewport={{ once : true, margin : "-40px" }}
            >
                <h2 className="font-bold text-lg md:text-2xl text-accent-4 mb-5">Our Journey</h2>
                <Video />
            </motion.div>
        </div>
        </>
    )
}

export default VideoSection