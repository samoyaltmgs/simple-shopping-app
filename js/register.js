$(document).ready(function() {
    $("#register").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 3
            },
            lastName: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                phoneUs: true
            },
            password: {
                required: true,
                minlength: 8,
                strongPassword: true
            },
            retypePassword: {
                required: true,
                equalTo: "#password"
            },
            dateOfBirth: {
                required: true,
                date: true,
                maxDate: "2015-12-31"
            },
            street: {
                required: true
            },
            province: {
                required: true
            },
            city: {
                required: true
            }
        },
        messages: {
            firstName: {
                minlength: "First name must be at least 3 characters long."
            },
            lastName: {
                minlength: "Last name must be at least 3 characters long."
            },
            password: {
                minlength: "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character."
            },
            dateOfBirth: {
                maxDate: "Date of birth cannot be later than 2015."
            },
            retypePassword: {
                equalTo: "Passwords do not match."
            }
        }
    });

    // Custom validation method for strong password
    $.validator.addMethod("strongPassword", function(value, element) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    }, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
});
