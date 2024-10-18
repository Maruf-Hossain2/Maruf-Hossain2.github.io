// Light/Dark mode toggle
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeToggleButton.textContent = body.classList.contains('light-mode') ? 'Switch to Dark Mode' : 'Switch to Light Mode';
});

// Particle effect on mouse movement with trail
document.addEventListener('mousemove', (e) => {
    createParticle(e.pageX, e.pageY);
});

// Handles scrolling as well as mouse movement
document.addEventListener('scroll', (e) => {
    createParticle(event.clientX, event.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 10 + 5; // Random size between 5 and 15
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${x}px`; // Corrected particle positioning
    particle.style.top = `${y}px`; 

    document.body.appendChild(particle);

    // Fade out and remove particle after animation
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