// Create floating particles
const floatingBackground = document.querySelector('.floating-background');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 30 + 10; // Random size between 10px and 40px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    particle.style.opacity = Math.random();
    floatingBackground.appendChild(particle);

    // Remove the particle after a certain time
    setTimeout(() => {
        floatingBackground.removeChild(particle);
    }, 4000); // Adjust based on the duration of the animation

    // Recursive call to create more particles
    requestAnimationFrame(createParticle);
}

// Start creating particles
createParticle();
