// index.js
function rollDice() {
    var rollCount = 0;
    var maxRolls = 8; // Change this value to control the number of rolls before showing the result
    var intervalTime = 100; // Time in milliseconds between each dice change (0.1 seconds)
    //intervalfunction is a function that call herself until she get to the max . here i use that every 0.1 sec its calling her self 
    //and after 8 times its give me the results 
    var interval = setInterval(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomDiceImage1 = "dice" + randomNumber1 + ".png";
        var randomImageSource1 = "images/" + randomDiceImage1;

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomDiceImage2 = "dice" + randomNumber2 + ".png";
        var randomImageSource2 = "images/" + randomDiceImage2;

        // Update the image sources
        document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        rollCount++;
        if (rollCount === maxRolls) {
            clearInterval(interval);

            // Update the winner message
            if (randomNumber1 > randomNumber2) {
                document.querySelector("h1").innerHTML = "Player Number 1 Wins! 🚩";
            } else if (randomNumber2 > randomNumber1) {
                document.querySelector("h1").innerHTML = "Player Number 2 Wins! 🚩";
            } else {
                document.querySelector("h1").innerHTML = "It's a Draw! 🚩";
            }
        }
    }, intervalTime);
}

document.getElementById("rollButton").addEventListener("click", rollDice);
