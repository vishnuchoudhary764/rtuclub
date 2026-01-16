
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/NewUser";
import { connectDB } from "@/lib/db";

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
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Login successful",
      user: { id: user.id, name: user.fullname, role: user.role ,email:user.email},
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
