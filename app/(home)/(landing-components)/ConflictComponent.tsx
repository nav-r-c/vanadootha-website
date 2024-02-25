'use client'

import React from "react";
import Carousel from "./Carousel";

import { motion } from "framer-motion"

export default function Conflict() {
    return (
        <>
        <div className="p-10 text-center ">
            <h2 className="font-bold text-lg lg:text-2xl">Human-wildlife conflict, a tale as old as time.</h2>
            <motion.div 
                className="mt-10"
                initial = {{
                    opacity : 0
                }}
                whileInView={{
                    opacity : 1
                }}
                viewport={{
                    once : true,
                    margin : "-50px"
                }}
            >
                <Carousel />
            </motion.div>
        </div>
        </>
    )
}