import { Outlet } from "react-router-dom";
import Header from "./header";

export const Layout = () => {
  return (
    <div className="p-3 flex flex-col gap-y-4 bg-gray-100">
      <Header />
      <div>
        {/* This is where nested routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};
