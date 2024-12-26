import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";  // Import Outlet to render child routes

export const DashboardLayout = () => {
  return (
    <div className="flex flex-col rounded-none">
      <Header />
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto max-w-full bg-slate-100 h-[1074px] w-[1190px] max-md:mt-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
