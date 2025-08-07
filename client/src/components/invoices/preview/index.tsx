import type { Invoice } from "../../../types";
import { ButtonComponent } from "../../button";
import { Eye } from "lucide-react";

export const InvoicePreviewComponent = ({
  invoice,
  onSavePreview,
}: {
  invoice: Invoice;
  onSavePreview: () => void;
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-3 bg-gray-100 flex flex-col gap-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <div className="border border-gray-300 p-1 rounded-md bg-white">
            <Eye className="text-gray-600 cursor-pointer size-5" />
          </div>
          <p className="font-semibold text-gray-700">Preview</p>
        </div>
        <ButtonComponent onClick={onSavePreview}>Save Invoice</ButtonComponent>
      </div>
      <div className="border border-gray-400 rounded-lg">
        <div className="bg-white  p-5  flex flex-col gap-y-4 h-[calc(100dvh-13.2rem)] overflow-y-scroll no-scroll">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Invoice</p>
              <p className="text-gray-500 text-sm">
                Invoive Number #{invoice.invoiceNumber}
              </p>
            </div>
            <div className="bg-violet-500 size-10 flex items-center justify-center rounded-full ">
              <p className="text-white font-semibold text-lg">
                {invoice.store.name.charAt(0).trim() !== ""
                  ? invoice.store.name.charAt(0)
                  : "F"}
              </p>
            </div>
          </div>
          <hr className="border-gray-400" />
          <div className="grid grid-cols-2 items-center ">
            <div>
              <p className="text-gray-600 font-medium text-sm">Billed By:</p>
              <p className="font-semibold">
                {invoice.store.name.trim() !== ""
                  ? invoice.store.name
                  : "Frontend"}
              </p>
              <p className="text-gray-600 font-medium text-sm">
                {invoice.store.address.trim() !== ""
                  ? invoice.store.address
                  : "address..."}
              </p>
              <p className="text-gray-600 font-medium text-sm">
                {invoice.store.contactNumber.trim() !== ""
                  ? invoice.store.contactNumber
                  : "phone..."}
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-medium text-sm">Billed To:</p>
              <p className="font-semibold">
                {invoice.client.name?.trim() !== ""
                  ? invoice.client.name
                  : "Frontend"}
              </p>
              <p className="text-gray-600 font-medium text-sm">
                {invoice.client.location?.trim() !== ""
                  ? invoice.client.location
                  : "address..."}
              </p>
              <p className="text-gray-600 font-medium text-sm">
                {invoice.client.phone?.trim() !== ""
                  ? invoice.client.phone
                  : "phone..."}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div>
              <p className="text-gray-600 text-sm font-medium">Date Issued:</p>
              <p className="font-semibold">
                {invoice.dateIssued.toDateString()}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">Due Date:</p>
              <p className="font-semibold">{invoice.dueDate.toDateString()}</p>
            </div>
          </div>
          <hr className="border-gray-400" />
          <div className="flex flex-col gap-y-3">
            <p className="text-gray-500">Invoice Details</p>
            <div className="flex flex-col gap-y-3">
              <div className="grid grid-cols-[repeat(18,1fr)]  border border-gray-400 p-3 rounded-t-md bg-gray-200">
                <p className="col-span-1 font-semibold text-sm">S.No</p>
                <p className="col-span-5 font-semibold text-sm">Items</p>
                <p className="font-semibold text-sm col-span-3 ">Quantity</p>
                <p className="font-semibold text-sm col-span-3">
                  Free Quantity
                </p>
                <p className="font-semibold text-sm col-span-3">Unit Price</p>
                <p className="font-semibold text-sm col-span-3">Total</p>
              </div>
              {invoice.items.map((item, index) => {
                return (
                  <div key={item.id} className="flex flex-col gap-y-2">
                    <div className="grid grid-cols-[repeat(18,1fr)] px-3">
                      <p className="col-span-1 font-semibold text-sm">
                        {index + 1}
                      </p>
                      <p className="col-span-5 font-semibold text-sm pl-2">
                        {item.name}
                      </p>
                      <p className="font-semibold text-sm col-span-3 pl-6">
                        {item.quantity}
                      </p>
                      <p className="font-semibold text-sm col-span-3 pl-3">
                        {item.freeQuantity}
                      </p>
                      <p className="font-semibold text-sm col-span-3 pl-3">
                        {item.price}
                      </p>
                      <p className="font-semibold text-sm col-span-3 pl-3">
                        {item.quantity * item.price}
                      </p>
                    </div>
                    <hr className="border-gray-400" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm ">Subtotal</p>
              <p className="text-sm ">{invoice.subTotal}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm ">Discount</p>
              <p className="text-sm ">{invoice.discount}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Grand Total</p>
              <p className="text-sm font-semibold">{invoice.grandTotal}</p>
            </div>
          </div>
          <div className="">
            <div className="border border-gray-400 p-3 bg-neutral-200 rounded-lg">
              <p className="font-semibold">Notes</p>
              <div className="flex items-center gap-x-2">
                <div className="bg-neutral-500 size-1.5 rounded-full"></div>
                <p className="text-neutral-500">
                  Payment is due by {invoice?.dueDate.toDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">{invoice.store.name}</p>
            <p className="text-gray-600">{invoice.store.contactNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
