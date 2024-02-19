import React from "react";

interface PropTypes {
    stat : number,
    suffixStat? : string,
    desc : string
}

export default function StatCard(props : PropTypes) {
    return (
        <>
        <div className="bg-white p-5 shadow-lg rounded-md">
            <div className="rounded-full border-2 bg-accent-1 w-[100px] md:w-[150px] h-[100px] md:h-[150px] mx-auto flex flex-col items-center justify-center">
                <h1 className="font-bold text-white text-xl md:text-3xl">{`${props.stat} ${props.suffixStat? props.suffixStat : ''}`}</h1>
            </div>  
            <p className="text-secondary-3 font-medium text-sm my-2 opacity-50">{props.desc}</p>
        </div>
        </>
    )
}

StatCard.defaultProps = {
    stat : 4000,
    desc : " Acres of land area damaged by wild animals in Andhra Pradesh"
}