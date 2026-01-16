import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/NewUser";
import { connectDB } from "@/lib/db";
import { cookies } from "next/headers";


export async function POST(req: Request) {
  await connectDB();

  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    
    const userData = {
      id: user._id.toString(),
      name: user.fullname,
      email: user.email,
      role: user.role,
    };

    const res = NextResponse.json({ success: true });

    res.cookies.set("user", JSON.stringify(userData),
     { 
    httpOnly: true,       
    path: "/",
    maxAge: 60 * 60 * 12, 
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    });

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
