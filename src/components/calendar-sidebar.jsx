import * as React from "react";
import { Plus } from "lucide-react";
import { Calendar } from "./ui/calendar";
// import { DatePicker } from "@/components/date-picker";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export function CalendarSidebar({ ...props }) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky lg:flex top-0 h-svh border-l w-[350px] bg-white"
      {...props}
    >
      <SidebarContent className="p-4">
        <Calendar />
        {/* <SidebarSeparator className="mx-0" /> */}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
