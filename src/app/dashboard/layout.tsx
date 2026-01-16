import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies(); 
  const userCookie = cookieStore.get("user")?.value;

  if (!userCookie) {
    redirect("/login");
  }

   let user;
  try {
    user = JSON.parse(userCookie); 
   
  } catch (e) {
    console.error("Failed to parse user cookie:", e);
    redirect("/login");
  }


  return <>{children}</>;
}