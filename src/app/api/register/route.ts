import { db } from "../../../lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { fullName, email, password, role, passkey } = await req.json();


    const [rows] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return new Response(JSON.stringify({ error: "Email already registered" }), { status: 400 });
    }
    //  const key = process.env.PASS_KEY;
    if (role === "Coordinator" && passkey !== "vc@sac") {
     return Response.json({ error: "Invalid coordinator passkey" }, { status: 403 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const [result] = await db.query(
      "INSERT INTO users (full_name, email, password, role) VALUES (?, ?, ?, ?)",
      [fullName, email, hashedPassword, role]
    );

    // return new Response(
    //   JSON.stringify({ message: "User registered successfully!", userId: result.insertId }),
    //   { status: 201 }
    // );
    return new Response(
  JSON.stringify({ message: "User registered successfully!", userId: result.insertId || result[0]?.insertId }),
  { status: 201 }
);

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Registration failed" }), { status: 500 });
  }
}
