document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateLoginForm()) {
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
                
                if (email === 'Association@concordia.ca' && password === 'Association') {
                    window.location.href = 'campbuzz_assoc_prof.html';
                } else if (email === 'Student@concordia.ca' && password === 'Students') {
                    window.location.href = 'campbuzz_home.html';
                } else {
                    alert('Invalid credentials. Please try again.');
                }
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateRegisterForm()) {
                alert('Registration successful!');
            }
        });
    }
});

function validateLoginForm() {
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');
    let isValid = true;

    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid @concordia.ca email address');
        isValid = false;
    } else {
        clearError(email);
    }

    if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters long');
        isValid = false;
    } else {
        clearError(password);
    }

    return isValid;
}

function validateRegisterForm() {
    const name = document.getElementById('registerName');
    const email = document.getElementById('registerEmail');
    const studentId = document.getElementById('registerStudentId');
    const password = document.getElementById('registerPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    let isValid = true;

    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        isValid = false;
    } else {
        clearError(name);
    }

    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid @concordia.ca email address');
        isValid = false;
    } else {
        clearError(email);
    }

    if (!validateStudentId(studentId.value)) {
        showError(studentId, 'Please enter a valid 8-digit student ID');
        isValid = false;
    } else {
        clearError(studentId);
    }

    if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters long');
        isValid = false;
    } else {
        clearError(password);
    }

    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@concordia\.ca$/;
    return re.test(String(email).toLowerCase());
}

function validateStudentId(studentId) {
    const re = /^\d{8}$/;
    return re.test(studentId);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error') || document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    if (!formGroup.querySelector('.error')) {
        formGroup.appendChild(error);
    }
}

function clearError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error');
    if (error) {
        formGroup.removeChild(error);
    }
}

