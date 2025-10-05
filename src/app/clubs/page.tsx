import Link from 'next/link';
import Image from 'next/image';
const clubs = [
  {
    id: 1,
    rname: "gdsc",
    name: "Tech Club",
    description: "Explore coding, hackathons, and innovation with our technical team.",
    image: "gdsc.png",
  },
  {
    id: 2,
    rname: "nss",
    name: "Social Service Club",
    description: "Contribute to society by joining hands for social welfare activities.",
    image: "nss.jpeg",
  },
  {
    id: 3,
    rname: "robotics",
    name: "Robotics Club",
    description: "Communicate with others and get knowledge about current corporate",
    image: "robotics.jpeg",

  },
  {
    id: 4,
    rname: "iic",
    name: "Innovation club",
    description: "Communicate with others and get knowledge about current corporate",
    image: "iic.jpeg",
  },
  {
    id: 5,
    rname: "hnm",
    name: "HNM club",
    description: "Communicate with others and get knowledge about current corporate",
    image: "hnm.jpeg",
  },
  {
    id: 6,
    rname: "litrature",
    name: "Litrature club",
    description: "Communicate with others and get knowledge about current corporate",
    image: "litrature.jpeg",
  },
  {
    id: 7,
    rname: "music",
    name: "Music club",
    description: "Sing, play, and perform with fellow music enthusiasts.",
    image: "music.jpeg",

  },
  {
    id: 8,
    rname: "wordsWorth",
    name: "Word's Worth club",
    description: "Enhance communication skills,Foster Personality development.",
    image: "ww.jpeg",
  },
];

export default function Clubpage() {

  return (
    <div className="min-h-screen bg-white p-6 ">
      <h1 className="text-3xl text-indigo-500 font-bold text-center mb-10">Our Clubs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="bg-white rounded-2xl border-1 border-gray-300  shadow-lg hover:shadow-xl transition overflow-hidden"
          >
            <img height={20} width={20}
              src={club.image}
              alt={club.name}
              className="w-full p-4 object-cover object-center"
            />

            <div className="p-6 text-center">
              <h2 className="text-xl text-black font-semibold">{club.name}</h2>
              <p className=" mt-2 text-gray-700">{club.description}</p>

              <Link
                href={`/${club.rname}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

