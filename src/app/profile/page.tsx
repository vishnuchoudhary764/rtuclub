
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

export default function ProfilePage() {
  const [user, setUser] = useState<{ id: number; name: string; email: string; role: string } | null>(null)
  const router = useRouter()

 useEffect(() => {
    fetch("/api/me")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setUser(data.user))
      .catch(() => router.replace("/login"));
  }, [router]);

   const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });

    router.replace("/login"); 
  };

   if (!user) return  <div className='flex justify-center items-center h-100 '>
      <p className="text-red-500">Redirecting to login...</p>
    </div>


  return (
    <div className="p-7 flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
      
        <div className="flex items-center gap-4 mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
            alt={user.name}
            className="w-20 h-20 rounded-full border shadow-sm"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>

       
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-gray-600">Name</p>
            <p className="text-gray-800">{user.name}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">Email</p>
            <p className="text-gray-800">{user.email}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">Role</p>
            <p className="text-gray-800">{user.role}</p>
          </div>
        </div>

       
        <button
          onClick={handleLogout}
          className="mt-6 w-full hidden md:flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-xl shadow hover:bg-red-600 transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  )
}
