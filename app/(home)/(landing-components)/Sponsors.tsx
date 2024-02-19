import React from 'react'
import Image from 'next/image'
import Cisco from "@/public/landing-page/cisco-logo.svg"
import Nasscom from "@/public/landing-page/nasscom-logo.svg"

function Sponsors() {
    return (
        <>
        <div className='p-5 md:p-10 lg:p-20 bg-white text-center'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-lg lg:text-2xl text-accent-4 my-5">Supported By</h1>
                <div className='flex md:flex-row flex-col justify-center items-center gap-10 my-5'>
                    <div className='rounded-md shadow-lg p-5 md:p-10 h-auto md:h-[250px]'>
                        <Image className= "hidden md:block" src = {Cisco} width={200} height={200} alt = "Cisco Thinqbator Logo" />
                        <Image className='block md:hidden' src = {Cisco} width={150} height={150} alt = "Cisco Thinqbator Logo" />
                    </div>
                    <div className='rounded-md shadow-lg p-5 md:p-10 h-auto md:h-[250px]'>
                        <Image className= "hidden md:block" src = {Nasscom} width={200} height={200} alt = "Nasscom Logo" />
                        <Image className='block md:hidden' src = {Nasscom} width={150} height={150} alt = "Nasscom Logo" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sponsors