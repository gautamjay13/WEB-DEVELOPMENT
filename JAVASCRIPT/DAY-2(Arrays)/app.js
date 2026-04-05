let marks = [91,82,87,52,34];
console.log(marks);

let heroies = ["ironman","hulk", "thor" , "shaktiman"] ;
for(let el of heroies){
    console.log(el) ;
}

let mark = [91,82,87,52,34]; 
let sum = 0 ; 
let avg = 0 ; 
let n = mark.length  ; 
for (let val of mark){
    sum = sum + val;
 avg = sum / n  ; 
    
}console.log(sum) ;
console.log(avg) ;

//question 2 

let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] = items[i] - offer;
}

console.log(items);