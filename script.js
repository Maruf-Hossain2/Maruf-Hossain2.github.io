document.addEventListener('mousemove', createParticle);

function createParticle(e) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    const size = Math.random() * 20 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const x = e.clientX - size / 2;
    const y = e.clientY - size / 2;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    setTimeout(() => {
        particle.remove();
    }, 1500);
}
