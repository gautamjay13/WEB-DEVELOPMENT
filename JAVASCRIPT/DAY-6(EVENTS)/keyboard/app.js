// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log("button click");
    
// })
let inp = document.querySelector("input");
inp.addEventListener("keydown",function (event) {
console.log("code =",event.code);
if (event.code=="KeyU") {
    console.log("up key is pressed");   
}
else if(event.code=="KeyS"){
    console.log("down key is Pressed");
}
else if(event.code=="Arrowleft"){
    console.log("left key is pressed");   
}
else if(event.code=="Arrowright")
{
    console.log("right key is pressed");  
}
});
