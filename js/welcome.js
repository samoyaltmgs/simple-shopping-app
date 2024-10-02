const clickButton = document.getElementById('addCart');
const carsCountSpan = document.getElementById('carsCount');

let availableCars = 10;

clickButton.addEventListener('click', function() {
    if (availableCars > 0) {
        availableCars--;
        carsCountSpan.textContent = availableCars;
        if (availableCars === 0) {
            clickButton.disabled = true;
            clickButton.textContent = "No cars available";
        }
    }
});

const clickButton1 = document.getElementById('addCart1');
const carsCountSpan1 = document.getElementById('carsCount1');

let availableCars1 = 10;

clickButton1.addEventListener('click', function() {
    if (availableCars1 > 0) {
        availableCars1--;
        carsCountSpan1.textContent = availableCars1;
        if (availableCars1 === 0) {
            clickButton1.disabled = true;
            clickButton1.textContent = "No cars available";
        }
    }
});

const clickButton2 = document.getElementById('addCart2');
const carsCountSpan2 = document.getElementById('carsCount2');

let availableCars2 = 10;

clickButton2.addEventListener('click', function() {
    if (availableCars2 > 0) {
        availableCars2--;
        carsCountSpan2.textContent = availableCars2;
        if (availableCars2 === 0) {
            clickButton2.disabled = true;
            clickButton2.textContent = "No cars available";
        }
    }
});

const clickButton3 = document.getElementById('addCart3');
const carsCountSpan3 = document.getElementById('carsCount3');

let availableCars3 = 10;

clickButton3.addEventListener('click', function() {
    if (availableCars3 > 0) {
        availableCars3--;
        carsCountSpan3.textContent = availableCars3;
        if (availableCars3 === 0) {
            clickButton3.disabled = true;
            clickButton3.textContent = "No cars available";
        }
    }
});
