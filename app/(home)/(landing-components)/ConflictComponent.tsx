import React from "react";
import Carousel from "./Carousel";
import CarouselMobile from "./CarouselMobile";

export default function Conflict() {
    return (
        <>
        <div className="p-10 text-center ">
            <h1 className="font-bold text-2xl">Human-wildlife conflict, a tale as old as time.</h1>
            <div className="mt-10">
                <Carousel />
            </div>
        </div>
        </>
    )
}