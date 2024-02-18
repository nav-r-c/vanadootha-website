import React from 'react'
import Image from 'next/image'
import Cisco from "@/public/landing-page/cisco-logo.svg"
import Nasscom from "@/public/landing-page/nasscom-logo.svg"

function Sponsors() {
    return (
        <>
        <div className='p-20 bg-white text-center'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-2xl text-accent-4 my-5">Supported By</h1>
                <div className='flex justify-center items-center gap-10 my-5'>
                    <div className='rounded-md shadow-lg p-10 h-[250px]'>
                        <Image src = {Cisco} width={200} height={200} alt = "Cisco Thinqbator Logo" />
                    </div>
                    <div className='rounded-md shadow-lg p-10 h-[250px]'>
                        <Image src = {Nasscom} width={200} height={200} alt = "Nasscom Logo" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sponsors