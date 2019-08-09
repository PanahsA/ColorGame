
//Variables
var boxes = document.querySelectorAll(".boxes");
var randomColorGoal = "";
var colorDisplay = document.getElementsByClassName("colorDisplay")[0];
var boxColor = "";
var header = document.getElementById("header");
var randomColorsArray = [];
var newColorsBtn=document.getElementById("newColorsBtn");
var hard=document.getElementById("hard");
var easy=document.getElementById("easy");
var difficultyHard=true;

//Filling randomColorsArray

function generateRandom(difficultyHard) {
    if(difficultyHard===true) {
        header.style.backgroundColor = "dodgerblue";

        for (var i = 0; i < 6; i++) {
            randomColorsArray[i] = randomColorMaker();
        }

//Chooses randomly a color from the array and assigns it to the goal color
        randomColorGoal = randomColorsArray[Math.floor(Math.random() * 6)];
        console.log("to goal einai: " + randomColorGoal);
        colorDisplay.textContent = randomColorGoal;
    }else{
        izimod

        header.style.backgroundColor = "dodgerblue";

        for (var i = 0; i < 2; i++) {
            randomColorsArray[i] = randomColorMaker();
        }

//Chooses randomly a color from the array and assigns it to the goal color
        randomColorGoal = randomColorsArray[Math.floor(Math.random() * 6)];
        console.log("to goal einai: " + randomColorGoal)
    }
}

//Assigns random colors from the array and checks if you won or loose and you must try again
function game(difficultyHard) {
    if(difficultyHard===true){
        generateRandom(difficultyHard);
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = randomColorsArray[i];
            boxes[i].addEventListener("click", function () {
                boxColor = this.style.backgroundColor;
                if (boxColor == randomColorGoal) {
                    document.querySelector("#message").textContent = "win";
                    for (var i = 0; i < boxes.length; i++) {
                        boxes[i].style.backgroundColor = randomColorGoal;
                        header.style.backgroundColor = randomColorGoal;
                    }
                } else {
                    document.querySelector("#message").textContent = "Try Again";
                    boxColor = "#232323";
                    this.style.backgroundColor = boxColor;
                }
            })
        }
    }else{
        izimod
        generateRandom(difficultyHard);
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = randomColorsArray[i];
            boxes[i].addEventListener("click", function () {
                boxColor = this.style.backgroundColor;
                if (boxColor == randomColorGoal) {
                    document.querySelector("#message").textContent = "win";
                    for (var i = 0; i < boxes.length; i++) {
                        boxes[i].style.backgroundColor = randomColorGoal;
                        header.style.backgroundColor = randomColorGoal;
                    }
                } else {
                    document.querySelector("#message").textContent = "Try Again";
                    boxColor = "#232323";
                    this.style.backgroundColor = boxColor;
                }
            })
        }
    }
}


function randomColorMaker() {
    var r = Math.floor(Math.random() * 256);     // returns a random integer from 0 to 255
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}


game();

//New colors button functionality

newColorsBtn.addEventListener("click",function () {
    console.log("new");
    game();
})

//Easy func
easy.addEventListener("click",function () {
    if(difficultyHard===true){
        difficultyHard=false;
        game(difficultyHard);
    }
})

//Hard func
hard.addEventListener("click",function () {
    if(difficultyHard===true){
        console.log("You already at Hard");
    }else{
        alert("Hard mode mpitsatsoz mtkoz");
        game(difficultyHard);
    }
})

