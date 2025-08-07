import { InputComponent, SelectComponent } from "../../../components";
import type { Member } from "../../../types";

export const CustomerForm = ({
  customerDetails,
  setCustomerDetails,
  selectOptions,
}: {
  customerDetails: Member | null;
  setCustomerDetails?: (
    key: string,
    e:
      | {
          id?: string;
          name: string;
          phone: string;
          location: string;
          status: boolean;
        }
      | null
      | string
      | boolean,
  ) => void;
  selectOptions: { value: string; name: string }[];
}) => {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Customer Id</p>
        <InputComponent
          type="text"
          value={customerDetails?.id}
          onChange={(e) => setCustomerDetails?.("id", e.target.value)}
          className="w-full"
          placeholder="Enter Customer Id"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Customer Name</p>
        <InputComponent
          type="text"
          value={customerDetails?.name}
          onChange={(e) => setCustomerDetails?.("name", e.target.value)}
          className="w-full"
          placeholder="Enter Customer name"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Phone Number</p>
        <InputComponent
          type="text"
          value={customerDetails?.phone}
          onChange={(e) => setCustomerDetails?.("phone", e.target.value)}
          className="w-full"
          placeholder="Enter Phone Number"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Location</p>
        <InputComponent
          type="text"
          value={customerDetails?.location}
          onChange={(e) => setCustomerDetails?.("location", e.target.value)}
          className="w-full"
          placeholder="Enter Location"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Status</p>
        <SelectComponent
          selectItems={selectOptions}
          value={customerDetails?.status ? "active" : "inactive"}
          onValueChange={(value) =>
            setCustomerDetails?.("status", value === "active")
          }
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter Status"
          selectLabel="Status"
        />
      </div>
    </div>
  );
};
