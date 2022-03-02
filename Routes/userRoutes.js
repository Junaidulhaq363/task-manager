const express=require("express");
const router=new express.Router()
const user=require("../actions/user");


router.get("/user",(req,res)=>{
    user.find({}).then((user)=>{
        res.send(user);
    }).catch((e)=>{
        res.status(500).send("please enter specify api");
    })
})

router.get("/user/:id",(req,res)=>{
    const _id=req.params.id;
    user.findById(_id).then((user)=>{
        if(!user) return res.status(400).send("Please enter the specify api");
        res.send();
    }).catch((e)=>{
        res.status(500).send("error",e);
    })
})
router.post("/user",(req,res)=>{
    const user2=new user(req.body)
    user2.save().then(()=>{
        res.send(user2);
    }).catch((error)=>{
        throw new Error("their is a error some",error);
    })
})
router.delete("/user/:id",async (req,res)=>{
    const user1=await task.findByIdAndDelete(req.params.id);

    try {
        if(!user11){
            return res.status(400).send("this id does not exits either it is deleted or wrong id");
        }
        res.send(201,user1);
    } catch (error) {
        res.status(400).send(error);
    }
})
module.exports=router;


