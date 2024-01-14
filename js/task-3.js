const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', function () {
    const enteredName = this.value.trim();
    nameOutput.textContent = enteredName || 'Anonymous';
});