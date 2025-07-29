import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { SelectComponent } from "../orders/selectComponent";
import { cn } from "../../lib/utils";

export const PaginationComponent = ({
  limit,
  setLimit,
  totalRecords,
  currentPage,
  setCurrentPage,
}: {
  limit?: string;
  setLimit?: (i: string) => void;
  totalRecords?: number;
  currentPage: number;
  setCurrentPage: (i: number) => void;
}) => {
  const selectOptions: { value: string; name: string }[] = [
    {
      value: "10",
      name: "10 Rows",
    },
    {
      value: "20",
      name: "20 Rows",
    },
    {
      value: "50",
      name: "50 Rows",
    },
  ];
  const pageNumber = Math.ceil(
    (totalRecords || 0) / (parseInt(limit || "10", 10) || 10),
  );

  const pages = [...Array(pageNumber).keys()].map((i) => i + 1);

  return (
    <div className="flex itcems-center justify-between">
      <div className="flex justify-between items-center bg-white ">
        <div className="flex items-center gap-x-3">
          <span className="text-gray-600 text-sm font-medium whitespace-nowrap">
            Rows per page:
          </span>
          <SelectComponent
            placeholder="Rows"
            value={limit}
            onValueChange={(e) => setLimit?.(e)}
            initialValue="10"
            selectLabel="Rows"
            className="border-gray-400"
            selectItems={selectOptions}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <CircleArrowLeft
          size={22}
          className="cursor-pointer"
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        />
        {pages.map((page, index) => {
          return (
            <p
              key={page}
              className={cn(
                "font-semibold px-2 py-0.5 rounded-md text-gray-500",
                {
                  "border-blue-500 border text-blue-500":
                    currentPage === index + 1,
                },
              )}
            >
              {page}
            </p>
          );
        })}
        <CircleArrowRight
          size={22}
          className="cursor-pointer"
          onClick={() => {
            if (currentPage < pageNumber) {
              setCurrentPage(currentPage + 1);
            }
          }}
        />
      </div>
    </div>
  );
};
