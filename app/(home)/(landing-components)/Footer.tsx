import React from 'react'
import Image from 'next/image'
import WhiteLogo from "@/public/landing-page/Vanadootha Logo for footer.svg"

import Youtube from "@/public/landing-page/Youtube.svg"
import LinkedIn from "@/public/landing-page/Linkedin.svg"
import Facebook from "@/public/landing-page/Facebook.svg"
import Instagram from "@/public/landing-page/instagram.svg"
import Link from 'next/link'

function Footer() {
    return (
        <>
        <div className='p-5 md:p-10 lg:p-20 bg-secondary-5 text-white text-center md:text-left'>
            <div className='w-[80%] mx-auto'>
                <div className='flex lg:flex-row flex-col justify-between gap-10 items-center'>
                    <div id = "contact-us" className='lg:w-[40%]'>
                        <form>
                            <h1 className='font-bold text-2xl my-5'>Contact Us</h1>
                            <input placeholder='Your Name' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />
                            <input placeholder='Phone Number' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />
                            <input placeholder='Your Message' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />

                            <button type = "submit" className='bg-white text-black my-5 rounded-full py-2 px-5 font-bold'>Contact Us</button>
                        </form>
                    </div>
                    <div className='flex md:flex-row flex-col justify-between lg:justify-center gap-5 items-center lg:w-[60%]'>
                        <div>
                            <div className='text-sm md:text-md lg:text-lg'>
                                <h1 className='text-white'>Vanadootha Pvt Ltd</h1>
                                <p className='text-footer-text my-2'>#3, Jyothi Nivasa, St.Michel&apos;s school road Gangammagudi layout, Jalahalli, Bengaluru, Karnataka - 560013.</p>
                                <p className='text-footer-text my-2'>Ph: +91-8310534603</p>
                            </div>
                            <div className='my-5'>
                                <p className='text-white'>Follow Us</p>
                                <div className='flex justify-center md:justify-start gap-2 my-2'>
                                    <Link href = "https://www.instagram.com/vanadootha?igsh=MW16MDZtZDFubWJiZA==">
                                        <Image src = {Instagram} width={30} height={30} alt = "Social Icon" />
                                    </Link>
                                    <Link href = "https://www.linkedin.com/in/vanadootha-your-messenger-of-the-forest-956995258">
                                        <Image src = {LinkedIn} width={30} height={30} alt = "Social Icon" />
                                    </Link>
                                    <Link href = "https://youtube.com/@vanadootha?si=zIVFDeln7aOIeF_0">
                                        <Image src = {Youtube} width={30} height={30} alt = "Social Icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src = {WhiteLogo} alt = "Vanadootha White Logo" width={500} height={500} className='hidden lg:block' />
                            <Image src = {WhiteLogo} alt = "Vanadootha White Logo" width={350} height={350} className='hidden md:block lg:hidden' />
                            <Image src = {WhiteLogo} alt = "Vanadootha White Logo" width={200} height={200} className='block md:hidden' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer