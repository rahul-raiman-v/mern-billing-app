export interface Customer {
  name: string;
  phone: string;
  location: string;
  status: boolean;
  id?: string; // Optional field for Customer ID
}

export interface CustomersStore {
  customers: Customer[];
  page: number;
  pageSize: number;
  start: number;
  end: number;
  customer: Customer | null;
  editId?: string | null;
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  deleteCustomer?: (id: string) => Promise<void>;
  setCustomer?: (
    key: string,
    value: Customer | null | string | boolean,
  ) => void;
  getCustomers: () => Promise<void>;
  createCustomer: (customer: Customer) => Promise<void>;
  setEditId?: (id?: string) => void;
  updateCustomer?: (customer: Customer) => Promise<void>;
}
