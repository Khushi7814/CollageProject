
// Carousel functionality
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function nextImage() {
    carouselImages[currentIndex].style.transform = 'scale(1)';
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].style.transform = 'scale(1.05)';
}

setInterval(nextImage, 3000); // Change image every 3 seconds

// Form validation and submission
const bookingForm = document.querySelector('.booking-form');
const destinationInput = bookingForm.querySelector('input[type="text"]');
const dateInput = bookingForm.querySelector('input[type="date"]');
const roomSelect = bookingForm.querySelector('select');
const submitButton = bookingForm.querySelector('button');

// Function to validate form
function validateForm() {
    let isValid = true;

    // Check if destination is provided
    if (destinationInput.value.trim() === "") {
        alert("Please enter a destination.");
        isValid = false;
    }

    // Check if date is selected
    if (dateInput.value === "") {
        alert("Please select a date.");
        isValid = false;
    }

    // Check if room type is selected
    if (roomSelect.value === "") {
        alert("Please select a room type.");
        isValid = false;
    }

    return isValid;
}

// Form submission event listener
bookingForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    if (validateForm()) {
        alert("Booking Successful! We will send a confirmation email.");
        // Optionally reset the form after successful submission
        bookingForm.reset();
    }
});

// Optional: Disable the submit button until all fields are filled (real-time validation)
bookingForm.addEventListener('input', function () {
    if (destinationInput.value.trim() !== "" && dateInput.value !== "" && roomSelect.value !== "") {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

