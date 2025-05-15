
// Toggle light and dark mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '☀';
    }
}

// Avatar selection
function selectAvatar(avatar) {
    document.querySelectorAll('.avatar-gallery img').forEach(img => img.classList.remove('selected'));
    document.querySelector(`img[src="${avatar}"]`).classList.add('selected');
}

// Form submission
function submitForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const selectedAvatar = document.querySelector('.avatar-gallery img.selected');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (!selectedAvatar) {
        alert('Please select an avatar.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // If all validations pass
    alert('Account has been created!');
}

// Form Clearance - To cleat the form, double click the button
function clearForm() {
    document.getElementById('registrationForm').reset();
    document.querySelectorAll('.avatar-gallery img').forEach(img => img.classList.remove('selected'));
    document.getElementById('passwordFeedback').textContent = '';
}

// Form validation
document.getElementById('submitButton').addEventListener('mouseover', function () {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const selectedAvatar = document.querySelector('.avatar-gallery img.selected');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ( !username || !emailRegex.test(email) || !selectedAvatar || password.length < 8 || password !== confirmPassword ) {
        this.disabled = true;
        this.classList.add('disabled');
        this.title = 'Please fix the issues in the form before submitting.';
    } else {
        this.disabled = false;
        this.title = '';
    }
});

// Disable button on mouseout
document.getElementById('submitButton').addEventListener('mouseout', function () {
    this.disabled = false;
    this.classList.remove('disabled');
    this.title = '';
});

// Password strength feedback
document.getElementById('password').addEventListener('input', function () {
    const feedback = document.getElementById('passwordFeedback');
    const value = this.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;

    feedback.innerHTML = `
        <span style="color: ${hasUpperCase ? 'green' : 'red'};">${hasUpperCase ? '✔' : '✘'} Uppercase</span><br>
        <span style="color: ${hasLowerCase ? 'green' : 'red'};">${hasLowerCase ? '✔' : '✘'} Lowercase</span><br>
        <span style="color: ${hasNumber ? 'green' : 'red'};">${hasNumber ? '✔' : '✘'} Number</span><br>
        <span style="color: ${hasSpecialChar ? 'green' : 'red'};">${hasSpecialChar ? '✔' : '✘'} Special Character</span><br>
        <span style="color: ${isValidLength ? 'green' : 'red'};">${isValidLength ? '✔' : '✘'} Minimum 8 Characters</span>
    `;
});

// Password match checker
document.getElementById('confirmPassword').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    const passwordMatchFeedback = document.getElementById('passwordMatchFeedback') || document.createElement('div');
    passwordMatchFeedback.id = 'passwordMatchFeedback';
    this.parentNode.appendChild(passwordMatchFeedback);

    if (password === confirmPassword) {
        passwordMatchFeedback.textContent = '✔ Passwords match';
        passwordMatchFeedback.style.color = 'green';
    } else {
        passwordMatchFeedback.textContent = '✘ Passwords do not match';
        passwordMatchFeedback.style.color = 'red';
    }
});

// Email validation checker
document.getElementById('email').addEventListener('input', function () {
    const email = this.value;
    const emailFeedback = document.getElementById('emailFeedback') || document.createElement('div');
    emailFeedback.id = 'emailFeedback';
    this.parentNode.appendChild(emailFeedback);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        emailFeedback.textContent = '✔ Valid email';
        emailFeedback.style.color = 'green';
    } else {
        emailFeedback.textContent = '✘ Invalid email';
        emailFeedback.style.color = 'red';
    }
});