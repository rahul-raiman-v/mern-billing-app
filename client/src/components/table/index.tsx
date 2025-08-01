import { cn } from "../../lib/utils";
import { SquarePen, Trash2 } from "lucide-react";
import React from "react";

export const TableComponent = ({
  tableHeaders,
  tableBody,
  onDelete,
  onEdit,
  noDatas = <></>,
  className = "",
}: {
  tableHeaders: string[];
  tableBody: {
    name: string;
    phone: string;
    location: string;
    designation?: string;
    status: boolean;
    id?: string;
  }[];
  onEdit?: (i: {
    name: string;
    phone: string;
    location: string;
    designation?: string;
    status: boolean;
    id?: string;
  }) => void;
  onDelete?: (employeeId: string) => void;
  noDatas?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("border rounded-lg border-gray-300 ", className)}>
      <div className="grid grid-cols-7 gap-x-2 px-3 py-4 rounded-lg bg-[#f2f3f7] ">
        {tableHeaders.map((header, idx) => {
          return (
            <p key={`${header}-${idx}`} className="text-gray-800 font-semibold">
              {header}
            </p>
          );
        })}
      </div>
      <div className=" h-full overflow-y-auto">
        {tableBody.length === 0 && (
          <div className="text-gray-500 flex flex-col items-center justify-center my-auto h-full font-semibold text-lg">
            {noDatas}
            <p className="text-gray-500 text-center">No Employees Found</p>
          </div>
        )}
        <div>
          {tableBody.map((employee, index) => {
            return (
              <div
                key={`${employee.name}-${index}`}
                className={cn("grid grid-cols-7 gap-x-2 p-3 border-b", {
                  "bg-gray-100": index % 2 !== 0,
                })}
              >
                {employee.id?.trim() !== "" && (
                  <p className="text-gray-800 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    {employee.id}
                  </p>
                )}
                {employee.name.trim() !== "" && (
                  <p className="text-gray-800 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    {employee.name}
                  </p>
                )}
                {employee.phone.trim() !== "" && (
                  <p className="text-gray-800 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    {employee.phone}
                  </p>
                )}
                {employee.location.trim() !== "" && (
                  <p className="text-gray-800 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    {employee.location}
                  </p>
                )}
                {employee.designation?.trim() !== "" ? (
                  <p className="text-gray-800 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    {employee.designation}
                  </p>
                ) : (
                  ""
                )}
                {employee.status !== null && (
                  <div className="flex items-center gap-x-2 border w-fit px-2 rounded-md border-gray-300">
                    <div
                      className={cn("size-1.5 rounded-full bg-green-500", {
                        "bg-red-500": !employee.status,
                      })}
                    ></div>
                    <p className="font-semibold text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap">
                      {employee.status ? "Active" : "Inactive"}
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-x-5">
                  <SquarePen
                    color="#546470"
                    className="cursor-pointer"
                    onClick={() => {
                      onEdit?.(employee);
                    }}
                  />
                  <Trash2
                    color="#c95d63"
                    className="cursor-pointer"
                    onClick={() => onDelete?.(employee.id || "")}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
