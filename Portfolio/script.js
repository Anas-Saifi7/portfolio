

// Typing Effect
const typingText = document.querySelector('.typing-text');
const words = ["Web Developer","AI Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    let displayedText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);

    typingText.textContent = displayedText;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 400 : 800);
}

typeEffect();

document.getElementById('contact').addEventListener('send', function (event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
});


function toggleText(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}
