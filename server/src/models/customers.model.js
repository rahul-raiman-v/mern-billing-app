import mongoose from "mongoose";


const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },


});

export const Customer = mongoose.model("Customer",customerSchema);


