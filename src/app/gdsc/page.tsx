export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-2">
      <div className="max-w-4xl w-full rounded-2xl p-8 space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Google Developer Student Club (GDSC) 
        </h1>

        
        <p className="text-gray-700 leading-relaxed text-justify">
          GDSC RTU is a university-based community at <span className="font-semibold">Rajasthan Technical University (RTU)</span> in Kota,
           India, that fosters peer-to-peer learning and skill development in Google developer technologies like web and mobile 
           development, cloud, and machine learning. Led by students, the club organizes workshops, talks, and hackathons, 
           and participates in Google&apos;s Solution Challenge, a global competition where students build technology solutions for
            community problems. The goal of GDSC RTU is to empower students to gain practical experience and enhance their employability
             by building both technical and soft skills in a collaborative environment.
        </p>

       
        <div>
          <h2 className="text-xl font-semibold text-indigo-500 mb-3">Key Aspects of GDSC RTU</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li><span className="font-semibold">Focus on Google Technologies:</span> Android, Web, Cloud, and Machine Learning.</li>
            <li><span className="font-semibold">Peer-to-Peer Learning:</span> Interactive space where students learn from each other hands-on.</li>
            <li><span className="font-semibold">Skill Development:</span> Gain technical skills through workshops, projects, and collaborations.</li>
            <li><span className="font-semibold">Community Engagement:</span> Apply technical knowledge to solve real-world community problems.</li>
            <li><span className="font-semibold">Global Connection:</span> Be part of a worldwide network of GDSC peers.</li>
            <li><span className="font-semibold">Events and Workshops:</span> Cover both basic and advanced development concepts.</li>
            <li><span className="font-semibold">Solution Challenge:</span> Opportunity to participate in Google&apos;s Solution Challenge and showcase solutions.</li>
            <li><span className="font-semibold">Employability:</span> Improve career prospects through technical and soft skill growth.</li>
          </ul>
        </div>

        <div className="text-center pt-4">
          <a
            href="https://www.instagram.com/gdsc_rtu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
