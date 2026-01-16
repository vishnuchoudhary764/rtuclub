export default function page() {
  return (
    <div className="min-h-screen  flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-indigo-500">
          Innovation & Incubation Club RTU
        </h1>

        
        <p className="text-gray-700 leading-relaxed text-justify">
          Innovation & Incubation Club RTU is a dynamic entrepreneurial community at <span className="font-semibold">Rajasthan Technical University (RTU)</span> in Kota,
           India, dedicated to fostering innovation, creativity, and startup culture among students. The club serves as a launchpad 
           for aspiring entrepreneurs and innovators, providing mentorship, resources, and a collaborative ecosystem to transform 
           ideas into viable business ventures. Through ideation sessions, pitch competitions, startup workshops, and networking events 
           with industry leaders and investors, the club empowers students to develop entrepreneurial mindsets, build prototypes, and 
           navigate the startup journey. Whether you have a groundbreaking idea or simply want to learn about entrepreneurship, 
           Innovation & Incubation Club RTU is your gateway to turning dreams into reality.
        </p>

       
        <div>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li><span className="font-semibold">Startup Incubation:</span> Mentorship and resources to develop your business ideas from concept to launch.</li>
            <li><span className="font-semibold">Pitch Competitions:</span> Present your ideas to judges, investors, and win funding opportunities.</li>
            <li><span className="font-semibold">Innovation Workshops:</span> Learn design thinking, lean startup methodology, and business model development.</li>
            <li><span className="font-semibold">Mentorship Programs:</span> Connect with successful entrepreneurs, industry experts, and alumni founders.</li>
            <li><span className="font-semibold">Hackathons and Ideathons:</span> Collaborative events to solve real-world problems and build prototypes.</li>
            <li><span className="font-semibold">Networking Events:</span> Meet investors, VCs, and fellow entrepreneurs from the startup ecosystem.</li>
            <li><span className="font-semibold">Funding Assistance:</span> Guidance on securing grants, competitions, and seed funding for your venture.</li>
            <li><span className="font-semibold">Co-working Space:</span> Access dedicated workspace for team meetings and product development.</li>
          </ul>
        </div>

        <div className="text-center pt-4 space-x-4">
          <a
            href="https://www.instagram.com/innovationclub_rtu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Follow Us on Instagram
          </a>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl p-6 text-center">
          <p className="text-gray-800 font-medium mb-2">
            💡 Transform Your Ideas Into Impact 💡
          </p>
          <p className="text-gray-600 text-sm">
            Join a community of innovators, dreamers, and doers building the future today
          </p>
        </div>
      </div>
    </div>
  );
}