
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, PlusCircle, Edit, Trash2 } from "lucide-react"

type Event = {
  id: number
  title: string
  description: string
  event_date: string
  location: string
}

export default function CoordinatorDashboardPage() {
  const [user, setUser] = useState<{ id: number; name: string; email: string; role: string } | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const router = useRouter()
  const [showForm, setShowForm] = useState(false);
 const [form, setForm] = useState({ title: "", description: "", event_date: "", location: "" })

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      if (parsedUser.role !== "Coordinator") {
        router.push("/dashboard/user") 
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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return alert("You must be logged in")

    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, role: user.role }),
    })

    const data = await res.json()
    alert(data.message || data.error)

    if (res.ok) {
      setEvents([...events, { id: events.length + 1, ...form }])
      setForm({ title: "", description: "", event_date: "", location: "" })
    }
  }
  if (!user) return <p className="p-6">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">👨‍💼 Coordinator Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}!</p>
        </div>

        <button
           onClick={() => setShowForm(true)}
          className="flex items-center gap-2 scale-80 bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700 transition"
        >
          <PlusCircle className="w-5 h-5" />
          Add Event
        </button>
      </div>
         {showForm && (
        <div className="mt-10 w-170 p-6 rounded-xl shadow-lg duration-700 bg-green-600 transform fixed top-45 left-70">
          <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
          <form onSubmit={(e) => { e.preventDefault();
            handleSubmit(e);
            setShowForm(false);
              }} className="space-y-4">
            <input

              type="text"
              placeholder="Title"
              className="w-full shadow-2xl  bg-white duration-100 outline-none focus:scale-105 p-2 rounded-xl "
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              placeholder="Organised by"
              className="w-full shadow-2xl  bg-white duration-100 outline-none focus:scale-105  p-2 rounded-xl"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
            <input
              type="date"
              className="w-full shadow-2xl  bg-white duration-100 outline-none focus:scale-105  p-2 rounded-xl "
              value={form.event_date}
              onChange={(e) => setForm({ ...form, event_date: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full shadow-2xl  bg-white duration-100 outline-none focus:scale-105  p-2 rounded-xl "
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
            <div className="flex justify-between px-10">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="p-2 bg-gray-500 text-white rounded-md hover:bg-blue-700"

              >
                Add Event
              </button>

            </div>

          </form>
        </div>
      )}

     
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">📌 Club-Profile</h2>
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        {/* <p><span className="font-semibold">Roll No.</span> {user.roll}</p>
        <p><span className="font-semibold">Club:</span> {user.club}</p> */}
        <p><span className="font-semibold">Role:</span> {user.role}</p>
      </div>
     

      
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">📅 My Events</h2>
        {events.length > 0 ? (
          <div className="space-y-4">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition grid grid-cols-1 md:grid-cols-5 gap-3 items-center"
              >
               
                 <h3 className="text-lg font-semibold text-gray-900">{ev.title}</h3>
                  <p className="text-sm text-gray-600">{ev.description}</p>
                <p className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(ev.event_date).toDateString()}
                </p>
                <p className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {ev.location}
                </p>
                <div className="flex gap-4 justify-start">
                  <button   className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-1 text-sm">
                    <Edit className="w-4 h-4" /> Edit
                  </button>
                  <button   className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-1 text-sm">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))}          </div>
        ) : (
          <p className="text-gray-500">No events created yet.</p>
        )}
      </div>
    </div>
  )
}

