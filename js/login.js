document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login");
    loginForm.addEventListener("submit", function(event) {
        var emailInput = document.getElementById("email");
        var passwordInput = document.getElementById("password");

        // Check if email is empty or not valid
        if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Check if password is empty or less than 8 characters
        if (passwordInput.value.trim() === "" || passwordInput.value.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault(); // Prevent form submission
            return;
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
