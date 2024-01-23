import Navbar from "./Navbar";
import "./globals.css";
import { DM_Sans } from "next/font/google" 

const dmsans = DM_Sans({subsets : ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
