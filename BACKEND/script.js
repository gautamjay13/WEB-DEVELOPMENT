let n = 5; 
for (let i = 0; i < 5; i++) {
    
    console.log("hello, ", i);
    
}  

console.log(process.argv);

let argv = process.argv ; 
for ( let i = 2 ; i <argv.length ;i++){
    console.log("hello & welcome to ", argv[i]);
    
}

// exporting module for other script 

const some  = require("./math"); 
console.log(some);

console.log("using the math function : ", some.sum(2,2));

