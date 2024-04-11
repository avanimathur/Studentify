document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.querySelector('.sign-up');
    signUpBtn.addEventListener('click', function () {
        window.location.href = "./navigateToPages/dashboard.html";
    });

    const logInBtn = document.querySelector('.log-in');
    logInBtn.addEventListener('click', function () {
        window.location.href = "./navigateToPages/dashboard.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.getElementById("signupBtn");
    const signInBtn = document.getElementById("signinBtn");
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    signUpBtn.addEventListener("click", function () {
        if (validateForm()) {
            window.location.href = "../navigateToPages/services.html"; // Redirect to services.html for sign-up
        }
    });

    signInBtn.addEventListener("click", function () {
        if (validateForm()) {
            window.location.href = "../navigateToPages/services.html"; // Redirect to services.html for sign-in
        }
    });

    function validateForm() {
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('Please fill in all required fields.');
            return false;
        }
        return true;
    }
});
