"use client";
import Link from 'next/link'

import { usePathname } from "next/navigation";
import { useState,useEffect } from 'react';
const Navbar = () => {
   const pathname = usePathname();
    const [user, setUser] = useState<{ id: number; name: string; role: string } | null>(null)
     const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])
  return (
    <div className='flex justify-evenly flex-col lg:flex-row p-5 gap-6 md:gap-0 mb-5 text-white md:text-black bg-blue-400 md:bg-white '>
     
      <div className='flex md:flex-col justify-between items-center lg:flex-row  gap-4'>
          <img  className='rounded-full md:w-20 md:h-20 h-15 w-15 ' src="sac.jpeg" alt="" />
        
        <p className='font-extrabold font-mono text-2xl tracking-widest'>SAC RTU</p>
          <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
             
      </div>

       <ul className='hidden md:flex justify-evenly text-xl items-center gap-4 md:gap-10 '>
        <Link className={pathname === "/" ? "font-bold  md:text-blue-500":""} href={"/"}>Home</Link>
        <Link className={pathname === "/clubs" ? "font-bold  md:text-blue-500":""} href={"/clubs"}>Clubs</Link>
         <Link  className={pathname === "/events" ? " font-bold  md:text-blue-500":""} href={"/events"}>Events</Link>
      
        
          {user?.role === "Coordinator" && (
          <Link
            href="/dashboard/coordinator"
            className="md:text-gray-700  hover:text-blue-600"
          >
            Dashboard
          </Link>
        )}
         {user?.role === "User" && (
          <Link
            href="/dashboard/user"
            className="md:text-gray-700  hover:text-blue-600"
          >
            Dashboard
          </Link>
        )}
       <Link  className={pathname === "/profile" ? " border-2 rounded-4xl p-1.5  border-white md:border-blue-500":""} href={ "/profile"}>
        
    
        <img className='hidden md:block'  width={35} height={35} src="user.png" alt="" />
       
        </Link>
        

      </ul>
       
      
         
          {isOpen && (
        <ul className="md:hidden flex flex-row justify-evenly text-xl items-center mt-4 ">
          <li>
           <Link className={pathname === "/" ? "font-bold  md:text-blue-500":""} href={"/"}>Home</Link>
          </li>
          <li>
             <Link className={pathname === "/clubs" ? "font-bold  md:text-blue-500":""} href={"/clubs"}>Clubs</Link>
          </li>
         
          <li>
             {user?.role === "Coordinator" && (
              
          <Link
            href="/dashboard/coordinator"
            className="md:text-gray-700  hover:text-blue-600"
          >
            Dashboard
          </Link>
        )}
         {user?.role === "User" && (
          <Link
            href="/dashboard/user"
            className="md:text-gray-700  hover:text-blue-600"
          >
            Dashboard
          </Link>
        )}
          </li>
           <Link  className={pathname === "/profile" ? " border-2 rounded-4xl p-1.5  border-white md:border-blue-500":""} href={ "/profile"}>
        
    
        <img width={30} height={30} src="user.png" alt="" />
       
        </Link>
        </ul>
      )}
       
      
     
    </div>
  )
}

export default Navbar
