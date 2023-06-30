(() => {
    'use strict';

    // Fetch the form we want to apply custom Bootstrap validation styles to
    const form = document.getElementById('loginForm');

    // Prevent form submission and perform custom validation
    form.addEventListener('submit', event => {
        event.preventDefault();

        // Reset previous error styling
        form.classList.remove('was-validated');

        // Get form input values
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Perform custom validation
        let hasError = false;

        // Custom validation case: Check if username is empty
        if (username === '') {
            setFieldError(usernameInput, 'يرجى إدخال اسم المستخدم.');
            hasError = true;
        }

        // Custom validation case: Check if password is empty
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
        // Add error styling to the field and show the error message
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
