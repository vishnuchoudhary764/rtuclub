
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();


      if (res.ok && data.user) {
        alert("Login successful!");

        localStorage.setItem("user", JSON.stringify(data.user))

        if (data.user.role === "User") {
          router.push("/dashboard/user");
        } else if (data.user.role === "Coordinator") {
          router.push("/dashboard/coordinator");
        } else {
          alert("Unknown role: " + data.user.role);
        }



      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Network error. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-gray-100 p-8  rounded-2xl shadow-2xl w-110">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
