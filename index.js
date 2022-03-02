const express=require("express");
const app=express();
require("./mongoose");
const taskrouter=require("./Routes/taskRoutes");
const userrouter=require("./Routes/userRoutes");
const port=process.env.PORT||3000
app.use(express.json());
app.use(userrouter)
app.use(taskrouter)

app.listen(port,()=>{
   console.log("server is running on port "+port);
})





