import type { Invoice, Items, Member } from "../../types";

export interface SalesStore {
  invoice: Invoice;
  invoices: Invoice[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  setInvoice: (
    key: string,
    value: string | Items | boolean | number | Date | Member | Items[] | object,
  ) => void;
  createInvoice: (invoice: Invoice) => Promise<void>;
  updateInvoice: (invoice: Invoice) => Promise<void>;
  deleteInvoice: (id: string) => Promise<void>;
  getInvoices: () => Promise<void>;
}
