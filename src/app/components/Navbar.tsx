"use client";
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useState,useEffect } from 'react';
const Navbar = () => {
   const pathname = usePathname();
    const [user, setUser] = useState<{ id: number; name: string; role: string } | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])
  return (
    <div className='flex justify-evenly flex-col lg:flex-row p-5 gap-6 lg:gap-0 mb-5  '>
      <Link href="https://www.instagram.com/sac.rtu/?hl=en">
      <div className='flex flex-col items-center lg:flex-row  gap-4'>
          {/* <img  className='rounded-full lg:w-20 lg:h-20 h-25 w-25 ' src="sac.jpeg" alt="" /> */}
          <Image className='rounded-full lg:w-20 lg:h-20 h-25 w-25 ' src="sac.jpeg" alt=""></Image>
        <p className='font-extrabold text-2xl tracking-widest'>SAC RTU</p>
             
      </div>
       </Link>
      
      <ul className='flex justify-center text-xl items-center gap-4 lg:gap-10 '>
        <Link className={pathname === "/" ? "font-bold  text-blue-500":""} href={"/"}>Home</Link>
        <Link className={pathname === "/clubs" ? "font-bold  text-blue-500":""} href={"/clubs"}>Clubs</Link>
        <Link  className={pathname === "/events" ? "font-bold  text-blue-500":""} href={"/events"}>Events</Link>
        {/* <Link className={pathname === "/gallery" ? "font-bold  text-blue-500":""} href={"/gallery"}>Gallery</Link> */}
          {user?.role === "Coordinator" && (
          <Link
            href="/dashboard/coordinator"
            className="text-gray-700  hover:text-blue-600"
          >
            Dashboard
          </Link>
        )}
         {user?.role === "User" && (
          <Link
            href="/dashboard/user"
            className="text-gray-700  hover:text-blue-600"
          >
            Dashboard
          </Link>
        )}
        <Link  className={pathname === "/profile" ? "border-2 rounded-4xl p-1.5 border-blue-500":""} href={ "/profile"}>
        
    
        {/* <img  width={22} height={22} src="profile.png" alt="" /> */}
        <Image  width={22} height={22} src="profile.png" alt="" ></Image>
        </Link>
        

      </ul>
    </div>
  )
}

export default Navbar
