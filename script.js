// Light/Dark mode toggle
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggleButton.textContent = 'Switch to Dark Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Light Mode';
    }
});

// Particle effect on mouse move
document.addEventListener('mousemove', createParticle);

function createParticle(e) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
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
