import { Outlet } from "react-router-dom";
import Header from "./header";
import { Sidebar } from "./sidebar";

export const Layout = () => {
  return (
    <div className="p-3 flex flex-col gap-y-4 bg-gray-100">
      <Header />
      <div className="flex gap-x-3 ">
        <Sidebar />
        {/* This is where nested routes will be rendered */}
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
