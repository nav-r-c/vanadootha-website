'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion"

import HeaderImage from "@/public/landing-page/landing-header.png"
import HeaderImageMD from "@/public/landing-page/landing-header-md.png"
import HeaderImageSM from "@/public/landing-page/landing-header-sm.png"

export default function Header() {
    return (
        <>
        <div className="relative">
            <div className="h-screen lg:w-[45%] absolute text-white h-screen flex flex-col justify-start pt-20 items-center text-center lg:text-left">
                <motion.div 
                    className="w-[70%]"
                    initial = {{ opacity : 0, x : -5 }}
                    whileInView={{ opacity : 1, x : 0 }}
                    viewport={{once : true}}
                >
                    <h1 className="text-6xl font-bold tracking-wider leading-none">{"The Smarter Way To Defend Your Farmland."}</h1>
                    <p className="text-2xl my-10 text-secondary-2">With our smart & autonomous product, you don't have to worry about guarding your fields all night!</p>
                    <Link href = '#contact-us' className="font-bold bg-primary-2 rounded-full p-2 px-5 text-black text-lg transition-all ease-in-out hover:scale-110">Contact Us</Link>
                </motion.div>
            </div>
            <div>
                <Image src = {HeaderImage} alt = "Product out in the open" width={2000} height={200} className="hidden lg:block w-[100%]" />
                <Image src = {HeaderImageMD} alt = "Product out in the open" width={2000} height={200} className="hidden md:block lg:hidden w-[100%]" />
                <Image src = {HeaderImageSM} alt = "Product out in the open" width={2000} height={200} className="block md:hidden w-[100%]" />
            </div>
        </div>
        </>
    )
}