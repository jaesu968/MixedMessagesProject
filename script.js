// function to generate a random message
function generateMessage() {
    const messages = {
        1: "You are doing great! Keep it up!",
        2: "Believe in yourself and all that you are.",
        3: "Every day is a new opportunity to grow.",
        4: "You have the power to create change.",
        5: "Stay positive, work hard, and make it happen."
    }
    // Generate a random index to select a message
    const randomIndex = Math.floor(Math.random() * Object.keys(messages).length) + 1;
    // Display the selected message in the HTML element with id "message"
    if (typeof document !== 'undefined') {
        document.getElementById("message").innerText = messages[randomIndex];
    }
    return messages[randomIndex];
}

// Add an event listener to the button to generate a message when clicked
if (typeof document !== 'undefined') {
    document.getElementById("generateButton").addEventListener("click", generateMessage);
    // Generate a message when the page loads
    window.onload = generateMessage;
}

// Node.js test: print a random message if run in terminal
if (typeof document === 'undefined') {
    console.log(generateMessage());
}