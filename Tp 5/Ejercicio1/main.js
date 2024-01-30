


document.addEventListener('DOMContentLoaded', function () {
    let magicNumber;
    const startBtn = document.getElementById('startBtn');
    const gameContainer = document.getElementById('gameContainer');
    const guessInput = document.getElementById('guessInput');
    const submitBtn = document.getElementById('submitBtn');
  
    startBtn.addEventListener('click', function () {
      magicNumber = generateRandomNumber();
      alert('Número mágico generado. ¡Adivina el número!');
      startBtn.style.display = 'none';
      gameContainer.style.display = 'block';
    });
  
    submitBtn.addEventListener('click', function () {
      const userGuess = parseInt(guessInput.value);
  
      if (isNaN(userGuess)) {
        alert('Por favor, ingresa un número válido.');
        return;
      }
  
      if (userGuess === magicNumber) {
        alert('¡Felicidades! ¡Adivinaste el número!');
        resetGame();
      } else {
        const message = userGuess < magicNumber ? 'El número es mayor.' : 'El número es menor.';
        alert('Incorrecto. ' + message);
      }
    });
  
    function generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
    }
  
    function resetGame() {
      startBtn.style.display = 'block';
      gameContainer.style.display = 'none';
      guessInput.value = '';
    }
  });