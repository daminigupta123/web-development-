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
fetch('https://jsonplaceholder.typicode.com/todos/').then((data)=>{
    return data.json()
})
.then((res)=>{
    console.log(res);
    show(res)
})
function show(res){
    for(let i of res){
       let li=  document.createElement("li")
         let h4=  document.createElement("h4")
        li.innerText=i.id
        h4.innerText=i.tittle
        ul.append(li,h4)
        
    }

}

