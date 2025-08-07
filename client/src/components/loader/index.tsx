import { Loader } from "lucide-react";

export const LoaderComponent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Loader className="animate-spin text-blue-500 size-1/4 " />
    </div>
  );
};
