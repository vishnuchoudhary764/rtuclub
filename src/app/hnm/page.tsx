export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-2">
      <div className="max-w-3xl w-full rounded-2xl p-8 space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          The Hunger No More (HNM) 
        </h1>

       
        <p className="text-gray-700 leading-relaxed text-justify">
          The Hunger No More (HNM) Club is a welfare foundation and club at
          <span className="font-semibold"> Rajasthan Technical University (RTU)</span> in Kota,
          focused on hunger relief and creating positive social impact. It was
          introduced to RTU&apos;s 2025 batch during their induction program to inform
          them about the club&apos;s vision, activities, and opportunities for
          participation in its projects and events.
        </p>

      
        <div>
          <h2 className="text-2xl font-semibold text-indigo-500 mb-3">Key Aspects</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Focus:</span> Hunger relief and social impact.
            </li>
            <li>
              <span className="font-semibold">Affiliation:</span> A club and welfare foundation at
              Rajasthan Technical University (RTU), Kota.
            </li>
            <li>
              <span className="font-semibold">Activities:</span> Organizes presentations to introduce
              its mission and initiatives to new students, encouraging them to
              participate in projects and events.
            </li>
            <li>
              <span className="font-semibold">Social Media:</span> Activities and engagement are
              sometimes highlighted on Instagram.
            </li>
          </ul>
        </div>

        
        <div className="text-center pt-4">
          <a
            href="https://www.instagram.com/reel/DNZ8bQBxOHz/"
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

