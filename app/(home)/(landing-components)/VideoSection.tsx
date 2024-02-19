import React from 'react'
import Video from './Video'

function VideoSection() {
    return (
        <>
        <div className='p-5 md:p-10 lg:p-20 text-center bg-primary-3'>
            <div className='w-[80%] mx-auto flex flex-col justify-center items-center'>
                <h1 className="font-bold text-lg md:text-2xl text-accent-4 mb-5">Our Journey</h1>
                <Video />
            </div>
        </div>
        </>
    )
}

export default VideoSection