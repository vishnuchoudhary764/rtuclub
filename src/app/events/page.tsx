"use client"
import { Calendar, MapPin} from "lucide-react"

import { useEffect, useState } from "react"

type Event = {
   _id: string; 
   description: string;
  clubName: string;
  date: Date;
  location: string;
  CreatedBy:string;
}

export default function EventsPage() {
   const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        const data: Event[] = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <h1 className="text-center text-xl mt-40">Loading events...</h1>;
  return (
    <div className=" p-8 md:px-25  m-auto">
      <div className="flex items-center justify-center pb-10 gap-4">
        <h1 className="text-2xl font-bold  text-center">🎉 Upcoming Events</h1>

      
      </div>

      <div className="space-y-4 mb-6  ">
        {events.length > 0 ? (
          events.map((ev) => (
            <div key={ev._id} className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition grid grid-cols-1 md:grid-cols-5 gap-1 items-center">
              <h2 className="text-xl font-semibold">{ev.description}</h2>
              <p className="text-gray-600">{ev.description}</p>
              <p className="flex items-center text-sm text-gray-500 gap-2">
                 <Calendar className="w-4 h-4" />
                 {new Date(ev.date).toDateString()}
              </p>
              <p className="flex items-center text-sm text-gray-500 gap-2"> 
                  <MapPin className="w-4 h-4" />
                 {ev.location}
                 </p>
                  <p className="flex items-center text-sm text-gray-500 gap-2"> 
                 CreatedBy :  {ev.CreatedBy}
                 </p>
            </div>
          ))
        ) : (
          <h1 className="text-red-500 text-7xl text-center"></h1>
        )}
      </div>


    </div>
  );
}
