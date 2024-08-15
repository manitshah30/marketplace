document.getElementById("signup-id").onclick = function() {
    window.location.href = "signup.html";
};
const words = ["Fruits", "Vegetables", "Personal Care Products", "Beverages", "Bakery Products"];
let currentWordIndex = 0;
let isDeleting = false;
let dynamicText = document.getElementById('dynamic-text');
let charIndex = 0; // To track the current character index
let typingSpeed = 150; // Initial typing speed

function type() {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex--);
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at the end of the word before deleting
        setTimeout(() => isDeleting = true, 1000);
        typingSpeed = 50; // Speed up when deleting
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        typingSpeed = 150; // Reset typing speed
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});
