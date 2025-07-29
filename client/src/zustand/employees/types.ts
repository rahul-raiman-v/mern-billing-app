import type { Employee } from "../../pages/Employees/employeesPage";

export interface EmployeesStore {
  employees: Employee[];
  page: number;
  pageSize: number;
  start: number;
  end: number;
  editEmployee?: Employee | null;
  setEmployee: (employee: Employee) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  deleteEmployee?: (id: string) => void;
  setEditEmployee?: (employee: Employee | null) => void;
  handleEditEmployee?: (updatedEmployee: Employee) => void;
}
