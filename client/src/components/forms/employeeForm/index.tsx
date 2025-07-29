import { InputComponent } from "../../input";
import { SelectComponent } from "../../orders/selectComponent";

export const EmployeeForm = ({
  customerDetails,
  setCustomerDetails,
  selectOptions,
}: {
  customerDetails: {
    name: string;
    phone: string;
    location: string;
    status: boolean;
    designation?: string;
    id?: string;
  };
  setCustomerDetails: (e: {
    id?: string;
    name: string;
    phone: string;
    location: string;
    designation?: string;
    status: boolean;
  }) => void;
  selectOptions: { value: string; name: string }[];
}) => {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Employee Id</p>
        <InputComponent
          type="text"
          value={customerDetails.id}
          onChange={(e) =>
            setCustomerDetails({
              ...customerDetails,
              id: e.target.value,
            })
          }
          className=""
          placeholder="Enter Employee Id"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Employee Name</p>
        <InputComponent
          type="text"
          value={customerDetails.name}
          onChange={(e) =>
            setCustomerDetails({
              ...customerDetails,
              name: e.target.value,
            })
          }
          className=""
          placeholder="Enter Employee"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Phone Number</p>
        <InputComponent
          type="text"
          value={customerDetails.phone}
          onChange={(e) =>
            setCustomerDetails({
              ...customerDetails,
              phone: e.target.value,
            })
          }
          className=""
          placeholder="Enter Phone Number"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Location</p>
        <InputComponent
          type="text"
          value={customerDetails.location}
          onChange={(e) =>
            setCustomerDetails({
              ...customerDetails,
              location: e.target.value,
            })
          }
          className=""
          placeholder="Enter Location"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Designation</p>
        <InputComponent
          type="text"
          value={customerDetails.designation}
          onChange={(e) =>
            setCustomerDetails({
              ...customerDetails,
              designation: e.target.value,
            })
          }
          className=""
          placeholder="Enter Designation"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1">
        <p className="font-semibold text-gray-700">Status</p>
        <SelectComponent
          selectItems={selectOptions}
          value={customerDetails.status ? "active" : "inactive"}
          onValueChange={(value) =>
            setCustomerDetails({
              ...customerDetails,
              status: value === "active",
            })
          }
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter Status"
          selectLabel="Status"
        />
      </div>
    </div>
  );
};
