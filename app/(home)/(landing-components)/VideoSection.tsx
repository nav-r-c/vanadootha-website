import React from 'react'
import Video from './Video'

function VideoSection() {
    return (
        <>
        <div className='p-20 text-center bg-primary-3'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-2xl text-accent-4 my-5">Our Journey</h1>
                <Video />
            </div>
        </div>
        </>
    )
}

export default VideoSection