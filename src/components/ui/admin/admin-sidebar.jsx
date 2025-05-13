import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const adminLinks = [
  {
    id: 1,
    link: "/admin",
    sectionName: "Dashboard",
  },
  {
    id: 2,
    link: "/admin/products",
    linkName: "Products",
  },
  {
    id: 1,
    link: "/admin/orders",
    linkName: "Paperie Admin",
  },
];
import { Home, Package, Users, Settings, Menu, X } from "lucide-react";

const AdminSidebar = () => {
  return (
    <SidebarProvider defaultOpen>
      {/* Mobile trigger */}
      <SidebarTrigger className="md:hidden fixed top-4 left-4 z-50" />

      {/* The Sidebar itself */}
      <Sidebar className="bg-white border-r hidden md:flex md:flex-col">
        <SidebarHeader>
          <Link href="/admin">
            <h1 className="text-xl font-bold">Paperie Admin</h1>
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/admin">
                      <Home className="mr-2 h-5 w-5" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/admin/products">
                      <Package className="mr-2 h-5 w-5" />
                      <span>Products</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/admin/orders">
                      <Users className="mr-2 h-5 w-5" />
                      <span>Orders</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/admin/settings">
                      <Settings className="mr-2 h-5 w-5" />
                      <span>Site Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="mt-auto text-sm text-gray-500 p-4">
          © {new Date().getFullYear()}
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};
export { AdminSidebar };
