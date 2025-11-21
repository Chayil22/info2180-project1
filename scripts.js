/* Add your JavaScript to this file */

window.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.newsletter .message');

    // Safety check 
    if (!form || !emailInput || !messageDiv) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // stops the page from reloading

        const email = emailInput.value.trim();

        // Clear old message styles
        messageDiv.classList.remove('error', 'success');

        if (!email) {
            // No email entered
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.classList.add('error');
        } else {
            // Email entered successfully
            messageDiv.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.classList.add('success');

            //clears the input field
            form.reset();
        }
    });
});
