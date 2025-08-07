import { Search } from "lucide-react";
import React from "react";
import type { Invoice, Items, Member } from "../../../types";
import { useItemsStore } from "../../../zustand";
import { ButtonComponent, InputComponent, ItemCard } from "../../../components";

interface AddItemsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setInvoice?: (
    key: string,
    value: string | Items | boolean | number | Date | Member | Items[],
  ) => void;
  invoice?: Invoice;
}

export const AddItemsModal = ({
  isOpen,
  setIsOpen,
  setInvoice,
  invoice,
}: AddItemsModalProps) => {
  const { items } = useItemsStore();
  const [searchQuery, setSearchQuery] = React.useState("");

  if (!isOpen) return null;

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function handleAddButton(item: Items) {
    if (invoice?.items.some((i) => i.id === item.id)) {
      setInvoice?.(
        "items",
        invoice?.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
    } else {
      setInvoice?.("items", [...(invoice?.items || []), item]);
    }
    setIsOpen(false);
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 w-screen h-screen backdrop-blur-[2px]">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full border border-gray-300 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg text-gray-800">Items</p>
          <ButtonComponent variant="secondary" onClick={() => setIsOpen(false)}>
            Close
          </ButtonComponent>
        </div>
        <InputComponent
          startContent={<Search className="size-4 text-gray-700" />}
          placeholder="Search Items"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="grid grid-cols-3 gap-4 h-60 overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              return (
                <ItemCard
                  item={item}
                  key={item.id}
                  handleAddButton={handleAddButton}
                />
              );
            })
          ) : (
            <div className="size-full col-span-3 flex justify-center items-center">
              <p className="text-gray-700 text-lg font-semibold">
                {" "}
                No items Found{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
