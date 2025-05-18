// contact.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission

        // Collect values
        const name = document.getElementById('name').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();

        // Basic validation
        if (!name || !contact || !email || !address) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/^\d{10}$/.test(contact)) {
            alert('Please enter a valid 10-digit contact number.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate successful form submission
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Optionally reset the form
        form.reset();
    });
});
