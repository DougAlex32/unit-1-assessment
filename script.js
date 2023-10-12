let count = 0;

// Cache DOM elements
const countDisplay = document.getElementById('count-display');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const countInput = document.getElementById('count-input');

// Event listeners
plusButton.addEventListener('click', () => {
  const newValue = parseInt(countInput.value, 10) || 0;
  count += newValue;
  updateCountDisplay();
});

minusButton.addEventListener('click', () => {
  const newValue = parseInt(countInput.value, 10) || 0;
  count -= newValue;
  updateCountDisplay();
});

// Event listeners for button hover effect
plusButton.addEventListener('mouseover', () => {
  plusButton.style.backgroundColor = '#fff';
  plusButton.style.color = '#3498db';
});

plusButton.addEventListener('mouseout', () => {
  plusButton.style.backgroundColor = '#3498db';
  plusButton.style.color = '#fff';
});

minusButton.addEventListener('mouseover', () => {
  minusButton.style.backgroundColor = '#fff';
  minusButton.style.color = '#3498db';
});

minusButton.addEventListener('mouseout', () => {
  minusButton.style.backgroundColor = '#3498db';
  minusButton.style.color = '#fff';
});

// Helper function to update count display
function updateCountDisplay() {
    countDisplay.textContent = count;
    if (count < 0) {
      countDisplay.classList.add('negative');
    } else {
      countDisplay.classList.remove('negative');
    }
  }