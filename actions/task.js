const mongoose=require("mongoose");
const validator=require("validator");
const task=mongoose.model("task",{
    description:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        lowercase:true,
        uppercase:true,
        validate(value){
            if(value.includes("password")){
                throw new Error("password should not contain password");
            }
        }
        },
    completed:{
        type:Boolean,
        required:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,"what is your eamil ??"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid")
    }
}
    }


})
module.exports=task;