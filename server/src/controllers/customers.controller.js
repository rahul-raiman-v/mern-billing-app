import { Customer } from "../models/customers.model.js";

export async function createCustomer(req, res) {
    try {
        const { id,name,phone,location,status } = req.body;
        const customer = await Customer({id,name,phone,location,status});
        await customer.save();
        res.json({message:"Customer created successfully",customer:{id,name,phone,location,status}});
    } catch (error) {
        console.log(error);
    }
}

export async function getCustomers(req, res) {
    try {
        const customers = await Customer.find();
        if(customers.length > 0) return res.json(customers);
        res.status(404).json({message:"No customers found"});
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCustomer(req, res) {
    try {
        await Customer.deleteOne({id:req.params.id});
        res.json({message:"Customer deleted successfully"});
    } catch (error) {
        console.log(error);
    }
}

export async function updateCustomer(req, res) {
    try {
        const { id,name,phone,location,status } = req.body;
        await Customer.updateOne({id:req.params.id},{id,name,phone,location,status});
        res.json({message:"Customer updated successfully"});
    } catch (error) {
        console.log(error);
    }
}