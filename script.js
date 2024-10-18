// Light/Dark mode toggle
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeToggleButton.textContent = body.classList.contains('light-mode') ? 'Switch to Dark Mode' : 'Switch to Light Mode';
});

// Particle effect on mouse movement
document.addEventListener('mousemove', (e) => {
    createParticle(e);
});

function createParticle(e) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 10 + 5; // Random size between 5 and 15
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;
    document.body.appendChild(particle);
    
    // Remove particle after animation ends
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Implementing the card flip animation on hover
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('flipped');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
    });
});
