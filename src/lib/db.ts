// import mysql from "mysql2/promise";

// export const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "zxc@123",
//   database: "sac",
// });

// export async function query(sql, values) {
//   const [results] = await db.execute(sql, values);
//   return results;
// }

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your .env file");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log(" MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection failed", error);
    throw error;
  }
}
