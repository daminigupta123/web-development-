// let inp=document.querySelector("input")
// let doc=document.querySelector("h1")
// inp.addEventListener("input",(e)=>{
    // console.log(e.target.value);
    // doc.innerText=e.target.value
// });
// 
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data={
        name:form[0].value,
        age:form[1].value,
        email:form[2].value,
        password:form[3].value,
      }
      console.log(data);
      localStorage.setItem("formdata",JSON.stringify(data))
      localStorage.removeItem("formdata",JSON .stringify(data));
    // console.log(form[0].value);
    // console.log(form[1].value);
    // console.log(form[2].value);
    // console.log(form[3].value);
    // console.log(form[4].value);
    // console.log(form[5].value);
})
let form2=document.querySelector('#form2')
form2.addEventListener("submit",(e)=>{
    e.preventDefault();
    let savedata=localStorage.getItem("formdata");
    let dataobj=JSON.parse(savedata)
    let loginobj={
        email:form2[0].value,
        pass:form2[1].value,
    }
})
if(dataobj.email==loginobj.email && dataobj.password==loginobj.pass){
    prompt("Login Successfull")
}else{
prompt("errorrr")
}
