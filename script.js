let targetColor;

let round = 1;

let bestScore = 0;

let streak = 0;

let totalRounds = 0;


function randomColor() {

    let letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {

        let randomNumber =
            Math.floor(Math.random() * 16);

        color += letters[randomNumber];
    }

    return color;
}


function newRound() {

    targetColor = randomColor();

    document.getElementById("targetColor").style.backgroundColor =
        targetColor;

    document.getElementById("colorPicker").value =
        "#A78BFA";

    document.getElementById("yourColor").style.backgroundColor =
        "#A78BFA";

    document.getElementById("scoreText").textContent =
        "Your score";

    document.getElementById("message").textContent =
        "Choose your color and make your best match!";

    document.getElementById("round").textContent =
        "ROUND " + round;
}


function hexToRGB(hex) {

    let r = parseInt(hex.substring(1, 3), 16);

    let g = parseInt(hex.substring(3, 5), 16);

    let b = parseInt(hex.substring(5, 7), 16);

    return [r, g, b];
}


function checkColor() {

    let chosenColor =
        document.getElementById("colorPicker").value;

    document.getElementById("yourColor").style.backgroundColor =
        chosenColor;

    let targetRGB = hexToRGB(targetColor);

    let chosenRGB = hexToRGB(chosenColor);

    let difference =
        Math.abs(targetRGB[0] - chosenRGB[0]) +
        Math.abs(targetRGB[1] - chosenRGB[1]) +
        Math.abs(targetRGB[2] - chosenRGB[2]);

    let maximumDifference = 765;

    let score =
        Math.round(
            100 - (difference / maximumDifference) * 100
        );

    totalRounds++;

    document.getElementById("totalRounds").textContent =
        totalRounds;


    if (score > bestScore) {

        bestScore = score;

        document.getElementById("bestScore").textContent =
            bestScore;
    }


    if (score >= 95) {

        streak++;

        document.getElementById("scoreText").textContent =
            "🏆 PERFECT! " + score + "%";

        document.getElementById("message").textContent =
            "You absolutely nailed that color! ✨";

    } else if (score >= 80) {

        streak++;

        document.getElementById("scoreText").textContent =
            "🔥 AMAZING! " + score + "%";

        document.getElementById("message").textContent =
            "That was seriously close!";

    } else if (score >= 60) {

        streak = 0;

        document.getElementById("scoreText").textContent =
            "✨ NICE! " + score + "%";

        document.getElementById("message").textContent =
            "Pretty good match! Try to beat it.";

    } else {

        streak = 0;

        document.getElementById("scoreText").textContent =
            "🎨 " + score + "%";

        document.getElementById("message").textContent =
            "Not quite! You can definitely get closer.";
    }


    document.getElementById("streak").textContent =
        streak;
}


document.getElementById("colorPicker").addEventListener(
    "input",
    function() {

        document.getElementById("yourColor").style.backgroundColor =
            this.value;

    }
);


newRound();
