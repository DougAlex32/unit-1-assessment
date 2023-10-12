let currentLetter = 'A';

    
    const letterDisplay = document.getElementById('letter-display');
    const incrementButton = document.getElementById('increment-button');
    const decrementButton = document.getElementById('decrement-button');
    const letterInput = document.getElementById('letter-input');

    
    incrementButton.addEventListener('click', () => {
      incrementLetter();
    });

    decrementButton.addEventListener('click', () => {
      decrementLetter();
    });

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

   
    function incrementLetter() {
      if (currentLetter < 'Z') {
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
        updateLetterDisplay();
      }
    }

    
    function decrementLetter() {
      if (currentLetter > 'A') {
        currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) - 1);
        updateLetterDisplay();
      }
    }

    
    function updateLetterDisplay() {
      letterDisplay.textContent = currentLetter;
      letterInput.textContent = currentLetter;
    }