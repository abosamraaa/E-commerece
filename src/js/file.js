const decreaseButton = document.getElementById('decreaseButton');
const increaseButton = document.getElementById('increaseButton');
const countElement = document.getElementById('count');

let count = 0;

decreaseButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
});

increaseButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});