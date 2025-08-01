import { cn } from "../../lib/utils";
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isProfile, setIsProfile] = React.useState(false);
  const url = window.location.href.split("/")[3];
  const router = useNavigate();
  return (
    <header className="bg-white border border-gray-300 rounded-lg">
      <div className="flex items-center justify-between px-4 py-2 relative">
        <div className="flex items-center gap-x-3">
          <div className="bg-violet-700 rounded-full size-10 flex items-center justify-center">
            <p className="text-white font-medium">FS</p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="font-semibold text-sm bg-gradient-to-r from-red-700 to-indigo-600 bg-clip-text text-transparent">
              Frontend Developer
            </p>
            <div className="h-5 w-[1px] bg-gray-600"></div>
            <p className="font-semibold text-sm bg-gradient-to-r from-red-700 to-indigo-600 bg-clip-text text-transparent">
              Software Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          {url === "settings" && (
            <LayoutDashboard
              className="text-gray-600 cursor-pointer"
              onClick={() => router("/")}
            />
          )}
          {url !== "settings" && (
            <Settings
              className="text-gray-600 cursor-pointer"
              onClick={() => router("/settings")}
            />
          )}
          <button
            className="bg-violet-700 rounded-full size-9 flex items-center justify-center cursor-pointer"
            onClick={() => setIsProfile(!isProfile)}
          >
            <p className="text-white font-medium text-sm">FS</p>
          </button>
        </div>
        <div
          className={cn(
            "px-4 py-3 border border-gray-400 rounded-lg absolute top-16 right-2 bg-white hidden",
            isProfile && "block",
          )}
        >
          <div className="flex flex-col gap-y-3">
            <button
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => {
                setIsProfile(false);
                router("/profile");
              }}
            >
              <User className="size-5 text-gray-600" />
              <span className="font-semibold text-sm text-gray-600">
                Profile
              </span>
            </button>
            <button
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => setIsProfile(false)}
            >
              <LogOut className="size-5 text-red-600" />
              <span className="font-semibold text-sm text-red-600">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
