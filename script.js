// Particle effect
const numParticles = 100; // Number of particles
const particles = [];
const particleSpeed = 1.5; // Speed of particle movement
const avoidDistance = 70; // Distance to avoid cursor

// Create particles
for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 10 + 5}px`; // Random size
    particle.style.height = particle.style.width; // Keep it circular
    particle.style.position = 'absolute';
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(particle);
    particles.push(particle);
}

// Move particles
function animateParticles() {
    particles.forEach(particle => {
        // Random movement
        const randomX = (Math.random() - 0.5) * particleSpeed; // Random x direction
        const randomY = (Math.random() - 0.5) * particleSpeed; // Random y direction

        particle.style.left = `${parseFloat(particle.style.left) + randomX}px`;
        particle.style.top = `${parseFloat(particle.style.top) + randomY}px`;

        // Keep particles within the window
        if (parseFloat(particle.style.left) < 0) {
            particle.style.left = '0px';
        } else if (parseFloat(particle.style.left) > window.innerWidth) {
            particle.style.left = `${window.innerWidth}px`;
        }
        if (parseFloat(particle.style.top) < 0) {
            particle.style.top = '0px';
        } else if (parseFloat(particle.style.top) > window.innerHeight) {
            particle.style.top = `${window.innerHeight}px`;
        }

        // Avoid cursor
        const mouseX = mousePosition.x;
        const mouseY = mousePosition.y;

        const dx = parseFloat(particle.style.left) - mouseX;
        const dy = parseFloat(particle.style.top) - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < avoidDistance) {
            const angle = Math.atan2(dy, dx);
            particle.style.left = `${parseFloat(particle.style.left) + Math.cos(angle) * (avoidDistance - distance)}px`;
            particle.style.top = `${parseFloat(particle.style.top) + Math.sin(angle) * (avoidDistance - distance)}px`;
        }
    });

    requestAnimationFrame(animateParticles);
}

// Track mouse position
const mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
window.addEventListener('mousemove', (event) => {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});

// Start animation
animateParticles();
