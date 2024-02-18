import React from 'react'
import Image from 'next/image'
// import YouTubePlaceholder from "@/public/landing-page/VideoPlaceholder.png"
import LogoReveal from "@/public/landing-page/logo-reveal.gif"
import { Figtree } from 'next/font/google'

const figtree = Figtree({subsets: ['latin']})

function LandingAbout() {
    return (
        <>
        <div className='bg-white p-20'>
            <div className='w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className='w-[50%]'>
                        <h1 className='font-bold my-2 text-accent-4 text-2xl'>Your Messenger of the Forest</h1>
                        <p className={`${figtree.className} text-secondary-4 text-lg my-2 text-left`}>“Vanadootha” translates to, “Messenger of the Forest” in the ancient Sanskrit language. All products developed by Vanadootha, will act as a bridge between the wilderness and humanity. It will avoid all the conflicts and clashes between the two sides and will ensure that peace and co-existence thrives, avoiding Eco-Apartheid, leading to an eternal friendship between human beings and the wild.</p>
                    </div>
                    <div>
                        <Image src = {LogoReveal} width={500} height={500} alt = "Vanadootha Video Placeholder" className='rounded-md' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LandingAbout