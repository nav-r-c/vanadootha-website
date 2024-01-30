import React from 'react'
import Image from 'next/image'

import { Figtree } from 'next/font/google'

import Logo from "@/public/logo.png"


const figtree = Figtree({subsets: ['latin']})

function AboutUsHome() {
    return (
        <>
            <div className='my-20 bg-[#FAF9F6]'>
                <div className='flex justify-between items-center'>
                    <div className='px-[10%] w-[50%]'>
                        <h1 className='font-bold text-accent-3 text-4xl leading-snug'>Your Messenger <br></br>of the Forest</h1>
                        <div className={`my-2 leading-loose ${figtree.className}`}>
                            <p className='mb-5'>“Vanadootha” translates to, “Messenger of the Forest” in the ancient Sanskrit language. </p>
                            <p>All products developed by Vanadootha, will act as a bridge between the wilderness and humanity. It will avoid all the conflicts and clashes between the two sides and will ensure that peace and co-existence thrives, avoiding Eco-Apartheid, leading to an eternal friendship between human beings and the wild.</p>
                        </div>
                    </div>
                    <div className='bg-accent-2 p-[10%]'>
                        <Image src = {Logo} width={500} height={500} alt = "Vanadootha Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsHome