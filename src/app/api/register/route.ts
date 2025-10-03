
import { connectDB } from "@/lib/db";
import User from "@/models/NewUser";
import bcrypt from "bcryptjs";
import Error from "next/error";

export async function POST(req: Request) {
  try {
    const { fullName, email, password, role, passkey } = await req.json();

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
    }

    if (role === "Coordinator" && passkey !== process.env.PASSKEY) {
      return new Response(JSON.stringify({ error: "Invalid coordinator passkey" }), { status: 403 });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const newUser = new User({
      fullname: fullName,
      email,
      password: hashedPassword,
      role,
      passkey,
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User registered successfully!", userId: newUser._id }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration failed:", error);
    return new Response(JSON.stringify({ error: "Registration failed"}), { status: 500 });
  }
}
