import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import { RowDataPacket } from "mysql2";

export async function POST(req: Request) {
  
  type User = RowDataPacket & {
  id: number;
  email: string;
  password: string;
  full_name:string;
  role:string;
};


  try {
    const { email, password } = await req.json();

    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "zxc@123",
      database: "sac",
    });
   
    // const rows: string | any[][] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    const [rows] = await db.execute<User[]>(
  "SELECT * FROM users WHERE email = ?",
  [email]
);

    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }


    // return NextResponse.json({ message: "Login successful", user },{ status: 200 });
    return NextResponse.json({
      message: "Login successful",

      user: { id: user.id, name: user.full_name, role: user.role },
    })

  }
  catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
