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

import Head from "next/head";

export const metadata : Metadata = {
    title : "Vanadootha | The smarter way to defend your farmland",
    description : "“Vanadootha” translates to, “Messenger of the Forest” in the ancient Sanskrit language. All products developed by Vanadootha, will act as a bridge between the wilderness and humanity. It will avoid all the conflicts and clashes between the two sides and will ensure that peace and co-existence thrives, avoiding Eco-Apartheid, leading to an eternal friendship between human beings and the wild. The smarter way to defend your farmland. With our smart & autonomous product, you don't have to worry about guarding your fields all night!",
    metadataBase : new URL("https://www.vanadootha.com")
}

export default function Page() {
    return (
        <>
            <Head>
                <title>Vanadootha | The smarter way to defend your farmland</title>
                <meta title = "description" content="Vanadootha” translates to, “Messenger of the Forest” in the ancient Sanskrit language. All products developed by Vanadootha, will act as a bridge between the wilderness and humanity. It will avoid all the conflicts and clashes between the two sides and will ensure that peace and co-existence thrives, avoiding Eco-Apartheid, leading to an eternal friendship between human beings and the wild. The smarter way to defend your farmland. With our smart & autonomous product, you don't have to worry about guarding your fields all night!" />
            </Head>
            <div>
                <Header />

                <section>
                    <section id = 'conflict-carousel' aria-label="Examples of human wildlife conflict">
                        <Conflict />
                    </section>

                    <section id = 'statistics' aria-label="Statistics of Human Wildlife Conflict">
                        <Stats />
                    </section>

                    <section id = "about-us" aria-label="About Vanadootha">
                        <LandingAbout />
                    </section>

                    <section id = "Core-Beliefs" aria-label="The Core beliefs of Vanadootha">
                        <CoreBeliefs />
                    </section>
                    <section id = "product" aria-label="The KShavi 2.0">
                        <Product />
                    </section>

                    <section id = "features" aria-label="Features of Vanadootha">
                        <Features />
                    </section>

                    <section id = "animals" aria-label="The Animals targeted by Vanadootha">
                        <AnimalSection />
                    </section>

                    <section id = "video" aria-label="The Journey of Vanadootha">
                        <VideoSection />
                    </section>

                    <section id = "support" aria-label="Organizations that support Vanadootha">
                        <Sponsors />
                    </section>
                </section> 
            </div>
        </>
    )
}