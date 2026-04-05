function myfunction() {
    console.log("welcome to apna college");
}

myfunction();

// function with argument 
function myfunction1(msg) {
    console.log(msg);
}
myfunction1("hello");

// sum of two numbers 

function sum(a,b) {
    let sum = a + b ;
    console.log(sum);
}
sum(4,9);
sum(10,20);

// arrow funtion 

const arrowmul = (a, b)=>{
    return a*b ;
}

function countvowel(str) {
    let count = 0 ;
    for(const char of str){
    if (char === "a" || char === "e" || char === "i" || char === "o" ||char === "u") {
        count ++ ;
        
    }
    }
    console.log(count);
}