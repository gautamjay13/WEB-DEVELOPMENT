let todo = [];
let req = prompt("please enter request");
console.log(req);
while (true) {
    if (req == "quit") {
        console.log("quiting app");
        break;
    }
    if (req == "list") {
        console.log("-----------------")
        for (let index = 0; index < todo.length; index++) {
            console.log(i , todo[i]);
            
        }
        console.log("-----------------")
    }
    else if(req=="add"){
       let tasks= prompt("please enter the tasks");
       todo.push(tasks);
       console.log("tasks added");
    }
    else if( req=="delete"){
       let idx= prompt("please enter the index"); 
       todo.splice(idx,1);
       console.log("tasks deleted");
    }
    else{
        console.log("wrong request");
    }
    req = prompt("please enter request");

}