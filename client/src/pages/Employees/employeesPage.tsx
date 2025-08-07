import { CirclePlus, Search } from "lucide-react";
import React from "react";
import { useEmployeesStore } from "../../zustand";
import type { Member } from "../../types";
import {
  ButtonComponent,
  EmployeeForm,
  EmployeeTable,
  InputComponent,
  ModalFormComponent,
  PaginationComponent,
} from "../../components";

export const EmployeesPage = () => {
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const tableHeaders: string[] = [
    "S.No",
    "Employee Name",
    "Phone Number",
    "Location",
    "Designation",
    "Status",
    "Actions",
  ];

  const employees = useEmployeesStore((s) => s.employees);
  const setEmployee = useEmployeesStore((s) => s.setEmployee);
  const deleteEmployee = useEmployeesStore((s) => s.deleteEmployee);
  const page = useEmployeesStore((s) => s.page);
  const setPage = useEmployeesStore((s) => s.setPage);
  const pageSize = useEmployeesStore((s) => s.pageSize);
  const setPageSize = useEmployeesStore((s) => s.setPageSize);
  const setStart = useEmployeesStore((s) => s.setStart);
  const setEnd = useEmployeesStore((s) => s.setEnd);
  const start = useEmployeesStore((s) => s.start);
  const end = useEmployeesStore((s) => s.end);
  const createEmployee = useEmployeesStore((s) => s.createEmployee);
  const updateEmployee = useEmployeesStore((s) => s.updateEmployee);
  const getEmployees = useEmployeesStore((s) => s.getEmployees);
  const employee = useEmployeesStore((s) => s.employee);
  const setEditEmployeeId = useEmployeesStore((s) => s.setEditEmployeeId);
  const isLoading = useEmployeesStore((s) => s.isLoading);

  function handleAddEmployee(newCustomer: null | Member) {
    if (newCustomer !== null) {
      createEmployee?.(newCustomer);
    }
  }
  const filteredCustomers = employees
    .filter((customer) =>
      customer.name?.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(start, end); // Limit to 10 for pagination
  function handleLimitChange(newLimit: string) {
    setPageSize(parseInt(newLimit, 10));
  }

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
    if (employee) {
      setEmployee("all", employee);
    } else {
      setEmployee("all", {
        name: "",
        phone: "",
        location: "",
        designation: "",
        status: true,
        id: "",
      });
    }
  }, [employee, setEmployee]);

  React.useEffect(() => {
    getEmployees();
  }, [getEmployees]);

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
            placeholder="Search Employees"
            className="max-w-72 "
          />
          <ButtonComponent
            onClick={() => {
              setEmployee("all", {
                name: "",
                phone: "",
                location: "",
                designation: "",
                status: true,
                id: "",
              });
              setAddOpen(true);
            }}
            className="flex items-center gap-x-2"
          >
            <CirclePlus className="w-5 h-5" />
            Add Employee
          </ButtonComponent>
        </div>
        <EmployeeTable
          tableHeaders={tableHeaders}
          tableBody={filteredCustomers}
          onEdit={(e) => {
            setEditOpen(true);
            setEditEmployeeId?.(e?.id);
            setEmployee("all", e);
          }}
          onDelete={(id) => deleteEmployee?.(id)}
          className="h-[calc(100dvh-15rem)]"
          loading={isLoading}
        />
        <PaginationComponent
          currentPage={page}
          setCurrentPage={setPage}
          limit={String(pageSize)}
          setLimit={handleLimitChange}
          totalRecords={employees.length}
        />
      </div>
      <ModalFormComponent
        heading="Add Employee"
        memberDetails={employee}
        rightButtonLabel="Add Employee"
        modalOpen={addOpen}
        setModalOpen={setAddOpen}
        handleAddMember={handleAddEmployee}
      >
        <EmployeeForm
          customerDetails={employee}
          selectOptions={selectOptions}
          setCustomerDetails={setEmployee}
        />
      </ModalFormComponent>
      <ModalFormComponent
        memberDetails={employee}
        heading="Edit Employee"
        rightButtonLabel="Update Employee"
        editMember={employee}
        handleEditMember={(e) => {
          if (e !== null) {
            updateEmployee?.(e);
          }
        }}
        modalOpen={editOpen}
        setModalOpen={setEditOpen}
      >
        <EmployeeForm
          customerDetails={employee}
          selectOptions={selectOptions}
          setCustomerDetails={setEmployee}
        />
      </ModalFormComponent>
    </div>
  );
};
