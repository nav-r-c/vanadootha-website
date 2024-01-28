import React from 'react'
import Image from 'next/image'

import ConflictMainImg from "@/public/landing_page/conflict-main.png"
import ConflictImg1 from "@/public/landing_page/conflict-1.png"
import ConflictImg2 from "@/public/landing_page/conflict-2.png"
import ConflictImg3 from "@/public/landing_page/conflict-3.png"

function ConflictGallery() {
    return (
        <>
            <div className='flex justify-between gap-5'>
                <Image src = {ConflictMainImg} width={500} height={500} className='w-[50%] rounded-xl shadow-xl' alt = "elephant dead in front of tractor" />
                <div className='flex flex-col gap-5 w-[50%]'>
                    <div className='flex justify-between gap-5'>
                        <Image src = {ConflictImg1} width={500} height={500} className='w-[50%] rounded-xl shadow-xl' alt = "deer caught in trap" />
                        <Image src = {ConflictImg2} width={500} height={500} className='w-[50%] rounded-xl shadow-xl' alt = "elephant chasing people" />
                    </div>
                    <Image src = {ConflictImg3} width={500} height={500} className='w-[100%] rounded-xl shadow-xl' alt = "elephant chasing people" />
                </div>

            </div>
        </>
    )
}

export default ConflictGallery