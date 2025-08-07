import { LogoutImage } from "../../assets";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const router = useNavigate();
  return (
    <header className="bg-white border border-gray-300 rounded-lg">
      <div className="flex items-center justify-between px-4 py-2 relative">
        <div className="bg-violet-700 rounded-full size-10 flex items-center justify-center">
          <p className="text-white font-medium">FS</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="font-semibold  bg-gradient-to-r from-red-700 to-indigo-600 bg-clip-text text-transparent">
            Frontend Developer
          </p>
          <div className="h-5 w-[1px] bg-gray-600"></div>
          <p className="font-semibold  bg-gradient-to-r from-red-700 to-indigo-600 bg-clip-text text-transparent">
            Software Developer
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <button
            className="bg-violet-700 rounded-full size-9 flex items-center justify-center cursor-pointer"
            onClick={() => router("/profile")}
          >
            <p className="text-white font-medium text-sm">FS</p>
          </button>
          <LogoutImage className="size-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
