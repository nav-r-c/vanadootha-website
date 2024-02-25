'use client'

import React, { useState, useEffect } from "react";

import { useAnimate, useInView, motion } from "framer-motion"

interface PropTypes {
    stat : number,
    suffixStat? : string,
    desc : string
}

export default function StatCard(props : PropTypes) {

    const [ statRef, statAnimate ] = useAnimate()
    const isInView = useInView(statRef)

    const [stat, setStat] = useState(0)

    useEffect(() => {
        if (isInView) {
            const difference = props.stat - stat;
            const duration = Math.min(difference, 1000);
    
            const interval = setInterval(() => {
                setStat((prevStat) => {
                    const nextStat = prevStat + Math.ceil(props.stat/200);
                    return nextStat <= props.stat ? nextStat : props.stat;
                });
            }, duration / difference);
    
            return () => clearInterval(interval);
        }
    }, [isInView, props.stat, stat]);

    return (
        <>
        <motion.div 
            className="bg-white p-5 shadow-lg rounded-md"
            initial = {{opacity : 0, y : 30}}
            whileInView={{opacity : 1, y : 0}}
            viewport={{ once : true, margin : "-20px" }}
        >
            <div className="rounded-full border-2 bg-accent-1 w-[100px] md:w-[150px] h-[100px] md:h-[150px] mx-auto flex flex-col items-center justify-center">
                <h3 ref = {statRef} className="font-bold text-white text-xl md:text-3xl">{`${stat} ${props.suffixStat? props.suffixStat : ''}`}</h3>
            </div>  
            <p className="text-secondary-3 font-medium text-sm my-2 opacity-50">{props.desc}</p>
        </motion.div>
        </>
    )
}

StatCard.defaultProps = {
    stat : 4000,
    desc : " Acres of land area damaged by wild animals in Andhra Pradesh"
}