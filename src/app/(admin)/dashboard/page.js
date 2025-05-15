import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div className="p-5 space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Welcome!</h2>
          <p className="text-gray-700">
            This is your dashboard. Here you can see an overview of your system.
          </p>
          <Button className="mt-4  font-bold py-2 px-4 rounded">
            Check me out later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
