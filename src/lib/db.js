import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "zxc@123",
  database: "sac",
});

export async function query(sql, values) {
  const [results] = await db.execute(sql, values);
  return results;
}
