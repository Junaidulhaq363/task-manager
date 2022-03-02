// require("./mongoose");
// const task=require("./task");
// const user = require("./user");


// task.findByIdAndUpdate("61fe02612ea404e18de795ff",{age:25}).then((user)=>{
//     console.log(user);
//     return task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result);

// }).catch((e)=>{
//     console.log(e);
// })

// task.findByIdAndDelete("61fdfde7140c886cb9380078").then((user)=>{
//     console.log(user);
//     return task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result);

// }).catch((e)=>{
//     console.log(e);
// }) 
// const updateageandcount= async (id,age)=>{
// const user1= await task.findByIdAndUpdate(id,{age});
// const count = await  task.countDocuments()
// return count
// }
// updateageandcount('61fe02612ea404e18de795ff',23).then((count)=>{
//     console.log(count);
// }).catch((e)=>{
// console.log(e);    
// })
// const deletetask=async (id)=>{
// await task.findByIdAndDelete({id});
// const count=task.countDocuments({description:"studying nodejs course"})
// return count;
// }
//  deletetask("61fe0bdf0a9dd04d485f839f").then((count)=>{
//      console.log(count);
//  }).catch((error)=>{
// console.log(error)
  
// })


