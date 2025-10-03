import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })



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
        className={inter.className}
      >
       <Navbar/>
        {children}
      
      </body>
    </html>
  );
}
