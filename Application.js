// let obj={
    // id:1,
    // name:"abc",
    // age:23
// }
// let {id,name,age}=obj;
// console.log(id,name,age);
// if(false){
// let a=5
// }
// console.log(a)
let ul=document.querySelector("ul")
fetch("https://jsonplaceholder.typicode.com/users").then((data)=>{
    return data.json()
})
.then((res)=>{
    console.log(res);
})

