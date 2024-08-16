document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');

    const validUSPhoneNumber = (phoneNumber) => {
        // Define regex for validating US phone numbers
        const regex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
        return regex.test(phoneNumber);
    };

    checkBtn.addEventListener('click', () => {
        const inputVal = userInput.value.trim();

        if (!inputVal) {
            alert('Please provide a phone number');
            return;
        }

        if (validUSPhoneNumber(inputVal)) {
            resultsDiv.textContent = `Valid US number: ${inputVal}`;
        } else {
            resultsDiv.textContent = `Invalid US number: ${inputVal}`;
        }
    });

    clearBtn.addEventListener('click', () => {
        resultsDiv.textContent = '';
        userInput.value = '';
    });
});
