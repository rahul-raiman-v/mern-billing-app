import type { Invoice } from "../../types";
import {
  AddItemsModal,
  InvoiceModal,
  InvoicePreviewComponent,
  InvoiveCreateComponent,
} from "../../components";
import { useCustomersStore, useItemsStore, useSalesStore } from "../../zustand";
import React from "react";

export const CreateSalesPage = () => {
  const { invoice, setInvoice } = useSalesStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isAddItemsModalOpen, setIsAddItemsModalOpen] = React.useState(false);
  const { getItems } = useItemsStore();
  const { customers, getCustomers, isLoading } = useCustomersStore();

  React.useEffect(() => {
    const subtotal = invoice.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setInvoice("subTotal", subtotal);
    setInvoice("grandTotal", subtotal - invoice.discount);
  }, [invoice.discount, invoice.items, setInvoice]);

  function handleClientChange(client: Invoice["client"]) {
    setInvoice("client", client);
  }

  function handleDeleteItems(itemId: string) {
    const fliteredItems = invoice.items.filter((item) => item.id !== itemId);
    setInvoice("items", fliteredItems);
  }
  const handleSavePreview = () => {
    console.log(invoice);
  };

  return (
    <div>
      <div className="border border-gray-300 rounded-lg bg-white p-4 grid grid-cols-2 gap-x-3">
        <InvoiveCreateComponent
          onDelete={handleDeleteItems}
          invoice={invoice}
          setInvoice={setInvoice}
          onAddClient={() => {
            getCustomers();
            setIsModalOpen(true);
          }}
          onClickAddItem={() => {
            setIsAddItemsModalOpen(true);
            getItems();
          }}
        />
        <InvoicePreviewComponent
          invoice={invoice}
          onSavePreview={handleSavePreview}
        />
      </div>
      <InvoiceModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        setClientChange={handleClientChange}
        customers={customers}
        isLoading={isLoading}
      />
      <AddItemsModal
        isOpen={isAddItemsModalOpen}
        setIsOpen={setIsAddItemsModalOpen}
        invoice={invoice}
        setInvoice={setInvoice}
      />
    </div>
  );
};
