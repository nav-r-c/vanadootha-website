import React from 'react'
import Image from 'next/image'
import WhiteLogo from "@/public/landing-page/VanadoothaFooter.png"

import Youtube from "@/public/landing-page/Youtube.svg"
import LinkedIn from "@/public/landing-page/Linkedin.svg"
import Facebook from "@/public/landing-page/Facebook.svg"
import Instagram from "@/public/landing-page/instagram.svg"
import Link from 'next/link'

function Footer() {
    return (
        <>
        <div className='p-20 bg-secondary-5 text-white'>
            <div className='w-[80%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div id = "contact-us" className='w-[30%]'>
                        <form>
                            <h1 className='font-bold text-2xl my-5'>Contact Us</h1>
                            <input placeholder='Your Name' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />
                            <input placeholder='Phone Number' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />
                            <input placeholder='Your Message' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />

                            <button type = "submit" className='bg-white text-black my-5 rounded-full py-2 px-5 font-bold'>Contact Us</button>
                        </form>
                    </div>
                    <div className='flex justify-center gap-5 items-center'>
                        <div>
                            <h1 className='text-white'>Vanadootha Pvt Ltd</h1>
                            <p className='text-footer-text my-2'>#3, Jyothi Nivasa, St.Michel&apos;s school road <br></br>Gangammagudi layout, Jalahalli, Bengaluru, <br></br>Karnataka - 560013.</p>
                            <p className='text-footer-text my-2'>Ph: +91-8310534603</p>
                            <div className='my-5'>
                                <p className='text-white'>Follow Us</p>
                                <div className='flex gap-2 my-2'>
                                    <Link href = "/">
                                        <Image src = {Facebook} width={30} height={30} alt = "Social Icon" />
                                    </Link>
                                    <Link href = "/">
                                        <Image src = {LinkedIn} width={30} height={30} alt = "Social Icon" />
                                    </Link>
                                    <Link href = "/">
                                        <Image src = {Facebook} width={30} height={30} alt = "Social Icon" />
                                    </Link>
                                    <Link href = "/">
                                        <Image src = {Youtube} width={30} height={30} alt = "Social Icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src = {WhiteLogo} alt = "Vanadootha White Logo" width={250} height={250} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer