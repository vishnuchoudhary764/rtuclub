import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";



export const metadata: Metadata = {
  title: "SAC RTU",
  description: "Rtu clubs",
   icons: {
    icon: "sac.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='inset-0'
      >
       <Navbar/>
        {children}
      
      </body>
    </html>
  );
}
