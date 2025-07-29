import { SelectComponent } from "../../components/orders/selectComponent";
import { ItemsTable } from "../../components/orders/itemsTable";
import { ItemsDrawer } from "../../components/orders/itemsDrawer";
import React from "react";
import { BillModal } from "../../components/orders/billModal";
import { ButtonComponent } from "../../components/button";

export const OrderPage = () => {
  const customers: { name: string; value: string }[] = [
    {
      name: "Rahul",
      value: "rahul",
    },
  ];
  const [isModal, setIsModal] = React.useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div></div>
        <p className="text-2xl font-bold text-center text-gray-700">
          Order Page
        </p>
        <ButtonComponent
          className=""
          variant="secondary"
          onClick={() => setIsModal(true)}
        >
          Save
        </ButtonComponent>
      </div>
      <div className="flex flex-row gap-2">
        <SelectComponent
          selectItems={customers}
          placeholder="Search Customer"
          selectLabel="Customers"
        />
        <SelectComponent placeholder="Select Salesmen" selectLabel="Salesmen" />
        <SelectComponent placeholder="Search Store" selectLabel="Store" />
        <ItemsDrawer />
      </div>
      <div>
        <ItemsTable />
      </div>
      <BillModal isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};
