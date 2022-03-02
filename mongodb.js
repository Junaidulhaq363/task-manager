const {MongoClient,ObjectId}=require("mongodb");
const connectionUrl="mongodb://127.0.0.1:27017";
const databaseName="task-manager";
MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
    if (error){
        return console.log("unable to connect to the database");
    }
    const db=client.db(databaseName);
    db.collection("users").insertMany([{
        name:"junaid",
        age:23,
        phone_number:"997558701"
    },
    {
        name:"hasan",
        age:23,
        phone_number:997578701

    }])
    
})
db.collection("tasks").insertMany([{
    task:"to study",
    completed:true
},
{
    task:"to earn",
    completed:false
},
{
        task:"to travel",
        completed:false

}],(error,result)=>{
    if(error){
        return console.log("unable to insert into database");
    }
    console.log(result);

})
db.collection("tasks").findOne({task:"to earn"},(error,data)=>{
    if(error){
        return console.log("unable to find data from the database");
    }
    console.log(data);
})
db.collection("tasks").find({task:"to earn"}).toArray((error,users)=>{
    console.log(users);
})
db.collection("tasks").updateOne({
    _id: new ObjectId("61fd06a28c4f024d23105b92")
},{
    $set:{
        task:"hasan"
    }
})
.then((result)=>{
console.log(result);
}).catch((error)=>{
    console.log(error);
})
db.collection("tasks").updateMany({
    completed:false
},{
    $set:{
        completed:true
    }
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
db.collection("tasks").deleteMany({
    task:"to study"
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})