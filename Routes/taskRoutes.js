const express=require("express");
const router =new express.Router()
const task=require("../actions/task.js");


router.post("/task",async (req,res)=>{
    const Task = new task(req.body)

    try {
      await Task.save()
      res.status(200).send(Task)
    
    } catch (error) {
        res.status(400).send(error)
    }
})
router.patch("/task/:id",async (req,res)=>{
    const updates=Object.keys(req.body);
    const allowedupdates=["description","email","password","completed"]
    const isvalid=updates.every((update)=>allowedupdates.includes(update))
    if(!isvalid)   { return res.status(400).send("error"); }
    try {
        const task1=await task.findByIdAndUpdate(req.params.id,req.body,{
            new :true,
            runValidators:true
        })
        if(!task1) return res.status(400).send("their is an error ");
        res.send(task1);
    } catch (error) {
        res.status(405).send(error);
        
    }
})
router.get("/task",async (req,res)=>{
    try {
        const task1=await task.find()
        res.send(task1);
    } catch (error) {
        res.status(400).send(error);
        
    }
})

router.get("/task/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const task1=await task.findById(_id)
       if(!task1) {return res.status(400).send("") } 

        res.status(201).send(task1);
    } catch (error) {
        res.status(400).send("error in it");
        
    }
})

router.delete("/task/:id",async (req,res)=>{
    const task1=await task.findByIdAndDelete(req.params.id);

    try {
        if(!task1){
            return res.status(400).send("this id does not exits either it is deleted or wrong id");
        }
        res.send(201,task1);
    } catch (error) {
        res.status(400).send(error);
    }
})
module.exports=router;
