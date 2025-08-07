import type { Member } from "../../types";

export interface EmployeesStore {
  employees: Member[];
  page: number;
  pageSize: number;
  start: number;
  end: number;
  editEmployeeId?: string | null;
  employee: Member | null;
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
  setEditEmployeeId?: (id?: string) => void;
  setEmployee: (
    key: string,
    employee: Member | null | string | boolean,
  ) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  deleteEmployee?: (id: string) => Promise<void>;
  getEmployees: () => Promise<void>;
  createEmployee: (employee: Member) => Promise<void>;
  setEditId?: (id?: string) => void;
  updateEmployee?: (employee: Member) => Promise<void>;
}
