import { CirclePlus, Search } from "lucide-react";
import React from "react";
import { useCustomersStore } from "../../zustand";
import { InputComponent } from "../../components/input";
import { ButtonComponent } from "../../components/button";
import { ModalFormComponent } from "../../components/modals/formModal";
import { CustomerTable } from "../../components/table/customerTable";
import { CustomerForm } from "../../components/forms/customerForm";
import { PaginationComponent } from "../../components/pagination";

export interface Employee {
  name: string;
  phone: string;
  location: string;
  designation: string;
  status: boolean;
  id?: string; // Optional field for employee ID
}

export const CustomerPage = () => {
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const tableHeaders: string[] = [
    "S.No",
    "Customer Name",
    "Phone Number",
    "Location",
    "Status",
    "Actions",
  ];

  const customers = useCustomersStore((s) => s.customers);
  const setCustomer = useCustomersStore((s) => s.setCustomer);
  const deleteCustomer = useCustomersStore((s) => s.deleteCustomer);
  const setEditCustomer = useCustomersStore((s) => s.setEditCustomer);
  const editCustomer = useCustomersStore((s) => s.editCustomer);
  const handleEditCustomer = useCustomersStore((s) => s.handleEditCustomer);
  const page = useCustomersStore((s) => s.page);
  const setPage = useCustomersStore((s) => s.setPage);
  const pageSize = useCustomersStore((s) => s.pageSize);
  const setPageSize = useCustomersStore((s) => s.setPageSize);
  const setStart = useCustomersStore((s) => s.setStart);
  const setEnd = useCustomersStore((s) => s.setEnd);
  const start = useCustomersStore((s) => s.start);
  const end = useCustomersStore((s) => s.end);

  const selectOptions: { value: string; name: string }[] = [
    {
      value: "active",
      name: "Active",
    },
    {
      value: "inactive",
      name: "Inactive",
    },
  ];

  const [customerDetails, setCustomerDetails] = React.useState(
    editCustomer ?? {
      name: "",
      phone: "",
      location: "",
      status: true,
      id: "",
    },
  );

  console.log("editCustomer", editCustomer);
  console.log("customerDetails", customerDetails);

  React.useEffect(() => {
    if (editCustomer) {
      setCustomerDetails(editCustomer);
    } else {
      setCustomerDetails({
        name: "",
        phone: "",
        location: "",
        status: true,
        id: "",
      });
    }
  }, [editCustomer, editOpen]);

  function handleAddCustomer(newCustomer: {
    name: string;
    phone: string;
    location: string;
    designation?: string;
    status: boolean;
    id?: string;
  }) {
    setCustomer(newCustomer);
  }
  const filteredCustomers = customers
    .filter((customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(start, end); // Limit to 10 for pagination
  function handleLimitChange(newLimit: string) {
    setPageSize(parseInt(newLimit, 10));
  }

  React.useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    setStart(start);
    setEnd(end);
  }, [page, pageSize, setEnd, setStart]);
  return (
    <div>
      {/* You can add more components or features related to employees here */}
      <div className="flex flex-col gap-y-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <InputComponent
            startContent={<Search className="size-3.5 text-gray-500" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Customers"
            className="max-w-72"
          />
          <ButtonComponent
            onClick={() => setAddOpen(true)}
            className="flex items-center gap-x-2"
          >
            <CirclePlus className="w-5 h-5" />
            Add Customer
          </ButtonComponent>
        </div>
        <CustomerTable
          tableHeaders={tableHeaders}
          tableBody={filteredCustomers}
          onEdit={(e) => {
            setEditCustomer?.(e);
            setEditOpen(true);
          }}
          onDelete={(id) => deleteCustomer?.(id)}
          className="h-[calc(100dvh-15rem)]"
        />
        <PaginationComponent
          currentPage={page}
          setCurrentPage={setPage}
          limit={String(pageSize)}
          setLimit={handleLimitChange}
          totalRecords={customers.length}
        />
      </div>
      <ModalFormComponent
        memberDetails={customerDetails}
        heading="Add New Customer"
        rightButtonLabel="Add Employee"
        modalOpen={addOpen}
        setModalOpen={setAddOpen}
        handleAddMember={handleAddCustomer}
      >
        <CustomerForm
          customerDetails={customerDetails}
          selectOptions={selectOptions}
          setCustomerDetails={setCustomerDetails}
        />
      </ModalFormComponent>
      <ModalFormComponent
        memberDetails={customerDetails}
        heading="Edit Customer"
        rightButtonLabel="Update Customer"
        editMember={editCustomer}
        handleEditMember={(e) => {
          handleEditCustomer?.(e);
        }}
        modalOpen={editOpen}
        setModalOpen={setEditOpen}
      >
        <CustomerForm
          customerDetails={customerDetails}
          selectOptions={selectOptions}
          setCustomerDetails={setCustomerDetails}
        />
      </ModalFormComponent>
    </div>
  );
};
