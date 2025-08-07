import mongoose from "mongoose";

const unitSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    conversionFactor:{
        type:Number,
        required:true,
        default:1,
    }
});

const itemsScheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        default:"",
    },
    units:{
        type:[unitSchema],
        required:true,
        default:[
            {
                name:"piece",
                conversionFactor:1,
            },
        ]
    }
});

export const Item = mongoose.model("Item",itemsScheme);