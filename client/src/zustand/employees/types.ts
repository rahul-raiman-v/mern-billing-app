import type { Employee } from "../../pages/Employees/employeesPage";

export interface EmployeesStore {
  employees: Employee[];
  page: number;
  pageSize: number;
  start: number;
  end: number;
  editEmployeeId?: string | null;
  employee: Employee | null;
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
  setEditEmployeeId?: (id?: string) => void;
  setEmployee: (
    key: string,
    employee: Employee | null | string | boolean,
  ) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  deleteEmployee?: (id: string) => Promise<void>;
  getEmployees: () => Promise<void>;
  createEmployee: (employee: Employee) => Promise<void>;
  setEditId?: (id?: string) => void;
  updateEmployee?: (employee: Employee) => Promise<void>;
}
