"use client"
import { Calendar, MapPin, PlusCircle, Edit, Trash2 } from "lucide-react"

import { useEffect, useState } from "react"

type Event = {
  id: number
  title: string
  description: string
  event_date: string
  location: string
}

export default function EventsPage() {
   const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
  }, [])

 
  return (
    <div className=" p-8 md:px-25  m-auto">
      <div className="flex items-center justify-center pb-10 gap-4">
        <h1 className="text-2xl font-bold  text-center">🎉 Upcoming Events</h1>

      
      </div>

      <div className="space-y-4 mb-6  ">
        {events.length > 0 ? (
          events.map((ev) => (
            <div key={ev.id} className="p-7  grid grid-cols-1 md:grid-cols-4 bg-gray-100 rounded-2xl  shadow-2xl">
              <h2 className="text-xl font-semibold">{ev.title}</h2>
              <p className="text-gray-600">{ev.description}</p>
              <p className="flex items-center text-sm text-gray-500 gap-2">
                 <Calendar className="w-4 h-4" />
                 {new Date(ev.event_date).toDateString()}
              </p>
              <p className="flex items-center text-sm text-gray-500 gap-2"> 
                  <MapPin className="w-4 h-4" />
                 {ev.location}
                 </p>
            </div>
          ))
        ) : (
          <h1 className="text-red-500 text-7xl text-center">No events found.</h1>
        )}
      </div>


    </div>
  );
}
