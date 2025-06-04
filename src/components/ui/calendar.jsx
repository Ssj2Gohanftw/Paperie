// components/ui/calendar.jsx
"use client";
import "react-day-picker/src/style.module.css";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // <--- UNCOMMENT THIS
import { buttonVariants } from "@/components/ui/button"; // <--- You might need this if using buttonVariants
import { cn } from "@/lib/utils";
import { DayPicker } from "react-day-picker";
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const [selected, setSelected] = React.useState(new Date());
  return (
    <div className="flex flex-col items-center">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        className="w-full max-w-[300px] rounded-md border shadow-sm bg-white p-2"
        classNames={{
          root: "w-full",
          months: "flex-col",
          month: "space-y-2",
          month_caption: " justify-between items-center h-8 px-2", // Added px-2 for padding
          caption_label: "font-semibold text-sm lg:text-lg text-gray-800",
          // nav_button:
          //   "text-gray-600 hover:text-gray-900 p-1 w-6 h-6 flex items-center justify-center",
          month_grid: "w-full ",
          weekdays: "w-full",
          // weekday: "w-full  text-xs font-medium text-gray-600", // Use percentage for heads
          week: "w-full",
          // cell: "w-[14.28%] h-[40px] flex items-center justify-center",
          day: "items-center justify-center text-sm  hover:bg-blue-100 hover:rounded-full",
          selected: "pr-0 rounded-full bg-blue-600 text-white",
          today: "rounded-full pr-1 border-blue-200",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight className={cn("h-4 w-4", className)} {...props} />
          ),
        }}
        {...props}
      />
    </div>
  );
}

export { Calendar };
