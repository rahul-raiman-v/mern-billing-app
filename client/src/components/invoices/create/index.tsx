import { IndianRupee, Search, Trash2 } from "lucide-react";
import {
  ButtonComponent,
  DatePicker,
  DropDownComponent,
  InputComponent,
} from "../../../components";
import React from "react";
import type { Invoice, Items } from "../../../types";

interface InvoiceCreateComponentProps {
  invoice: Invoice;
  setInvoice: (
    key: string,
    value: string | Items | boolean | number | Date | Items[] | object,
  ) => void;
  onAddClient: () => void;
  onDelete: (itemId: string) => void;
  onClickAddItem: () => void;
}

export const InvoiveCreateComponent = ({
  invoice,
  setInvoice,
  onAddClient,
  onDelete,
  onClickAddItem,
}: InvoiceCreateComponentProps) => {
  const store = [
    {
      id: "1",
      name: "Frontend Developer",
      address: "Erode",
      contactNumber: "8586467465",
    },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  function handleQuantityChange(itemId: string, quantity: number) {
    if (isNaN(quantity)) {
      setInvoice(
        "items",
        invoice?.items.map((item) =>
          item.id === itemId ? { ...item, quantity: 0 } : item,
        ),
      );
    } else {
      setInvoice(
        "items",
        invoice?.items.map((item) =>
          item.id === itemId ? { ...item, quantity } : item,
        ),
      );
    }
  }
  function handleUnitPriceChange(itemId: string, price: number) {
    if (isNaN(price)) {
      setInvoice(
        "items",
        invoice?.items.map((item) =>
          item.id === itemId ? { ...item, price: 0 } : item,
        ),
      );
    } else {
      setInvoice(
        "items",
        invoice?.items.map((item) =>
          item.id === itemId ? { ...item, price } : item,
        ),
      );
    }
  }
  function handleFreeQuantityChange(itemId: string, freeQuantity: number) {
    if (isNaN(freeQuantity)) {
      setInvoice(
        "items",
        invoice?.items.map((item) =>
          item.id === itemId ? { ...item, freeQuantity: 0 } : item,
        ),
      );
    } else {
      setInvoice(
        "items",
        invoice?.items.map((item) =>
          item.id === itemId ? { ...item, freeQuantity } : item,
        ),
      );
    }
  }

  return (
    <div className="border border-gray-300 rounded-lg p-3 gap-y-3 flex flex-col bg-gray-100">
      <p className="font-semibold text-gray-700">Invoice Information</p>
      <div className="grid grid-cols-2 gap-x-3">
        <div className="flex flex-col gap-y-1">
          <p className="text-gray-700 font-medium text-sm">Invoive Number</p>
          <InputComponent
            placeholder="Enter invoice number"
            className="bg-white"
            value={invoice.invoiceNumber}
            onChange={(e) => setInvoice("invoiceNumber", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-gray-700 font-medium text-sm">Store</p>
          <div className="flex flex-col gap-y-1">
            <InputComponent
              startContent={<Search className="size-4 text-gray-700" />}
              placeholder="Enter invoice number"
              className="bg-white"
              value={invoice.store.name}
              onChange={(e) =>
                setInvoice("store", { ...invoice.store, name: e.target.value })
              }
              onClick={() => setIsOpen(true)}
            />
            <DropDownComponent
              menu={store}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isFloating
            />
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-x-3">
        <div className="flex flex-col gap-y-1 w-full">
          <p className="text-sm text-gray-700 font-medium">Date Issued</p>
          <DatePicker
            date={invoice.dateIssued}
            setDate={(date) => setInvoice("dateIssued", date)}
          />
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <p className="text-sm text-gray-700 font-medium">Due Date</p>
          <DatePicker
            date={invoice.dueDate}
            setDate={(date) => setInvoice("dueDate", date)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 font-semibold">Billed To</p>
          {invoice.client?.name?.trim() === "" && (
            <ButtonComponent onClick={onAddClient}>Add Client</ButtonComponent>
          )}
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-gray-700 font-medium text-sm">
            Client Information
          </p>
          <div className="border border-gray-400 p-2 rounded-lg flex items-center gap-x-3 bg-white">
            <div className="size-10 rounded-md bg-violet-500 flex items-center justify-center">
              <p className="text-lg font-semibold text-white">C</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">
                {invoice?.client?.name?.trim()
                  ? invoice?.client?.name
                  : "Customer Name"}
              </p>
              <p className="text-gray-700 text-sm">
                {invoice?.client?.phone?.trim()
                  ? invoice?.client?.phone
                  : "Phone Number"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-gray-700 font-semibold">Invoice Items</p>
        <div className=" flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2.5">
            <div className="grid grid-cols-10 gap-x-3">
              <p className="text-gray-700 font-semibold col-span-1">S.No</p>
              <p className="text-gray-700 font-semibold col-span-2">Item</p>
              <p className="text-gray-700 font-semibold col-span-2">Quantity</p>
              <p className="text-gray-700 font-semibold col-span-2">
                Free Quantity
              </p>
              <p className="text-gray-700 font-semibold col-span-2">
                Unit Price
              </p>
            </div>
            <div className="flex flex-col gap-y-3 h-[calc(100dvh-43rem)] overflow-auto scrollbar-tiny">
              {invoice.items.map((item, index) => {
                return (
                  <div key={item.id} className="grid grid-cols-10 gap-x-3">
                    <p className="border border-gray-300 p-2 rounded-md col-span-1 bg-white">
                      {index + 1}
                    </p>
                    <p className="border border-gray-300 p-2 rounded-md col-span-2 bg-white text-ellipsis overflow-hidden whitespace-nowrap">
                      {item.name}
                    </p>
                    <InputComponent
                      className="w-full bg-white col-span-2"
                      value={String(item.quantity)}
                      type="number"
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                    ></InputComponent>
                    <InputComponent
                      className="w-full bg-white col-span-2"
                      value={String(item.freeQuantity)}
                      type="number"
                      onChange={(e) =>
                        handleFreeQuantityChange(
                          item.id,
                          Number(e.target.value),
                        )
                      }
                    ></InputComponent>
                    <InputComponent
                      className="w-full bg-white col-span-2"
                      value={String(item.price)}
                      type="number"
                      onChange={(e) =>
                        handleUnitPriceChange(
                          item.id,
                          parseFloat(e.target.value),
                        )
                      }
                    ></InputComponent>
                    <div className="flex items-center justify-center ">
                      <Trash2
                        className="text-red-700 cursor-pointer"
                        onClick={() => onDelete(item.id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonComponent onClick={onClickAddItem}>Add Item</ButtonComponent>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full gap-x-5">
        <div className="flex flex-col gap-y-1 w-full">
          <p className="text-gray-700 font-medium text-sm">
            Discount&nbsp;<span className="text-gray-400">(Optional)</span>
          </p>
          <InputComponent
            startContent={<IndianRupee className="text-gray-600 size-4" />}
            placeholder="Enter discount amount"
            className="bg-white w-full"
            value={invoice.discount}
            onChange={(e) => setInvoice("discount", Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <p className="text-gray-700 font-medium text-sm">SalesMen</p>
          <InputComponent
            placeholder="Enter salesmen"
            className="bg-white w-full"
            value={invoice?.salesmen}
            onChange={(e) => setInvoice("salesmen", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
