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
  editCustomer?: Customer | null;
  setCustomer: (customer: Customer) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setStart: (start: number) => void;
  setEnd: (end: number) => void;
  deleteCustomer?: (id: string) => void;
  setEditCustomer?: (customer: Customer | null) => void;
  handleEditCustomer?: (updatedCustomer: Customer) => void;
}
