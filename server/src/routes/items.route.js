import express from "express";
import { createItem, deleteItem, getItems, updateItem } from "../controllers/items.controller.js";


const router = express.Router();

router.get("/items",getItems);
router.post("/item",createItem);
router.delete("/item/:id",deleteItem);
router.put("/item/:id",updateItem);




export default router;