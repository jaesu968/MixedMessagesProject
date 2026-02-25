
# Inspire Me Today

Welcome to **Inspire Me Today**! This is a beginner-friendly web project that generates a random inspirational message every time you click a button.

## 🌟 Key Features

- Simple and clean user interface
- Generates a new inspirational message with each click
- Built with HTML, CSS, and JavaScript—easy to understand and modify
- Can be run both in your browser and in Node.js (for testing)
- Great starting point for learning about DOM manipulation and randomization in JavaScript

## 🚀 How It Works

1. Open the website in your browser.
2. Click the **Generate Message** button.
3. A random inspirational message will appear below the button.

You can also run the script in your terminal using Node.js to see a random message printed out:

```bash
node script.js
```

## 🗂️ Project Organization

- `index.html` — Main web page
- `resources/styles.css` — Styles for the website
- `script.js` — JavaScript for generating and displaying messages
- `README.md` — Project documentation

## 📝 How script.js Works

The core logic for generating and displaying messages is in `script.js`. Here’s a quick breakdown of the key parts:

- **Message Storage:**
	- All inspirational messages are stored in a JavaScript object for easy access.

- **Random Message Generation:**
	- The `generateMessage()` function picks a random message each time it is called.
	- It uses `Math.random()` to select a random key from the messages object.

- **Displaying the Message:**
	- In the browser, `generateMessage()` updates the text inside the `<p id="message">` element so users see a new message every time they click the button.
	- The button is connected to the function using an event listener: when you click the button, a new message is generated and shown.

- **Node.js Compatibility:**
	- If you run the script in Node.js (outside the browser), it simply prints a random message to the terminal instead of trying to update the web page.

This structure makes it easy to expand the project with more messages or new features!

## 💡 Who Is This For?

This project is perfect for beginners who want to:
- Practice basic web development skills
- Learn how to use JavaScript to interact with web pages
- Understand how to use randomization and event listeners



