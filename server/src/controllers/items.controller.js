import { Item } from "../models/items.model.js";
import cloudianry from '../lib/cloudinary.js'


export async function createItem(req,res){
    try {
        const {name,id,price,quantity,image,units} = req.body;
        const uploadResponse = await cloudianry.uploader.upload(image);
        const item = await Item({name,id,price,quantity,image : uploadResponse.secure_url,units});
        await item.save();
        res.json({message:"Item created successfully",item});
    } catch (error) {
        console.log(error);
    }
}

export async function getItems(req,res){
    try {
        const items = await Item.find();
        if(items.length > 0) return res.json({items});
        res.status(404).json({message:"No items found",items});
    } catch (error) {
        console.log(error);
    }
}

export async function deleteItem(req,res){
    try {
        await Item.deleteOne({id:req.params.id});
        res.json({message:"Item deleted successfully"});
    } catch (error) {
        console.log(error);
    }
}

export async function updateItem(req,res){
    try {
        const {name,id,price,quantity,image,units} = req.body;
       
        const uploadResponse = await cloudianry.uploader.upload(image); 
        await Item.updateOne({id:req.params.id},{name,id,price,quantity,image:uploadResponse.secure_url,units});
        res.json({message:"Item updated successfully"});
    } catch (error) {
        console.log(error);
    }
};