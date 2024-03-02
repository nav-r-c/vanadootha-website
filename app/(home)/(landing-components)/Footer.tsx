'use client'

import React, { FormEvent, ReactEventHandler, useState } from 'react'
import Image from 'next/image'
import WhiteLogo from "@/public/landing-page/Vanadootha Logo for footer.svg"

import Youtube from "@/public/landing-page/Youtube.svg"
import LinkedIn from "@/public/landing-page/Linkedin.svg"
import Instagram from "@/public/landing-page/instagram.svg"
import Link from 'next/link'
import { Spinner } from 'flowbite-react'

function Footer() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)


    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoading(true)

        const formData = {
            name : name,
            phone : phone,
            message : message
        }

        const response = await fetch("/api/submit", {
            method : "POST",
            headers : {
                'Accept' : "application/json",
                'Content-Type' : "application/json"
            },
            body : JSON.stringify(formData)
        }) 

        console.log(await response.json())

        setName('')
        setPhone('')
        setMessage('')
        
        setSubmitted(true)
        setLoading(false)
    }

    return (
        <>
        <div className='p-5 md:p-10 lg:p-20 bg-secondary-5 text-white text-center md:text-left'>
            <div className='w-[80%] mx-auto'>
                <div className='flex lg:flex-row flex-col justify-between gap-10 items-center'>
                    <div id = "contact-us" className='lg:w-[40%]'>
                        {loading ? 
                        <div className='flex flex-col justify-center items-center'>
                            <Spinner color={"success"} size = {'md'} />
                            <p className='text-white my-2'>Submitting Form...</p>
                        </div>
                        :
                        submitted ? 
                        <div>
                            <h4 className='font-bold text-2xl my-5'>Your message has been submitted successfully.</h4>
                            <button className='bg-white text-black my-5 rounded-full py-2 px-5 font-bold' onClick={(e) => {setSubmitted(false)}}>Submit another message</button>
                        </div>
                        :
                        <form onSubmit={handleSubmit}>
                            <h2 className='font-bold text-2xl my-5'>Contact Us</h2>
                            <input value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Your Name' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />
                            <input value={phone} onChange={(e) => {setPhone(e.target.value)}} placeholder='Phone Number' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />
                            <input value={message} onChange={(e) => {setMessage(e.target.value)}} placeholder='Your Message' type = "text" className='bg-input-box rounded-md w-[100%] my-2 outline-none p-2 placeholder-input-text border-2 border-input-text' />

                            <button type = "submit" className='bg-white text-black my-5 rounded-full py-2 px-5 font-bold'>Contact Us</button>
                        </form>}
                    </div>
                    <div className='flex md:flex-row flex-col justify-between lg:justify-center gap-5 items-center lg:w-[60%]'>
                        <div>
                            <div className='text-sm md:text-md lg:text-lg'>
                                <section>
                                    <h2 className='text-white'>Vanadootha Pvt Ltd</h2>
                                    <p className='text-footer-text my-2'>#3, Jyothi Nivasa, St.Michel&apos;s school road Gangammagudi layout, Jalahalli, Bengaluru, Karnataka - 560013.</p>
                                    <p className='text-footer-text my-2'>Ph: +91-8310534603</p>
                                </section>

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