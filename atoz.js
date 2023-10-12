let currentLetter = 'A';

    // Cache DOM elements
    const letterDisplay = document.getElementById('letter-display');
    const incrementButton = document.getElementById('increment-button');
    const decrementButton = document.getElementById('decrement-button');
    const letterInput = document.getElementById('letter-input');

    // Event listeners
    incrementButton.addEventListener('click', () => {
      incrementLetter();
    });

    decrementButton.addEventListener('click', () => {
      decrementLetter();
    });

    // Event listeners for button hover effect
    incrementButton.addEventListener('mouseover', () => {
      incrementButton.style.backgroundColor = '#fff';
      incrementButton.style.color = '#3498db';
    });

    incrementButton.addEventListener('mouseout', () => {
      incrementButton.style.backgroundColor = '#3498db';
      incrementButton.style.color = '#fff';
    });

    decrementButton.addEventListener('mouseover', () => {
      decrementButton.style.backgroundColor = '#fff';
      decrementButton.style.color = '#3498db';
    });

    decrementButton.addEventListener('mouseout', () => {
      decrementButton.style.backgroundColor = '#3498db';
      decrementButton.style.color = '#fff';
    });

    // Function to increment the letter
    function incrementLetter() {
      if (currentLetter < 'Z') {
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
        updateLetterDisplay();
      }
    }

    // Function to decrement the letter
    function decrementLetter() {
      if (currentLetter > 'A') {
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
        updateLetterDisplay();
      }
    }

    // Helper function to update letter display
    function updateLetterDisplay() {
      letterDisplay.textContent = currentLetter;
      letterInput.textContent = currentLetter;
    }