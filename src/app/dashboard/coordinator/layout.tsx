import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CoordinatorLayout({
     children,

}:{ children: React.ReactNode;}) {
     const cookieStore = await cookies(); 
  const user = JSON.parse(cookieStore.get("user")?.value || "null");

  if (!user || user.role !== "Coordinator") {
    redirect("/login");
  }

  return children;
}
