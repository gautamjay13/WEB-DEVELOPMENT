let str = "apnacollege" ;
let newmsg = str.slice(4,10).replace("l","t");
let newstr =newmsg.replace("l","t");
console.log(newstr) ; 


let arr =["january","feb","march","april"] ;
arr.shift();
arr.shift();
console.log(arr);
arr.unshift("july");
arr.unshift("june");
console.log(arr);

let crr =["january","feb","march","april"] ;
let brr =["june","july"] ;
let ans =crr.concat(brr);
console.log(ans);


