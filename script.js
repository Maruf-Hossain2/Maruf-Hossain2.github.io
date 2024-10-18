// Script for mouse-following particles
document.addEventListener('mousemove', (e) => {
    const particle = createParticle(e.clientX, e.clientY);
    document.body.appendChild(particle);
});

// Particle creation function
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 10 + 5; // Random size between 5 and 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random color
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.backgroundColor = color;

    // Set particle position and opacity
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.opacity = 1;

    // Animate particle fade out
    setTimeout(() => {
        particle.style.opacity = 0;
        particle.style.transition = 'opacity 0.5s ease-out';
    }, 50); // Slight delay to ensure the particle is visible before fading out

    // Remove particle after animation
    particle.addEventListener('transitionend', () => {
        document.body.removeChild(particle);
    });

    return particle;
}

// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = 'Switch to Dark Mode';
    } else {
        themeToggleBtn.textContent = 'Switch to Light Mode';
    }
});
