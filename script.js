function startGame() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    while (true) {
        guess = parseInt(prompt("Guess a number between 1 and 10:"));
        if (isNaN(guess)) {
            alert("Please enter a valid number.");
            continue;
        }
        if (guess === secretNumber) {
            alert("Bingo! Correct answer");
            break; // End the game if the user guesses correctly
            // } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
            //     alert("Close enough to the correct answer!");
            //     break; // End the game if the guess is close (±1)
        } else {
            if (guess > secretNumber) {
                alert("Wrong guess! Hint: Your guess is too high.");
            } else {
                alert("Wrong guess! Hint: Your guess is too low.");
            }
        }
    }
}
