import { Search } from "lucide-react";
import {
  ButtonComponent,
  DropDownComponent,
  InputComponent,
} from "../../../components";
import React from "react";
import type { Member } from "../../../types";

export const InvoiceModal = ({
  isOpen,
  setIsOpen,
  setClientChange,
  customers,
  isLoading,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setClientChange: (client: {
    name?: string;
    phone?: string;
    location?: string;
    status?: boolean;
    id?: string;
  }) => void;
  customers?: Member[];
  isLoading?: boolean;
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredClients = customers?.filter((client) =>
    client.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  function handleSelectionChange(i: {
    name?: string;
    phone?: string;
    location?: string;
    status?: boolean;
    id?: string;
  }) {
    setClientChange(i);
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex
    justify-center items-center z-50 w-screen h-screen backdrop-blur-[2px]"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-96 w-full border border-gray-300 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-800">Select Client</p>
          <ButtonComponent variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </ButtonComponent>
        </div>
        <InputComponent
          startContent={<Search className="size-5 text-gray-700" />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <DropDownComponent
          menu={filteredClients}
          onSelectionChange={handleSelectionChange}
          isOpen={true}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
