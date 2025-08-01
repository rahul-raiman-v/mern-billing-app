import React from "react";
import { Input } from "../ui";
import { CircleX } from "lucide-react";
import { ButtonComponent } from "../button";

export const ItemsDrawer = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="">
      <ButtonComponent
        className="whitespace-nowrap"
        onClick={() => setOpen(true)}
      >
        Add Item
      </ButtonComponent>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-20 z-40 flex items-center justify-center">
          <div
            className={`fixed h-full w-full top-0 right-0 bg-white shadow-2xl transform transition-transform duration-300 z-50 sm:w-[460px] p-3 ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex items-center justify-between mb-4 px-2">
              <h2 className="text-xl font-bold mb-4 text-gray-700">
                Add Items
              </h2>
              <CircleX
                className="cursor-pointer"
                size={32}
                color="#ff0000"
                absoluteStrokeWidth
                onClick={() => setOpen(false)}
              />
            </div>
            <div>
              <Input placeholder="Search Item" className="w-full mb-4" />
            </div>
            {/* <div className="flex flex-wrap gap-4">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};
