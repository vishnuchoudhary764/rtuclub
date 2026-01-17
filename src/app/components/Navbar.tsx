"use client";

import Link from "next/link";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Home,
  Users,
  Calendar,
  User,
  LayoutDashboard,
  Menu,
  X,
  LogOut,
} from "lucide-react";

type UserType = {
  id: string;
  name: string;
  email: string;
  role: "Coordinator" | "User";
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [activeTab, setActiveTab] = useState("home");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUser(data?.user || null))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/login");
  };
  const menuItems = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "clubs", icon: Users, label: "Clubs", path: "/clubs" },
    { id: "events", icon: Calendar, label: "Events", path: "/events" },
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { id: "profile", icon: User, label: "Profile", path: "/profile" },

  ];

  const handleNavigation = (id: SetStateAction<string>, path: string) => {
    setActiveTab(id);
    setIsSidebarOpen(false);
    router.push(path)
  };

  return (
    <div className="flex sticky z-1000 top-0 justify-evenly flex-col lg:flex-row gap-6 md:gap-0 mb-1 bg-blue-500 text-white md:text-black  md:bg-white/1 md:backdrop-blur-sm shadow-sm ">

      <div className="flex  md:flex-col justify-center px-10 items-center  gap-5 lg:flex-row">

        <img className="rounded-full md:h-20 md:w-20 h-20 w-20 brightness-0 invert md:invert-0" src="image1.png" alt="Logo" />



      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bg-white/80 backdrop-blur-md shadow-sm z-50 inline-block rounded-4xl bottom-4 right-4  p-3"
      >
        {isSidebarOpen ? <X className="text-red-500 " /> : <Menu className="text-blue-500" />}
      </button>

      <ul className="hidden md:flex text-xl items-center gap-10">
        <Link href="/" className={pathname === "/" ? "font-bold text-blue-500" : ""}>Home</Link>
        <Link href="/clubs" className={pathname === "/clubs" ? "font-bold text-blue-500" : ""}>Clubs</Link>
        <Link href="/events" className={pathname === "/events" ? "font-bold text-blue-500" : ""}>Events</Link>
        <Link href="/dashboard" className={pathname === "/dashboard/coordinator" ? "font-bold text-blue-500" : pathname === "/dashboard/user" ? "font-bold text-blue-500" : ""}>Dashboard</Link>

        <Link href="/profile" className={pathname === "/profile" ? "font-bold text-blue-500" : ""}> <User /></Link>




      </ul>


      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-white/10 backdrop-blur-md z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed md:hidden top-0 lg:relative z-40 h-screen w-64 bg-white transition-transform duration-300
        ${isSidebarOpen ? "translate-x-25" : "translate-x-110  lg:translate-x-0"}`}
      >
        <nav className="p-4 mt-18">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id, item.path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition
                    ${active
                        ? "bg-blue-400 text-white"
                        : "text-gray-700 hover:bg-blue-50"
                      }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {user && (<div className="absolute text-center bottom-20  w-full p-4 ">

          <>
            <p className="text-sm text-gray-500  font-semibold">{user.name}</p>
            <p className="text-xs text-gray-500 mb-3">{user.email}</p>

            <button
              onClick={() => {
                handleLogout();
                setIsSidebarOpen(false);
                setUser(null);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              <LogOut size={16} />
              Logout
            </button>


          </>

        </div>)}
      </aside>
    </div>
  );
};

export default Navbar;
