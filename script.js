let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 1;
const maxAttempts = 10;
let guessedNumbers = [];

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guessInput').value);
    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        document.getElementById('feedback').textContent = 'Please enter a valid number between 1 and 100.';
        document.getElementById('feedback').className = 'incorrect';
        return;
    }
    guessedNumbers.push(userGuess);
    let feedback = '';

    if (userGuess === randomNumber) {
        feedback = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        document.getElementById('feedback').className = 'correct';
        endGame();
    } else if (attempts === maxAttempts) {
        feedback = `Game over! The correct number was ${randomNumber}.`;
        document.getElementById('feedback').className = 'incorrect';
        endGame();
    } else {
        feedback = userGuess > randomNumber ? 'Too high! Try again.' : 'Too low! Try again.';
        document.getElementById('feedback').className = 'incorrect';
        attempts++;
    }

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('previousGuesses').textContent = `Previous guesses: ${guessedNumbers.join(', ')}`;
    document.getElementById('guessInput').value = '';
});

document.getElementById('resetGame').addEventListener('click', resetGame);

function endGame() {
    document.getElementById('submitGuess').disabled = true;
    document.getElementById('guessInput').disabled = true;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 1;
    guessedNumbers = [];
    document.getElementById('feedback').textContent = '';
    document.getElementById('previousGuesses').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').disabled = false;
}
