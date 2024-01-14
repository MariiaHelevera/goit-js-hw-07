function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', function () {
  const input = document.querySelector('input[type=number]');
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = '';
});
    
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = box.style.height = 30 + i * 10 + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

destroyButton.addEventListener('click', destroyBoxes);
    
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}