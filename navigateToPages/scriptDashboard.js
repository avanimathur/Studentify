document.addEventListener("DOMContentLoaded", function () {
    const signUpBtn = document.querySelector('.sign-up');
    signUpBtn.addEventListener('click', function () {
        window.location.href = "/navigateToPages/dashboard.html";
    });

    const logInBtn = document.querySelector('.log-in');
    logInBtn.addEventListener('click', function () {
        window.location.href = "/navigateToPages/dashboard.html";
    });
});