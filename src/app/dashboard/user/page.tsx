
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

type Event = {
  _id: string;
  description: string;
  clubName: string;
  date: Date;
  location: string;

}

export default function UserDashboardPage() {
  const [user, setUser] = useState<{ id: number; name: string; email: string; role: string } | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      if (parsedUser.role !== "User") {
        router.push("/dashboard/coordinator")
      } else {
        setUser(parsedUser)
      }
    } else {
      router.push("/login")
    }
  }, [router])


  useEffect(() => {

    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
  }, [])

  if (!user) return <p className="p-6 ">Loading...</p>

  return (
    <div className="min-h-scree text-black py-10 px-6 md:px-20">
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-8">
        <div className="flex items-center m-auto flex-col -mt-7">
          <p className="md:text-3xl text-2xl text-black font-bold">User Dashboard</p>
          <p className="text-blue-500">Welcome back, {user.name}!</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center m-4 ">
          <p className="text-xl font-semibold text-center text-indigo-500">My Registered Events</p>
          <button
            onClick={() => router.push("/events")}
            className="flex items-center gap-2 bg-green-600 text-white p-2 rounded-xl shadow hover:bg-green-700 transition"
          >
            All
             <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {events.length > 0 ? (
          <div className="space-y-4 grid  gap-5">
            {events.map((ev) => (
              <div
                key={ev._id}
                className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg 
                transition grid grid-cols-1 md:grid-cols-2 gap-3 items-center "
              >

                <h3 className="text-lg font-semibold text-indigo-500">{ev.description}</h3>
                <p className="text-sm ">{ev.clubName}</p>

                <p className="flex items-center gap-1 text-sm ">
                  <Calendar className="w-4 h-4" />
                  {new Date(ev.date).toDateString()}
                </p>
                <p className="flex items-center gap-1 text-sm ">
                  <MapPin className="w-4 h-4" />
                  {ev.location}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-center">You haven’t joined any events yet. 🚀</p>
        )}
      </div>
    </div>
  )
}
