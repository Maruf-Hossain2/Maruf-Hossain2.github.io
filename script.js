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
        particle.style.transform = `translate(${Math.cos(angle) * moveAway * 10}px, ${Math.sin(angle) * moveAway * 10}px)`;
    });
});

// Move particles randomly
function animateParticles() {
    particles.forEach(particle => {
        const randomX = Math.random() * 2 - 1; // Random x direction
        const randomY = Math.random() * 2 - 1; // Random y direction
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
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();
