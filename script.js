// Script for mouse-following particles
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle) => {
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
    });
});

// Particle creation function
function createParticles(num) {
    const particlesContainer = document.body;

    for (let i = 0; i < num; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 10 + 5; // Random size between 5 and 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random color
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particle.style.backgroundColor = color;

        // Append to body
        particlesContainer.appendChild(particle);

        // Animate particle
        setTimeout(() => {
            particle.style.opacity = 1;
            particle.style.transition = 'opacity 1s ease-out';
            particle.style.animation = 'fade-out 2s forwards';
            particle.style.top = `${Math.random() * window.innerHeight}px`;
            particle.style.left = `${Math.random() * window.innerWidth}px`;
        }, Math.random() * 1000); // Delay for random effect

        // Remove particle after animation
        particle.addEventListener('animationend', () => {
            particlesContainer.removeChild(particle);
        });
    }
}

// Create new particles every second
setInterval(() => {
    createParticles(5); // Number of particles to create
}, 1000);

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
