
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

type Event = {
  id: number
  title: string
  description: string
  event_date: string
  location: string
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
        router.push("/profile") 
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
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
     
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">🎯 User Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}!</p>
        </div>
        <button
          onClick={() => router.push("/events")}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition"
        >
          <ArrowRight className="w-5 h-5" />
          Explore Events
        </button>
      </div>

     
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">📌 Profile Summary</h2>
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        {/* <p><span className="font-semibold">Email:</span> {user.email}</p> */}
        <p><span className="font-semibold">Role:</span> {user.role}</p>
      </div>

     
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">📅 My Registered Events</h2>
        {events.length > 0 ? (
          <div className="space-y-4">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition grid grid-cols-1 md:grid-cols-3 gap-3 items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{ev.title}</h3>
                  <p className="text-sm text-gray-600">{ev.description}</p>
                </div>
                <p className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(ev.event_date).toDateString()}
                </p>
                <p className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {ev.location}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You haven’t joined any events yet. 🚀</p>
        )}
      </div>
    </div>
  )
}
