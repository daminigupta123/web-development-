 let inp =document.querySelector('input')
 let btn =document.querySelector('button')
 let dlt=document.querySelector("delete")
 let ul=document.querySelector("ul")
 btn.addEventListener('click',()=>{
   // console.log("hello")
 let data=  inp.value
 console.log(data);
 let li= document.createElement("li")
 li.innerText=data
// li.innerText="damini"
 ul.append(li)
 inp.value=" "
 li.addEventListener("click",()=>{
    li.remove()
    })
 })