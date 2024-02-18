import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ProductMain from "@/public/landing-page/product-main.png"

function ProductPreview() {
    return (
        <>
        <div className='flex justify-between items-top gap-10'>
            <div>
                <Image src = {ProductMain} width={600} height={600} className='h-[100%] border-2 border-[#505050] rounded-md' alt='Kshavi 2.0' />
            </div>
            <div className='text-left w-[50%]'>
                <h1 className='font-bold text-2xl'>{"Meet farmer’s First line of Defense"}</h1>
                <p className='my-5 text-md'>Introducing Kshavi, a revolutionary solution in the realm of wildlife management. Harnessing the power of IoT technology, Kshavi is meticulously designed to safeguard human-inhabited areas from the intrusion of herbivore wild animals. </p>
                <p className='my-10 text-md'>Through cutting-edge cameras and sophisticated algorithms, Kshavi detects, tracks, and effectively deters wildlife using a combination of ultrasonic and infrasonic frequencies, coupled with strategic flashlight deployment. With Kshavi, Vanadootha pioneers a new era of coexistence, where humans and wildlife thrive harmoniously, ensuring peace of mind for communities while preserving the natural world.</p>
                <Link href = '#contact-us' className="font-bold bg-primary-2 rounded-full p-2 px-5 text-black text-lg transition-all ease-in-out hover:scale-110">Contact Us</Link>
            </div>
        </div>
        </>
    )
}

export default ProductPreview