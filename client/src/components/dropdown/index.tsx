import { cn } from "../../lib";
import { AvatarImage } from "../avatar";
import { LoaderComponent } from "../loader";

export interface DropDownComponentProps {
  menu?: {
    id?: string;
    name?: string;
    phone?: string;
    location?: string;
  }[];
  onSelectionChange?: (value: {
    id?: string;
    name?: string;
    phone?: string;
    location?: string;
  }) => void;
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  isFloating?: boolean;
  isLoading?: boolean;
}

export const DropDownComponent = ({
  menu,
  onSelectionChange,
  isOpen = false,
  setIsOpen,
  isFloating = false,
  isLoading = false,
}: DropDownComponentProps) => {
  return (
    <div className={cn("relative h-full", !isOpen && "hidden")}>
      <div
        className={cn(
          isFloating &&
            "border absolute w-full z-50 border-gray-300 shadow-xl rounded-lg flex flex-col overflow-y-scroll no-scroll bg-white h-52",
          !isFloating &&
            "border w-full z-50 border-gray-300 rounded-lg flex flex-col overflow-y-scroll no-scroll bg-white h-52",
        )}
      >
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <>
            {menu?.length === 0 ? (
              <div className="size-full flex justify-center items-center">
                <p className="text-gray-700 text-lg font-semibold">
                  No datas found
                </p>
              </div>
            ) : (
              <>
                {menu?.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className={cn(
                        "w-full px-2 py-3 text-sm font-semibold text-gray-800 border-b-gray-400 border-b cursor-default",
                        index === menu.length - 1 && "border-b-0",
                      )}
                    >
                      <div className="flex items-center justify-around">
                        <p className="font-semibold">{item.name}</p>
                        <p className="font-semibold">{item?.phone}</p>
                        <p className="font-semibold">{item?.location}</p>
                        <AvatarImage
                          className="size-6 cursor-pointer"
                          textClassName="text-sm"
                          onImageClick={() => {
                            onSelectionChange?.(item);
                            setIsOpen?.(false);
                          }}
                        >
                          {item.name ?? ""}
                        </AvatarImage>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
