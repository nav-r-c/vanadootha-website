'use client'

import React from 'react'
import Image from 'next/image'
import Cisco from "@/public/landing-page/cisco-logo.svg"
import Nasscom from "@/public/landing-page/nasscom-logo.svg"

import Link from 'next/link'

import { motion } from 'framer-motion'

function Sponsors() {
    return (
        <>
        <div className='p-5 md:p-10 lg:p-20 bg-white text-center'>
            <div className='w-[80%] mx-auto'>
                <h1 className="font-bold text-lg lg:text-2xl text-accent-4 my-5">Supported By</h1>
                <div className='flex flex-row justify-center items-center gap-5 my-5'>
                    <motion.div
                        initial = {{opacity : 0, x : -30}}
                        whileInView={{opacity : 1, x : 0}}
                        viewport={{ once : true, margin : "-40px" }}
                    >
                        
                    <div className='rounded-md shadow-lg p-5 md:p-10 h-auto md:h-[250px] transition-all ease-in-out hover:scale-110'>
                        <Link href = "https://thingqbator.nasscomfoundation.org/">
                            <Image className= "hidden md:block" src = {Cisco} width={200} height={200} alt = "Cisco Thinqbator Logo" />
                            <Image className='block md:hidden' src = {Cisco} width={150} height={150} alt = "Cisco Thinqbator Logo" />
                        </Link>
                    </div>

                    </motion.div>

                    <motion.div
                        initial = {{opacity : 0, x : 30}}
                        whileInView={{opacity : 1, x : 0}}
                        viewport={{ once : true, margin : "-40px" }}
                    >
                    <div className='rounded-md shadow-lg p-5 md:p-10 h-auto md:h-[250px] transition-all ease-in-out hover:scale-110'>
                    <Link href = "https://www.nasscomfoundation.org/">
                        <Image className= "hidden md:block" src = {Nasscom} width={200} height={200} alt = "Nasscom Logo" />
                        <Image className='block md:hidden' src = {Nasscom} width={150} height={150} alt = "Nasscom Logo" />
                    </Link>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sponsors