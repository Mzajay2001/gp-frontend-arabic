(() => {
    'use strict';
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', event => {
        event.preventDefault();
        form.classList.remove('was-validated');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        let hasError = false;
        if (username === '') {
            setFieldError(usernameInput, 'يرجى إدخال اسم المستخدم.');
            hasError = true;
        }
        if (password === '') {
            setFieldError(passwordInput, 'يرجى إدخال كلمة المرور.');
            hasError = true;
        }

        if (!hasError) {
            // Form is valid, submit the form or do whatever you want here
            alert('Login successful!');
            // form.submit(); // Uncomment this line to submit the form
        }

        form.classList.add('was-validated');
    });

    function setFieldError(field, errorMessage) {
        field.classList.add('is-invalid');
        const errorFeedback = field.nextElementSibling;
        errorFeedback.innerText = errorMessage;
        field.addEventListener('input', () => {
            field.classList.remove('is-invalid');
            errorFeedback.innerText = '';
          });

          field.addEventListener('blur', () => {
            if (field.value.trim() === '') {
              field.classList.add('is-invalid');
              errorFeedback.innerText = errorMessage;
            }
          });
    }
})();
