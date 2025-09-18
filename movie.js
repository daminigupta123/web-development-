let btn=document.querySelector("#searchBtn");
let input=document.querySelector("input");
btn.addEventListener("click",()=>{
    let movieName=input.value;
    let url=`http://www.omdbapi.com/?t=${movieName}&apikey=thewdb`;
    fetch(url).then((data)=>{
        return data.json();
        }
    ).then((res)=>{
        console.log(res);
        SharedWorker(res)
    })
})
function Show(res){
    let img=document.querySelector("img");
    img.src=res.Poster;
}
