// const add=(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(a<0 ||b <0){
//                 return "please provvide non-negative numbers"
//             }
//             resolve(a+b);
//         },2000);

//     })
// }
// const dowork=async ()=>{
//     const sum=await add(1,3);
//     const sum1=await add(sum,7);
//     return sum1;

// }
// dowork().then((results)=>{
//     console.log(results);
// }).catch((e)=>{
//     console.log("their is a error",e);
// })