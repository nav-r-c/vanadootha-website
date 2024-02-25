import React from 'react'
import Image from 'next/image'
// import YouTubePlaceholder from "@/public/landing-page/VideoPlaceholder.png"
import LogoReveal from "@/public/landing-page/logo-reveal.gif"
import { Figtree } from 'next/font/google'

const figtree = Figtree({subsets: ['latin']})

function LandingAbout() {
    return (
        <>
        <div className='bg-white p-5 md:p-20'>
            <div className='w-[80%] mx-auto'>
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-5 items-center text-center lg:text-left '>
                    <div className='lg:w-[50%]'>
                        <h1 className='font-bold my-2 text-accent-4 text-lg md:text-xl lg:text-2xl'>Your Messenger of the Forest</h1>
                        <p className={`${figtree.className} text-secondary-4 text-sm md:text-md lg:text-lg my-2 text-center lg:text-justify`}>“Vanadootha” translates to, “Messenger of the Forest” in the ancient Sanskrit language. All products developed by Vanadootha, will act as a bridge between the wilderness and humanity. It will avoid all the conflicts and clashes between the two sides and will ensure that peace and co-existence thrives, avoiding Eco-Apartheid, leading to an eternal friendship between human beings and the wild.</p>
                    </div>
                    <div>
                        <Image src = {LogoReveal} width={500} height={500} alt = "Vanadootha Video Placeholder" className='hidden md:block rounded-md' />
                        <Image src = {LogoReveal} width={700} height={700} alt = "Vanadootha Video Placeholder" className='block md:hidden rounded-md' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LandingAbout