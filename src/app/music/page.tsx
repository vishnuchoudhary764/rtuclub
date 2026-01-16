export default function page() {
  return (
    <div className="min-h-screen  flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-indigo-500">
          Music Club RTU
        </h1>

        
        <p className="text-gray-700 leading-relaxed text-justify">
          Music Club RTU is a vibrant student community at <span className="font-semibold">Rajasthan Technical University (RTU)</span> in Kota,
           India, dedicated to celebrating and nurturing musical talent across all genres. From classical Indian ragas to contemporary 
           rock, pop, and electronic music, the club provides a creative platform for students to explore their passion for music, 
           develop their skills, and perform for diverse audiences. Through regular jam sessions, workshops with professional musicians, 
           open mic nights, and annual music festivals, Music Club RTU creates a harmonious blend of learning and entertainment while 
           fostering a strong sense of community among music enthusiasts on campus.
        </p>

       
        <div>
          <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li><span className="font-semibold">Diverse Musical Genres:</span> Classical, Rock, Pop, Jazz, Electronic, Folk, and Fusion.</li>
            <li><span className="font-semibold">Regular Jam Sessions:</span> Collaborative space for musicians to create and improvise together.</li>
            <li><span className="font-semibold">Workshops and Masterclasses:</span> Learn from professional artists and industry experts.</li>
            <li><span className="font-semibold">Performance Opportunities:</span> Showcase your talent at open mics, college fests, and concerts.</li>
            <li><span className="font-semibold">Music Production Training:</span> Basics of recording, mixing, and digital music production.</li>
            <li><span className="font-semibold">Annual Music Festival:</span> Flagship event featuring performances, competitions, and guest artists.</li>
            <li><span className="font-semibold">Instrument Training:</span> Guidance for beginners on guitar, keyboard, drums, vocals, and more.</li>
            <li><span className="font-semibold">Collaborative Projects:</span> Form bands, create original compositions, and record music together.</li>
          </ul>
        </div>

        <div className="text-center pt-4 space-x-4">
          <a
            href="https://www.instagram.com/musicclub_rtu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
           >
             Follow Us on Instagram
          </a>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 text-center">
          <p className="text-gray-800 font-medium mb-2">
            🎵 Join us and let your musical journey begin! 🎵
          </p>
          <p className="text-gray-600 text-sm">
            Whether you're a seasoned performer or just starting out, there's a place for you in Music Club RTU
          </p>
        </div>
      </div>
    </div>
  );
}