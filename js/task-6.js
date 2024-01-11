function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');

createButton.addEventListener('click', function () {
  const input = document.querySelector('.controls-box input');
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});
    
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = box.style.height = 30 + i * 10 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}
    
function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}