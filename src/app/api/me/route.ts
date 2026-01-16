// app/api/me/route.ts
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    return Response.json({ user: null }, { status: 401 });
  }

  const user = JSON.parse(userCookie.value);
  return Response.json({ user });
}
