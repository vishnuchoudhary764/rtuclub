export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          The Wordsworth Club
        </h1>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed text-justify">
          The Wordsworth Club at <span className="font-semibold">Rajasthan Technical University (RTU)</span> is a club focused on student personality and communication skill development. It aims to improve members' verbal, non-verbal, and written communication through workshops, practice sessions, and events like debates, public speaking, and storytelling. The club also engages students in literary activities and supports their overall growth and creativity.
        </p>

        {/* Objectives */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-3">Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">Enhance Communication Skills:</span> Improve public speaking, active listening, professional etiquette, and general communication abilities.</li>
            <li><span className="font-semibold">Foster Personality Development:</span> Provide a platform for students to develop their confidence and leadership qualities.</li>
            <li><span className="font-semibold">Promote Collaboration and Teamwork:</span> Encourage interaction among students with diverse backgrounds through various activities.</li>
            <li><span className="font-semibold">Support Creative Expression:</span> Offer opportunities for students to express themselves through writing, performance, and literary events.</li>
          </ul>
        </div>

        {/* Activities */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-3">Activities</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Workshops:</span> Conduct workshops on topics like public speaking, active listening, and interpersonal skills.
            </li>
            <li>
              <span className="font-semibold">Practice Sessions:</span> Host regular meetings for members to practice and refine their communication skills.
            </li>
            <li>
              <span className="font-semibold">Events:</span>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li><span className="font-semibold">Debates and Literary Discussions:</span> Enhancing critical thinking and verbal skills through discussions.</li>
                <li><span className="font-semibold">Storytelling and Performances:</span> Spaces for members to share stories and talents.</li>
                <li><span className="font-semibold">Special Theme Events:</span> Events around themes like Valentine's Day to encourage creativity and engagement.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Collaborative Projects:</span> Involve members in projects that require teamwork and communication.
            </li>
          </ul>
        </div>

        {/* How to Join */}
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-3">How to Join or Get Involved</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">Student Activity Center (SAC):</span> The Wordsworth Club is supported by the Student Activity Center at RTU.</li>
            <li><span className="font-semibold">Club Social Media:</span> Follow their social media accounts for updates on events, activities, and recruitment opportunities.</li>
            <li><span className="font-semibold">Attend Events:</span> Participate in club events to experience their activities firsthand and connect with members.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href="https://www.instagram.com/wordsworthclub/?hl=en"
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
