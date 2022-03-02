const mongoose=require("mongoose");
const validator=require("validator");
 const user=mongoose.model('user',{
     name:{
         type:String,
         required:true,
         trim:true,
         lowercase:true,
         uppercase:true
     },
     age:{
         type:Number,
         required:true,
         trim:true,


     }
 })

 module.exports=user;