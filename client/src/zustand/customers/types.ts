import type { Member } from "../../types";

export interface CustomersStore {
  customers: Member[];
  page: number;
  pageSize: number;
  start: number;
  end: number;
  customer: Member | null;
  editId?: string | null;
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  deleteCustomer?: (id: string) => Promise<void>;
  setCustomer?: (key: string, value: Member | null | string | boolean) => void;
  getCustomers: () => Promise<void>;
  createCustomer: (customer: Member) => Promise<void>;
  setEditId?: (id?: string) => void;
  updateCustomer?: (customer: Member) => Promise<void>;
}
