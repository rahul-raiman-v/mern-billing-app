import mongoose from "mongoose";


const employeesSchema = mongoose.Schema({
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
    designation:{
        type:String,
        required:true
    }
});

export const Employee = mongoose.model("Employee",employeesSchema);


