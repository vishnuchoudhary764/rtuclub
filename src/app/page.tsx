"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import EventsPage from './events/page';
import Clubpage from './clubs/page';
import {ArrowRight,Sparkles} from "lucide-react";


export default function HomePage(){

  const router = useRouter();
 const handleNavigate = (path: string) => {
    
    router.push(path);
  };
  return (
    <div>
      <div className='flex justify-center p-1 h-full   '>
        <div className='flex flex-col md:flex-row justify-center items-center rounded-2xl max-w-5xl md:h-110 p-7 text-black  
          gap-4  m-auto' >
          <div className='flex flex-col gap-5 font-sans overflow-hidden space-y-4'>
             
            <h1 className=' text-4xl text-center pb-2'>College Clubs & Events</h1>
            <p>Our College Clubs & Events Portal is the one-stop platform for students to
              explore campus life. From cultural fests and technical workshops to social service drives and
              music nights.
            </p>
            <p className='font-bold text-blue-400 '>Every club event, announcement, and gallery is right here.</p>

            <p> This portal connects the  entire campus community.</p>
          <div className="flex flex-wrap justify-evenly py-4  ">
              <button
                onClick={() => handleNavigate('/clubs')}
                className="group hidden md:flex items-center gap-3 rounded-full bg-blue-500
                 px-6 py-3 font-medium text-white shadow-md transition-all lg:hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Explore college clubs"
              >
                <span>Explore Clubs</span>
                <ArrowRight 
                  className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                  aria-hidden="true"
                />
              </button>
              
              <button
                onClick={() => handleNavigate('/events')}
                className="group flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3 font-medium text-white shadow-md transition-all lg:hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:bg-blue-600 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="View upcoming events"
              >
                <span>See Events</span>
                <ArrowRight 
                  className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                  aria-hidden="true"
                />
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


