import { Calendar, Home, Inbox, Settings, Edit } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Orders",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Edit",
    url: "#",
    icon: Edit,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
const AdminSidebar = () => {
  return (
    <Sidebar side="left">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[black] text-2xl">
            Paperie Goa
          </SidebarGroupLabel>
          <SidebarSeparator />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="mt-6" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
export default AdminSidebar;
