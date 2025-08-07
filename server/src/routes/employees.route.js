import express from "express";
import { createEmployee, deleteEmployee, getEmployees, updateEmployee } from "../controllers/employees.controller.js";

const router = express.Router();

router.get("/employees",getEmployees);
router.post("/employee",createEmployee);
router.delete("/employee/:id",deleteEmployee);
router.put("/employee/:id",updateEmployee);


export default router;