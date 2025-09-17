let arr=[5, 1, 8, 6,-2,-6]
let max=arr[0]
function max(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
}
console.log(max)
}
max()