import { CirclePlus, Search } from "lucide-react";
import React from "react";
import { useCustomersStore } from "../../zustand";
import type { Member } from "../../types";
import {
  ButtonComponent,
  CustomerForm,
  CustomerTable,
  InputComponent,
  ModalFormComponent,
  PaginationComponent,
} from "../../components";

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
  const deleteCustomer = useCustomersStore((s) => s.deleteCustomer);
  const setCustomer = useCustomersStore((s) => s.setCustomer);
  const customer = useCustomersStore((s) => s.customer);
  const page = useCustomersStore((s) => s.page);
  const setPage = useCustomersStore((s) => s.setPage);
  const pageSize = useCustomersStore((s) => s.pageSize);
  const setPageSize = useCustomersStore((s) => s.setPageSize);
  const setStart = useCustomersStore((s) => s.setStart);
  const setEnd = useCustomersStore((s) => s.setEnd);
  const start = useCustomersStore((s) => s.start);
  const end = useCustomersStore((s) => s.end);
  const getCustomers = useCustomersStore((s) => s.getCustomers);
  const createCustomer = useCustomersStore((s) => s.createCustomer);
  const setEditId = useCustomersStore((s) => s.setEditId);
  const updateCustomer = useCustomersStore((s) => s.updateCustomer);
  const isLoading = useCustomersStore((s) => s.isLoading);

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

  React.useEffect(() => {
    if (customer) {
      setCustomer?.("all", customer);
    } else {
      setCustomer?.("all", {
        name: "",
        phone: "",
        location: "",
        status: true,
        id: "",
      });
    }
  }, [customer, editOpen, setCustomer]);

  function handleAddCustomer(newCustomer: Member | null) {
    if (newCustomer !== null) {
      createCustomer(newCustomer);
      setCustomer?.("all", {
        name: "",
        phone: "",
        location: "",
        status: true,
        id: "",
      });
    }
  }
  const filteredCustomers = customers
    .filter((customer) =>
      customer.name?.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(start, end);

  function handleLimitChange(newLimit: string) {
    setPageSize(parseInt(newLimit, 10));
  }

  React.useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  React.useEffect(() => {
    setPage(1);
  }, [customers.length, setPage]);

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
            onClick={() => {
              setCustomer?.("all", {
                name: "",
                phone: "",
                location: "",
                status: true,
                id: "",
              });
              setAddOpen(true);
            }}
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
            setCustomer?.("all", e);
            setEditId?.(e?.id);
            setEditOpen(true);
          }}
          onDelete={(id) => deleteCustomer?.(id)}
          className="h-[calc(100dvh-15rem)]"
          loading={isLoading}
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
        memberDetails={customer}
        heading="Add New Customer"
        rightButtonLabel="Add Employee"
        modalOpen={addOpen}
        setModalOpen={setAddOpen}
        handleAddMember={handleAddCustomer}
      >
        <CustomerForm
          customerDetails={customer}
          selectOptions={selectOptions}
          setCustomerDetails={setCustomer}
        />
      </ModalFormComponent>
      <ModalFormComponent
        memberDetails={customer}
        heading="Edit Customer"
        rightButtonLabel="Update Customer"
        editMember={customer}
        handleEditMember={(e) => {
          if (e !== null) {
            updateCustomer?.(e);
          }
        }}
        modalOpen={editOpen}
        setModalOpen={setEditOpen}
      >
        <CustomerForm
          customerDetails={customer}
          selectOptions={selectOptions}
          setCustomerDetails={setCustomer}
        />
      </ModalFormComponent>
    </div>
  );
};
