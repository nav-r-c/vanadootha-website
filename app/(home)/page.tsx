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
import Sponsors from "./(landing-components)/Sponsors";

export const metadata : Metadata = {
    title : "Vanadootha | The smarter way to defend your farmland",
    description : "“Vanadootha” translates to, “Messenger of the Forest” in the ancient Sanskrit language. All products developed by Vanadootha, will act as a bridge between the wilderness and humanity. It will avoid all the conflicts and clashes between the two sides and will ensure that peace and co-existence thrives, avoiding Eco-Apartheid, leading to an eternal friendship between human beings and the wild. The smarter way to defend your farmland. With our smart & autonomous product, you don't have to worry about guarding your fields all night!"
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
                    <Sponsors />
                </div> 
            </div>
        </>
    )
}