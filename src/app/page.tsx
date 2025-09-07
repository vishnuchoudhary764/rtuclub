"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';



export default function Page(){

  const router = useRouter();
  return (
    <div>
      <div className='flex justify-center  p-1 h-full '>
        <div className='flex flex-col lg:flex-row   items-center rounded-2xl lg:w-220 lg:h-100  text-black lg:bg-blue-500 gap-4 p-10 lg:text-white' >
          <div className='flex flex-col gap-5 p-2 overflow-hidden'>
            <h1 className='text-4xl'>College Clubs & Events</h1>
            <p>Our College Clubs & Events Portal is the one-stop platform for students to
              explore campus life. From cultural fests and technical workshops to social service drives and
              music nights.
            </p>
            <p className='font-bold'>Every club event, announcement, and gallery is right here.</p>

            <p> This portal connects the entire campus community.</p>
            <div className='flex gap-8'>
              <button onClick={() => router.push("/clubs")} className='flex justify-center gap-4 mt-4 bg-white text-black rounded-2xl w-45 p-3'>Explore Clubs
                {/* <img src="right-arrow.png" height={20} width={20} alt="" /> */}
                <Image src="right-arrow.png" height={20} width={20}  alt="" />
              </button>
              <button onClick={() => router.push("/events")} className='flex gap-4  justify-center mt-4 bg-white text-black rounded-2xl w-40 p-3'>See Events
                {/* <img src="right-arrow.png" height={20} width={20} alt="" /> */}
                <Image  src="right-arrow.png" height={20} width={20} alt="" />
              </button>
            </div>

          </div>

          {/* <img className='rounded-2xl w-80 h-75' src="guys.png" alt="" /> */}
          <Image className='rounded-2xl w-80 h-75' src="guys.png" alt=""/>
        </div>

      </div>
      <p className="text-center text-gray-400 text-sm m-auto mt-2 p-2  "> <a href="https://www.linkedin.com/in/vishnuchoudhary7/">&lt;/&gt; by Vishnu with love</a></p>
       
      
    </div>
  )
}


