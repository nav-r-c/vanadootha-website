import React from "react";

import { DM_Sans } from "next/font/google"

import "../globals.css"
import Navbar from "./(landing-components)/Navbar";
import Footer from "./(landing-components)/Footer";

const dm = DM_Sans({subsets: ['latin']})

export default function RootLayout({children} : {children : React.ReactNode}) {
    return (
        <>
        <html lang = 'en'>
            <body className={dm.className}>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
        </>
    )
}