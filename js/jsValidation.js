var rentalDatesInput = document.getElementById("rentalDates");

rentalDatesInput.addEventListener("change", function() {
    var selectedDate = rentalDatesInput.value;

    if (!isValidDate(selectedDate)) {
        alert("Please select a valid date.");
        rentalDatesInput.value = "";
    }
});

function isValidDate(dateString) {
    var dateFormat = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateString.match(dateFormat)) {
        return false;
    }

    var date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return false;
    }

    var currentDate = new Date();
    if (date < currentDate) {
        return false;
    }

    return true;
}
