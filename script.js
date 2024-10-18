// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
let isLightMode = false;

themeToggle.addEventListener('click', () => {
    if (isLightMode) {
        document.body.style.background = 'black';
        document.body.style.color = '#ffffff';
        themeToggle.innerText = 'Switch to Light Mode';
    } else {
        document.body.style.background = '#ffffff';
        document.body.style.color = 'black';
        themeToggle.innerText = 'Switch to Dark Mode';
    }
    isLightMode = !isLightMode;
});

// Particle effect
document.addEventListener('mousemove', throttle((e) => {
    createParticle(e.clientX, e.clientY);
}, 100));

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1500);
}

// Throttle function to limit the rate of event execution
function throttle(callback, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall >= limit) {
            lastCall = now;
            callback(...args);
        }
    };
}

// Flipping skill cards functionality
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
    });
});
