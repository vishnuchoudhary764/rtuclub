"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, PlusCircle, Edit, Trash2 } from "lucide-react"
import { json } from "stream/consumers"

type Event = {
  _id: string;
  description: string;
  clubName: string;
  date: Date;
  location: string;
  CreatedBy: string;
}

export default function CoordinatorDashboardPage() {
  const [user, setUser] = useState<{ id: number; name: string; email: string; role: string } | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const router = useRouter()
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({description: "", clubName: "", date: "", location: ""})

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser);
         setLoading(false);

    } else {
      router.push("/login")
    }
  }, [router])

  useEffect(() => {
    
    const fetchEvents = async () => {
      
      try {
         const res = await fetch('/api/events');
        const data: Event[] = await res.json();
        setEvents(data);
      

      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
       
      }
    };

    fetchEvents();

  }, []);
  if (loading) return  <div className='flex justify-center items-center h-100 '>
      <img className='bg-transparent'  width={200} src="/loading.svg" alt="loading...." />
    </div>

  const handleEditClick = (ev: Event) => {
    setEditingEvent(ev);
    setShowForm(true);
    setForm({
      description: ev.description,
      clubName: ev.clubName,
      date: ev.date.toString().slice(0, 10),
      location: ev.location,
      // CreatedBy:ev.CreatedBy,
    
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  

    if (!user) return alert("You must be logged in");

    let res;
    if (editingEvent) {

      res = await fetch("/api/events", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingEvent._id, ...form}),
        
        
      });
    } else {
         
      res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form,CreatedBy:user.name }),
      
      });
    }

    const data = await res.json();
    
    alert(data.message || data.error);
   
   

    if (res.ok) {

      if (editingEvent) {
        setEvents(
          events.map((ev) =>
            editingEvent && ev._id === editingEvent._id
              ? {
                ...ev,
                description: form.description,
                clubName: form.clubName,
                location: form.location,
                CreatedBy: user.name,
                date: new Date(),
                
              }
              : ev
          )
        );
        setEditingEvent(null);
      } else {
        setEvents([...events, data]);
      }
      setForm({ description: "", clubName: "", date: "", location: ""});
      setShowForm(false);
    }
  };

  if (!user) return  <div className='flex justify-center h-100 '>
      <img className='bg-transparent'  width={70} src="loading.svg" alt="loading...." />
    </div>


  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const res = await fetch(`/api/events?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        setEvents(events.filter((ev) => ev._id !== id));
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete event");
    }
  };

  return (

    <div className="min-h-screen bg-white text-black py-10 px-6 md:px-20">

      <div className="flex items-center justify-between max-w-5xl mx-auto mb-8">
        <div className="flex items-center m-auto flex-col -mt-7">
          <p className="md:text-3xl text-2xl text-black font-bold"> Coordinator Dashboard</p>
          <p className="text-blue-500">Welcome back, {user.name}!</p>
        </div>
</div>
      {showForm && (
        <div className=" md:w-170 p-7  bg-blue-100 rounded-xl shadow-sm border border-gray-200 
        hover:shadow-lg transition left-0 m-6 fixed top-49 md:top-20 md:left-70">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">Add New Event</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
            setShowForm(false);
          }} className="space-y-4 text-blue-500">
            <input

              type="text"
              placeholder="Description"
              className="w-full shadow-lg bg-white duration-100 outline-none  p-2 rounded-xl "
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              required
            />
            <input
              placeholder="clubName"
              className="w-full shadow-lg  bg-white duration-100 outline-none  p-2 rounded-xl"
              value={form.clubName}
              onChange={(e) =>
                setForm({ ...form, clubName: e.target.value })
              }
              required
            />
            <input
              type="date"
              className="w-full shadow-lg  bg-white duration-100 outline-none  p-2 rounded-xl "
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value  })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full shadow-lg  bg-white duration-100 outline-none  p-2 rounded-xl "
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
           
            <div className="flex md:justify-between gap-10 px-10">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-white shadow-lg text-black px-2 md:py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-2 w-24 shadow-lg text-white rounded-lg bg-blue-500 hover:bg-blue-600 flex items-center gap-1 text-sm"

              >
                Add Event
              </button>

            </div>

          </form>
        </div>
      )}




      <div className="max-w-5xl mx-auto  text-black">
        <div className="flex justify-between items-center m-4  ">
            <p className="text-xl font-semibold text-center text-indigo-500">My Events</p>
        {!showForm && (  
          <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 scale-80 bg-green-600 text-white px-4 py-2 rounded-xl shadow
           hover:bg-green-700 transition"
        >
          <PlusCircle className="w-5 h-5" />
          Add 
        </button>
        )}
        </div>
      
        {events.length > 0 ? (
          <div className="space-y-4">
            {events.map((ev) => (
              <div
                key={ev._id}
                className="p-6 bg-white rounded-xl space-y-1 shadow-sm border border-gray-200 hover:shadow-lg transition
                 grid grid-cols-1  md:grid-cols-5  gap-1 items-center"
              >

                <h3 className="text-lg font-semibold ">{ev.description}</h3>
                <p className="text-sm ">{ev.clubName}</p>
                <p className="flex items-center gap- text-sm">
                  <Calendar className="w-4 h-4" />
                  {new Date(ev.date).toDateString()}
                </p>
                <p className="flex items-center gap-1 text-sm ">
                  <MapPin className="w-4 h-4" />
                  {ev.location}
                </p>
               
                <div className="flex gap-4 justify-start">
                  <button
                    onClick={() => handleEditClick(ev)}
                    className="px-3 py-1 bg-yellow-500  text-white rounded-lg hover:bg-blue-600 flex items-center gap-1 text-sm"
                  >
                    <Edit className="w-4 h-4" /> Edit
                  </button>

                  <button
                    onClick={() => handleDelete(ev._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-1 text-sm"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))}          </div>
        ) : (
          <p className="text-red-400">You created 0 events .</p>
        )}
      </div>
    </div>
  )
}

