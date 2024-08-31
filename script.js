document.querySelector('.celebrate-btn').addEventListener('click', function() {
    const confetti = document.querySelector('.confetti');
    confetti.style.opacity = '1';
    confetti.style.animation = 'none'; // Reset animation
    setTimeout(() => {
        alert('Happy Birthday! 🎂🎉 Enjoy your special day!');
    }, 1000); // Show the alert after 1 second of confetti animation
});
