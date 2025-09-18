let btn=document.querySelector("#searchBtn");
let input=document.querySelector("input");
btn.addEventListener("click",()=>{
    let movieName=input.value;
    
fetch(`https://api.tvmaze.com/search/shows?q=${movieName}`)
.then((data)=>{

    return data.json();
}).then((res)=>{

console.log(res)
show(res)
})
})
function show(res){
    let img=document.querySelector("img");
    let link=res[0].show.image.medium
    img.setAttribute("src",link);
}
