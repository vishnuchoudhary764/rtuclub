
import Link from "next/link";

export default function Events({ events }) {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6 sticky top-0">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md  lg:mx-1  mx-10 rounded-2xl p-5 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.club}</p>
            <p className="mt-2 text-gray-700">
              📅 {new Date(event.date).toDateString()}
            </p>
            <p className="text-gray-600">📍 {event.location}</p>
            <p className="mt-2 text-gray-600 line-clamp-2">{event.description}</p>
            <Link
              href={`/events/${event.id}`}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
            >
              Participate
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
