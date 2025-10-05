"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import EventsPage from './events/page';
import Clubpage from './clubs/page';



export default function HomePage(){

  const router = useRouter();
  return (
    <div>
      <div className='flex justify-center  p-1 h-full '>
        <div className='flex flex-col md:flex-row justify-center items-center rounded-2xl md:w-230 md:h-100 p-7 text-black lg:bg-blue-500 
          gap-4  lg:text-white m-auto' >
          <div className='flex flex-col gap-5 font-sans overflow-hidden'>
            <h1 className=' text-4xl text-center pb-2'>College Clubs & Events</h1>
            <p>Our College Clubs & Events Portal is the one-stop platform for students to
              explore campus life. From cultural fests and technical workshops to social service drives and
              music nights.
            </p>
            <p className='font-bold text-blue-400 md:text-white'>Every club event, announcement, and gallery is right here.</p>

            <p> This portal connects the  entire campus community.</p>
            <div className='flex justify-center gap-8'>
              <button onClick={() => router.push("/clubs")} className='hidden md:flex justify-center gap-4 m-4
               bg-blue-200 md:bg-white text-black rounded-2xl w-45 p-3'>Explore Clubs
                <img src="right-arrow.png" height={20} width={20} alt="" />
                
              </button>
              <button onClick={() => router.push("/events")} className='flex gap-4 flex-row  justify-center m-4
               bg-blue-200 md:bg-white text-black rounded-2xl shadow-2xl md:shadow-none w-40 p-3'>See Events
                <img src="right-arrow.png" height={20} width={20} alt="" />
               
              </button>
            </div>

          </div>
            
          <img className='md:mt-3 rounded-2xl w-80 h-75' src="guys.png" alt="" />
      
        </div>

      </div>
  
      <Clubpage/>
      
      <p className="text-center text-gray-400 text-sm m-auto md:p-2  ">
         <a href="https://www.linkedin.com/in/vishnuchoudhary7/">&lt;/&gt; by Vishnu with love</a></p>
     
      
    </div>
  )
}


