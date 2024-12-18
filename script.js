// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 1;
const maxAttempts = 10;
let guessedNumbers = [];

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guessInput').value);
    guessedNumbers.push(userGuess);
    let feedback = '';

    if (userGuess === randomNumber) {
        feedback = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        endGame();
    } else if (attempts === maxAttempts) {
        feedback = `Game over! The correct number was ${randomNumber}.`;
        endGame();
    } else {
        feedback = userGuess > randomNumber ? 'Too high! Try again.' : 'Too low! Try again.';
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