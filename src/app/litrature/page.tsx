export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-8 space-y-6">
        
        <h1 className="text-3xl font-bold text-center  text-indigo-600 bg-clip-text ">
          Literature Club RTU
        </h1>

        
        <p className="text-gray-700 leading-relaxed text-justify">
          Literature Club RTU is a thriving literary community at <span className="font-semibold">Rajasthan Technical University (RTU)</span> in Kota,
           India, dedicated to the love of written and spoken word. The club brings together students passionate about poetry, prose, 
           creative writing, storytelling, and critical literary analysis. Through book discussions, poetry slams, creative writing 
           workshops, and open mic events, Literature Club RTU creates a nurturing space where budding writers and literature enthusiasts 
           can express themselves, refine their craft, and engage in meaningful conversations about literature from diverse cultures and 
           time periods. The club celebrates both classic literary traditions and contemporary voices, fostering a deep appreciation for 
           the power of words.
        </p>

       
        <div>
          <h2 className="text-xl font-semibold bg-clip-text text-transparent mb-3">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li><span className="font-semibold">Book Club Discussions:</span> Monthly deep dives into classic and contemporary literature.</li>
            <li><span className="font-semibold">Creative Writing Workshops:</span> Develop your skills in poetry, fiction, essays, and storytelling.</li>
            <li><span className="font-semibold">Poetry Slams and Open Mics:</span> Platform to perform original works and spoken word pieces.</li>
            <li><span className="font-semibold">Literary Magazine:</span> Publish your writings in our annual student-run literary journal.</li>
            <li><span className="font-semibold">Author Talks:</span> Interact with published authors and learn about the writing journey.</li>
            <li><span className="font-semibold">Writing Competitions:</span> Participate in contests for short stories, poetry, and essays.</li>
            <li><span className="font-semibold">Theatre and Dramatics:</span> Explore dramatic literature through script reading and performances.</li>
            <li><span className="font-semibold">Literary Festivals:</span> Annual celebration featuring readings, performances, and panel discussions.</li>
          </ul>
        </div>

        <div className="text-center pt-4 space-x-4">
          <a
            href="https://www.instagram.com/literatureclub_rtu/"
            target="_blank"
            rel="noopener noreferrer"
           className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Follow Us on Instagram
          </a>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-6 text-center">
          <p className="text-gray-800 font-medium mb-2">
            ✍️ Where words come alive and stories unfold ✍️
          </p>
          <p className="text-gray-600 text-sm">
            Join us to explore the magic of literature, share your voice, and connect with fellow word lovers
          </p>
        </div>
      </div>
    </div>
  );
}