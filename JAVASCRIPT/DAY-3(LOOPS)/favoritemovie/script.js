const favorite = "avator" ;
let guess = prompt("guess the movie") ;
while ((guess!=favorite) && (guess!="quit")) {
    guess = prompt("wrong guess. please try again")
}

if( guess==favorite){
    console.log("hurray you got the movie") ;
}
if (guess=="quit") {
    console.log("you quit the game");
}