import { Employee } from "../models/employees.model.js";

export async function createEmployee(req, res) {
    try {
        const { id,name,phone,location,status,designation } = req.body;
        const employee = await Employee({id,name,phone,location,status,designation});
        await employee.save();
        res.json({message:"Employee created successfully",employee:{id,name,phone,location,status}});
    } catch (error) {
        console.log(error);
    }
}

export async function getEmployees(req, res) {
    try {
        const employees = await Employee.find();
        if(employees.length > 0) return res.json({employees});
        res.status(404).json({message:"No employees found",employees});
    } catch (error) {
        console.log(error);
    }
}

export async function deleteEmployee(req, res) {
    try {
        console.log(req.params.id);
        await Employee.deleteOne({id:req.params.id});
        res.json({message:"Employee deleted successfully"});
    } catch (error) {
        console.log(error);
    }
}

export async function updateEmployee(req, res) {
    try {
        const { id,name,phone,location,status,designation } = req.body;
        await Employee.updateOne({id:req.params.id},{id,name,phone,location,status,designation});
        res.json({message:"Employee updated successfully"});
    } catch (error) {
        console.log(error);
    }
}