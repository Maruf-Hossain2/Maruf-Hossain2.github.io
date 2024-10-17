// Particle effect
const numParticles = 100; // Number of particles
const particles = [];

// Create particles
for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 10 + 5}px`; // Random size
    particle.style.height = particle.style.width; // Keep it circular
    particle.style.backgroundColor = `rgba(0, 255, 255, ${Math.random()})`; // Random color
    particle.style.position = 'absolute';
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(particle);
    particles.push(particle);
}

// Move particles away from the cursor
document.addEventListener('mousemove', (e) => {
    particles.forEach(particle => {
        const dx = particle.offsetLeft - e.pageX;
        const dy = particle.offsetTop - e.pageY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const moveAway = Math.max(0, (50 - distance) / 50); // Move away effect
        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * moveAway * 5; // Move particles
        const moveY = Math.sin(angle) * moveAway * 5;

        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Move particles randomly
function animateParticles() {
    particles.forEach(particle => {
        particle.style.left = `${parseFloat(particle.style.left) + (Math.random() - 0.5)}px`;
        particle.style.top = `${parseFloat(particle.style.top) + (Math.random() - 0.5)}px`;
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();
