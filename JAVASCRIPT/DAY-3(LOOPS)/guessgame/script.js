const max = prompt("enter the number");


const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");
while (true) {
    if (guess == "quit") {
        console.log("you quit the game");
        break;
    }
    if (guess == random) {
        console.log("you guess the right answer");
        break;

    }
    else if (guess<random) {
        guess = prompt("your guess is small, please try again ");
    }
    else if (guess>random) {
        guess = prompt("your guess is greater, please try again ");
    }
    else {
        guess = prompt("your guess was wrong");
        console.log("you are wrong");

    }

}