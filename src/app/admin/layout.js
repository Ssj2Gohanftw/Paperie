import { AdminSidebar } from "@/components/ui/admin/admin-sidebar.jsx";

export default function AdminLayout({ children }) {
  return (
    <body className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </body>
  );
}
