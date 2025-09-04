export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-6">
       
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Robotics Club RTU
        </h1>

       
        <p className="text-gray-700 leading-relaxed text-justify">
          The <span className="font-semibold">Robotics Club at Rajasthan Technical University (RTU)</span> 
          is a student-driven community passionate about robotics, automation, and innovative engineering. 
          The club provides a platform for students to design, build, and program robots while developing 
          teamwork, creativity, and problem-solving skills.
        </p>

      
        <div>
          <h2 className="text-xl font-semibold text-indigo-500 mb-3">Key Aspects</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">Hands-on Learning:</span> Work on real robotics projects involving electronics, mechanics, and coding.</li>
            <li><span className="font-semibold">Competitions:</span> Participate in national and international robotics competitions such as RoboWars, Line Follower, and Robo Soccer.</li>
            <li><span className="font-semibold">Workshops & Training:</span> Learn robotics, Arduino, IoT, and AI integration through regular sessions.</li>
            <li><span className="font-semibold">Innovation & Research:</span> Encourage members to explore cutting-edge technologies in automation and robotics.</li>
            <li><span className="font-semibold">Team Collaboration:</span> Foster leadership, teamwork, and interdisciplinary collaboration.</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold text-indigo-500 mb-3">Activities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">Workshops:</span> Arduino programming, sensor integration, robotics design.</li>
            <li><span className="font-semibold">Projects:</span> Autonomous robots, drones, IoT-based automation systems.</li>
            <li><span className="font-semibold">Events:</span> Tech fests, robotics showcases, and inter-college competitions.</li>
            <li><span className="font-semibold">Hackathons:</span> Collaborate on robotics and AI-driven challenges.</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold text-indigo-500 mb-3">How to Join</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Sign up during the Student Activity Center (SAC) recruitment drive.</li>
            <li>Participate in introductory workshops to get hands-on exposure.</li>
            <li>Stay connected via the club’s social media for updates and opportunities.</li>
          </ul>
        </div>

       
        <div className="text-center pt-4">
          <a
            href="https://www.instagram.com/robotics_club_rtu/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Follow Robotics Club RTU
          </a>
        </div>
      </div>
    </div>
  );
}
