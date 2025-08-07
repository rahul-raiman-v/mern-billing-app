import { create } from "zustand";
import type { SalesStore } from "./types";

export const useSalesStore = create<SalesStore>((set) => ({
  invoice: {
    invoiceNumber: "",
    dateIssued: new Date(),
    dueDate: new Date(),
    client: {
      name: "",
      phone: "",
      location: "",
      status: false,
      id: "",
    },
    items: [
      {
        id: "1",
        name: "Wireless Mouse",
        price: 25,
        image: "",
        quantity: 2,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "2",
        name: "Mechanical Keyboard",
        price: 120,
        image: "",
        quantity: 1,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "3",
        name: 'HD Monitor 24"',
        price: 150,
        image: "",
        quantity: 2,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "4",
        name: "Laptop Stand",
        price: 40,
        image: "",
        quantity: 3,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "5",
        name: "USB-C Docking Station",
        price: 80,
        image: "",
        quantity: 1,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "6",
        name: "Webcam 1080p",
        price: 45,
        image: "",
        quantity: 4,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "7",
        name: "Desk Lamp",
        price: 35,
        image: "",
        quantity: 2,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "8",
        name: "Ergonomic Chair",
        price: 350,
        image: "",
        quantity: 1,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "9",
        name: "Noise Cancelling Headphones",
        price: 200,
        image: "",
        quantity: 1,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "10",
        name: "External SSD 1TB",
        price: 150,
        image: "",
        quantity: 2,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "11",
        name: "USB Hub",
        price: 20,
        image: "",
        quantity: 5,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "12",
        name: "HDMI Cable",
        price: 10,
        image: "",
        quantity: 3,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "13",
        name: "Ethernet Cable 10m",
        price: 15,
        image: "",
        quantity: 2,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "14",
        name: "Bluetooth Adapter",
        price: 18,
        image: "",
        quantity: 1,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "15",
        name: "Laptop Backpack",
        price: 60,
        image: "",
        quantity: 1,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "16",
        name: "Screen Cleaner Kit",
        price: 12,
        image: "",
        quantity: 2,
        freeQuantity: 0,
        units: [
          {
            name: "kit",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "17",
        name: "Power Strip",
        price: 22,
        image: "",
        quantity: 3,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "18",
        name: "Surge Protector",
        price: 28,
        image: "",
        quantity: 1,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "19",
        name: "Portable Projector",
        price: 220,
        image: "",
        quantity: 1,
        freeQuantity: 0,
        units: [
          {
            name: "pcs",
            conversionFactor: 1,
          },
        ],
      },
      {
        id: "20",
        name: "Whiteboard Markers Pack",
        price: 8,
        image: "",
        quantity: 4,
        freeQuantity: 0,
        units: [
          {
            name: "pack",
            conversionFactor: 1,
          },
        ],
      },
    ],
    discount: 0,
    subTotal: 0,
    grandTotal: 0,
    salesmen: "",
    store: {
      name: "Frontend Developer",
      address: "Erode",
      contactNumber: "8586467465",
    },
  },
  invoices: [],
  isLoading: false,
  setIsLoading: () => {},
  getInvoices: async () => {},
  setInvoice: (key, value) => {
    if (key === "all") {
      console.log(value);
    } else {
      set((state) => ({ invoice: { ...state.invoice, [key]: value } }));
    }
  },
  createInvoice: async () => {},
  updateInvoice: async () => {},
  deleteInvoice: async () => {},
}));
