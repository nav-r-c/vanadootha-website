import React from "react";
import Header from "./(landing-components)/Header";
import Conflict from "./(landing-components)/ConflictComponent";
import Stats from "./(landing-components)/Statistics";

export default function Page() {
    return (
        <>
            <div>
                <Header />

                <div>
                    <Conflict />
                    <Stats />
                </div>  
            </div>
        </>
    )
}