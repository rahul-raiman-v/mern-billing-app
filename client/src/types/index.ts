export interface Member {
  name?: string;
  phone?: string;
  location?: string;
  designation?: string;
  status?: boolean;
  id?: string;
}

export interface Items {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  freeQuantity?: number;
  units: {
    name: string;
    conversionFactor: number;
  }[];
}

export interface Invoice {
  invoiceNumber: string;
  dateIssued: Date;
  dueDate: Date;
  client: Member;
  items: Items[];
  discount: number;
  subTotal: number;
  grandTotal: number;
  salesmen?: string;
  store: {
    name: string;
    address: string;
    contactNumber: string;
  };
}
