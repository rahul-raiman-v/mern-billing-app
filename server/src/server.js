import express from "express";
import "dotenv/config";
import cors from "cors"
import { connectDB } from "./lib/db.js";
import customerRoute from "./routes/customer.route.js";
import employeeRoute from "./routes/employees.route.js";
import itemRoute from "./routes/items.route.js";

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());

app.use(customerRoute);
app.use(employeeRoute);
app.use(itemRoute);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
    connectDB();
});