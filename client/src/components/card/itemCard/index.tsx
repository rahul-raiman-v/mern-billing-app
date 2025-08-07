import { SquarePen, Trash2 } from "lucide-react";
import { ButtonComponent } from "../../button";
import { cn } from "../../..//lib";
import type { Items } from "../../../types";

export const ItemCard = ({
  item,
  isPreview = false,
  setModalOpen,
  onDelete,
  onEdit,
  handleAddButton,
}: {
  item: Items;
  isPreview?: boolean;
  setModalOpen?: (i: boolean) => void;
  onDelete?: (i: string) => void;
  onEdit?: (i: Items) => void;
  handleAddButton?: (item: Items) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 p-3 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 h-fit w-fit">
      <img
        src={item.image.trim() === "" ? "/sample.jpg" : item.image}
        alt="sample"
        className="h-24 w-44 rounded-lg"
      />
      <div className="flex justify-between items-center">
        <p className="font-semibold">{item.name}</p>
        <span className={cn("text-black font-semibold", isPreview && "hidden")}>
          ${item.price}
        </span>
      </div>
      <div className="flex items-center -ml-1">
        <svg
          className="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-300 ms-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
          5.0
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span
          className={cn("text-black font-semibold", !isPreview && "hidden")}
        >
          ${item.price}
        </span>
        <div className="flex items-center gap-x-1">
          <SquarePen
            className={cn(
              "text-gray-500 cursor-pointer",
              !isPreview && "hidden",
            )}
            onClick={() => {
              onEdit?.(item);
              setModalOpen?.(true);
            }}
          />
          <Trash2
            color="#c95d63"
            className={cn(" cursor-pointer", !isPreview && "hidden")}
            onClick={() => onDelete?.(item.id || "")}
          />
        </div>
        <div
          className={cn(
            "flex justify-end items-center w-full",
            isPreview && "hidden",
          )}
        >
          <ButtonComponent
            className="w-full"
            onClick={() => handleAddButton?.({ ...item, quantity: 1 })}
          >
            Add to Cart
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};
