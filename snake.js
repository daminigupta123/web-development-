let canvas =document.querySelector('canvas')
let pen=canvas.getContext('2d')
// pen.fillStyle="red"
//  pen.fillRect(50,150,50,50)
// pen.clearRect(50,140,50.50)
let snakeCells=[[0,0]]
let cell=50
let direction="right"
let
document.addEventListener('keydown',(e)=>{
    if(e.key=="ArrowRight"){
        direction="right"
    }
    else if(e.key=="ArrowLeft"){
        direction="left"
    }
    else if(e.key=="ArrowUp"){
        direction="up"
    }
    else if(e.key=="ArrowDown"){
        direction="down"
    }   
})
function draw()
{
for(let i of snakeCells){
    pen.fillStyle="red"
    pen.fillRect(i[0],i[1],cell,cell)
    pen.clearRect(0,0,800,600)
}
}
draw()
function update(){
 let headx=snakeCells[snakeCells.length-1][0]
 let heady=snakeCells[snakeCells.length-1][1]
  let newx =headx+=cell
  let newy =heady
  if(direction=="right"){
    newx =headx+cell
    newy =heady
  }
    else if(direction=="left"){
    newx =headx-cell
    newy =heady
  }
  else if(direction=="up"){
    newx =headx
    newy =heady-cell
  }
    else if(direction=="down"){
    newx =headx
    newy =heady+cell
  }
  snakeCells.push([newx,newy])
  snakeCells.shift()

}
setInterval(function(){
    draw()
    update()
},200)
