// function to calculate the result of the survey
$(document).ready(
    (score = () => {
        let animalscore = 0;
        let landscapescore = 0;
        let popscore = 0;

        // get a list of the radio inputs on the page
        let choices = document.getElementsByTagName("input");
        // loop through all the radio inputs
        for (i = 0; i < choices.length; i++) {
            // if the radio is checked..
            if (choices[i].checked) {
                // add 1 to that choice's score
                if (choices[i].value == "an1") {
                    animalscore = animalscore + 1;
                }
                if (choices[i].value == "lan2") {
                    landscapescore = landscapescore + 1;
                }
                if (choices[i].value == "pop3") {
                    popscore = popscore + 1;
                }
                
            }
        }
        // Find out which choice got the highest score.
        let maxscore = Math.max(animalscore, landscapescore, popscore);
        // Display answer corresponding to that choice
        let answerbox1 = document.getElementById("answer");
        if (animalscore == maxscore) {
            // If user chooses the first choice the most, this outcome will be displayed.
            answerbox1.innerHTML = "Animals are your thing... why not try some of our animal portraits?";
        }
        if (landscapescore == maxscore) {
            // If user chooses the second choice the most, this outcome will be displayed.
            answerbox1.innerHTML = "Nature lover... take a look at some of our landscapes.";
        }
        if (popscore == maxscore) {
            // If user chooses the third choice the most, this outcome will be displayed.
            answerbox1.innerHTML = "Something more modern?  Browse our pop culture art.";
        }
        if(landscapescore == maxscore && popscore == maxscore && animalscore == maxscore) {
                answerbox1.innerHTML = "Try again!  Your answer is a bit hard to decipher";
                }
    })
);

// program the reset button
$(resetAnswer = () => {
        let answerbox = document.getElementById("answer");
        answerbox.innerHTML = "Your result will show up here!";
    });