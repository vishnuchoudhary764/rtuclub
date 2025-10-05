"use client";
import { useState } from "react";
import Link from "next/link";
const RegisterPage = () => {
 
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "User", 
    passkey : ""
  });
  const [message, setMessage] = useState("");
  

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };


  return (
    <div className="flex items-center justify-center text-black ">
      <div className=" bg-white p-10 rounded-2xl shadow-2xl w-110">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Register As</label>
          
             <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        >
          <option value="User">User</option>
          <option value="Coordinator">Coordinator</option>
        </select>

        {form.role === "Coordinator" && (
          <input
            type="password"
            name="passkey"
            placeholder="Enter Coordinator Passkey"
            value={form.passkey}
            onChange={handleChange}
            className="w-full p-2 mb-3 border rounded"
            required
          />
        )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}

        <p className="mt-4 text-center ">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
