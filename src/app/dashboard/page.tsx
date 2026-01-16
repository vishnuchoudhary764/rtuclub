// app/dashboard/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
 
 const cookieStore = await cookies(); 
  const userCookie = cookieStore.get("user")?.value || "null";
  
  if (!userCookie) redirect("/login");

  let user;
  try {
    user = JSON.parse(userCookie);
  } catch (e) {
    console.error("Failed to parse user cookie:", e);
    redirect("/login");
  }

  
 
  if (user.role === "Coordinator") {
    redirect("/dashboard/coordinator");
  } else if (user.role === "User") {
    redirect("/dashboard/user");
  }

  return <div>Loading...</div>; 
}
