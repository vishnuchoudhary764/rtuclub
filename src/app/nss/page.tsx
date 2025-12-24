import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center p-6'>
      <div className='flex flex-col w-full max-w-4xl m-auto gap-7 bg-white p-10 rounded-2xl shadow-xl'>
      
        <h1 className='text-3xl font-bold text-center text-indigo-600'>About NSS</h1>

      
        <p className='font-semibold text-lg text-gray-800'>National Service Scheme (NSS)</p>
        <p className='text-gray-700 leading-relaxed text-justify'>
          The National Service Scheme (NSS) is a student-led community service initiative that aims to develop a sense
          of social responsibility, leadership, and empathy among youth. At our college, the NSS Club organizes activities
          like blood donation camps, cleanliness drives, awareness programs, and rural development projects.
        </p>

        
        < img className='m-auto rounded-xl shadow hover:scale-95 transition' src="nss.jpeg" alt="NSS" />
        

        <p className='text-gray-700 leading-relaxed text-justify'>
          We believe in the motto <span className='font-bold'>&quot;Not Me, But You&quot;</span>, encouraging every member
          to contribute selflessly towards society. Through participation in NSS, students not only serve the community
          but also grow as responsible citizens with values of teamwork, compassion, and integrity.
        </p>

       
        <div>
          <h2 className='text-2xl font-semibold text-indigo-500 mb-3'>Achievements</h2>
          <ul className='list-disc space-y-4 text-gray-700'>
            <li>
              <h3 className='font-semibold'>Environmental Initiatives</h3>
              <p>Plantation Drive: NSS RTU successfully planted and nurtured 500 plants in Raithal village, Baran district,
                contributing to environmental preservation and sustainability.</p>
            </li>
            <li>
              <h3 className='font-semibold'>Institutional Award</h3>
              <p>The university received the &quot;Institutional Award&quot; for its exemplary community service initiatives,
                recognizing its social impact and leadership in fostering volunteerism.</p>
            </li>
            <li>
              <h3 className='font-semibold'>Independence Day Honors</h3>
              <p>On Independence Day, the Honorable Vice-Chancellor recognized and honored NSS volunteers for their
                outstanding contributions and commitment to community service.</p>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className='text-2xl font-semibold text-indigo-500 mb-3'>Camps and Programs</h2>
          <ul className='list-disc space-y-4 text-gray-700'>
            <li>
              <h3 className='font-semibold'>&quot;Sankalp&quot; Camp</h3>
              <p>The organization successfully conducted a 7-day camp named &quot;Sankalp&quot; to empower young minds through
                service-oriented activities.</p>
            </li>
            <li>
              <h3 className='font-semibold'>Cleanliness Drives</h3>
              <p>NSS RTU has organized various activities, including cleanliness drives, to promote social responsibility
                and civic engagement.</p>
            </li>
          </ul>
          
        </div>
Image
        <div>
          <h2 className='text-2xl  font-semibold text-indigo-500 mb-3'>Photos</h2>
          <div className='flex flex-col p-4 lg:grid lg:grid-row-1 lg:m-0 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <img className='rounded-xl  transition' src="delhitrophy.jpeg" alt="Trophy" />
            <img className='rounded-xl  transition' src="corewp.jpeg" alt="Core Team" />
            <img className='rounded-xl  transition' src="jnr.jpeg" alt="Junior Volunteers" />
            <img className='rounded-xl  transition' src="rangoli.jpeg" alt="Rangoli Event" />
            <img className='rounded-xl  transition' src="patelwjnr.jpeg" alt="Patel Event" />
            <img className='rounded-xl  transition' src="news.jpeg" alt="News Coverage" />
          

          </div>
        </div>
          <div className="text-center pt-4">
          <a
            href="https://www.instagram.com/nss_rtu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default page
