const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formElements = this.elements;
    const emailValue = formElements.email.value.trim();
    const passwordValue = formElements.password.value.trim();

    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
    }
    
    const formData = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formData);
    this.reset();
});