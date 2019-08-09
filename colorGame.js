//Variables
var header1 = document.querySelector("#header1");
var boxes = document.querySelectorAll(".boxes");
var randomColorGoal = "";
var colorDisplay = document.getElementsByClassName("colorDisplay")[0];
var boxColor = "";
var header = document.getElementById("header");
var randomColorsArray = [];
var newColorsBtn = document.getElementById("newColorsBtn");
var hard = document.getElementById("hard");
var easy = document.getElementById("easy");
var difficultyHard = true;

//Filling randomColorsArray and assigning it to the random color Goal

function generateRandomArrayAndGoal(difficultyHard) {
    console.log("from generateRandomArrayandGoal the difficultyHars is:" + difficultyHard);
    if (difficultyHard ) {
        header1.style.backgroundColor = "steelblue";
        for (var i = 3; i < boxes.length; i++) {
            boxes[i].style.display = "block";
        }
        for (var i = 0; i < 6; i++) {
            randomColorsArray[i] = randomColorMaker();
        }
        //Chooses randomly a color from the array and assigns it to the goal color
        randomColorGoal = randomColorsArray[Math.floor(Math.random() * 6)];
        console.log("to goal einai: " + randomColorGoal);
        colorDisplay.textContent = randomColorGoal;
    } else {
        // izimod
        header1.style.backgroundColor = "steelblue";
        randomColorsArray.splice(3, 3);
        for (var i = 3; i < boxes.length; i++) {
            boxes[i].style.display = "none";
        }
        for (var i = 0; i < 3; i++) {

            randomColorsArray[i] = randomColorMaker();
            console.log("apo arrayMaker iziMod for")
        }
        //Chooses randomly a color from the array and assigns it to the goal color
        randomColorGoal = randomColorsArray[Math.floor(Math.random() * 3)];
        console.log("to goal einai: " + randomColorGoal);
        colorDisplay.textContent = randomColorGoal;
    }
}


//Assigns random colors from the array and checks if you won or loose and you must try again
function game(difficultyHard) {
    generateRandomArrayAndGoal(difficultyHard);
    console.log("game's difficultyHard is" + difficultyHard);
    //Prints the colors
    randomColorsArray.forEach(function (colors) {
        console.log(colors);
    })
    //
    //
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = randomColorsArray[i];
        boxes[i].addEventListener("click", function () {
            boxColor = this.style.backgroundColor;

            if (boxColor == randomColorGoal) {
                document.querySelector("#message").textContent = "win";
                header1.style.backgroundColor = randomColorGoal;

                for (var i = 0; i < boxes.length; i++) {
                    boxes[i].style.backgroundColor = randomColorGoal;
                }
            } else {
                document.querySelector("#message").textContent = "Try Again";
                boxColor = "#232323";
                this.style.backgroundColor = boxColor;
            }
        })
    }
}

// The function of random color making
function randomColorMaker() {
    var r = Math.floor(Math.random() * 256);     // returns a random integer from 0 to 255
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb(" + r + ", " + g + ", " + b + ")");
}

//Run a simple game
game(difficultyHard);


//Buttons functionality

//New Colors Button
newColorsBtn.addEventListener("click", function () {
    document.querySelector("#message").textContent = "";

    console.log("new");
    game(difficultyHard);
})

//Shift difficulty and make buttons bg blue
hard.classList.add("selectedDifficultyButton");


easy.addEventListener("click", function () {
    this.classList.add("selectedDifficultyButton");
    hard.classList.remove("selectedDifficultyButton");
    difficultyHard = false;
    console.log(difficultyHard);

})

hard.addEventListener("click", function () {
    this.classList.add("selectedDifficultyButton");
    easy.classList.remove("selectedDifficultyButton");
    difficultyHard = true;
    console.log(difficultyHard);

})

