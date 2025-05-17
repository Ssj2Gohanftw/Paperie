// "use client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/ui/admin/admin-sidebar";
import CalendarSidebar from "@/components/ui/admin/calendar-sidebar";

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  const isAdmin = cookieStore.get("admin_auth")?.value === "true";

  // Protect all admin pages except /admin/login
  if (!isAdmin && typeof window === "undefined") {
    redirect("/admin/login");
  }

  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AdminSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
        <CalendarSidebar />
      </SidebarProvider>
    </>
  );
}
