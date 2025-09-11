 let inp =document.querySelector('input')
 let btn =document.querySelector('button')
 let ul=document.querySelector("ul")
 btn.addEventListener('click',()=>{
   // console.log("hello")
 let data=  inp.value
 console.log(data);
 
let li= document.createElement("li")
li.innerText="damini"
ul.append(li)

})