import express from "express";
import { createCustomer, deleteCustomer, getCustomers, updateCustomer } from "../controllers/customers.controller.js";

const router = express.Router();

router.get("/customers",getCustomers);
router.post("/customer",createCustomer);
router.delete("/customer/:id",deleteCustomer);
router.put("/customer/:id",updateCustomer);


export default router;