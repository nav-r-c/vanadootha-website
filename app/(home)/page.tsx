import React from "react";
import Header from "./(landing-components)/Header";
import Conflict from "./(landing-components)/ConflictComponent";
import Stats from "./(landing-components)/Statistics";
import { Metadata } from "next";
import LandingAbout from "./(landing-components)/LandingAbout";
import CoreBeliefs from "./(landing-components)/CoreBeliefs";
import Product from "./(landing-components)/Product";
import Features from "./(landing-components)/Features";
import AnimalSection from "./(landing-components)/AnimalSection";
import VideoSection from "./(landing-components)/VideoSection";

export const metadata : Metadata = {
    title : "Vanadootha | The smarter way to defend your farmland"
}

export default function Page() {
    return (
        <>
            <div>
                <Header />

                <div>
                    <Conflict />
                    <Stats />
                    <LandingAbout />
                    <CoreBeliefs />
                    <div id = "product">
                        <Product />
                    </div>
                    <Features />
                    <AnimalSection />
                    <VideoSection />
                </div> 
            </div>
        </>
    )
}