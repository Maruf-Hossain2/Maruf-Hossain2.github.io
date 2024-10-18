// Particle effect on mouse move
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
    }, 1500); // Particle disappears after 1.5s
}

// Theme toggle: Dark/Light mode
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Update button text based on the current theme
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = 'Switch to Dark Mode';
    } else {
        themeToggle.textContent = 'Switch to Light Mode';
    }
});

// Show skill details on hover
const skillCards = document.querySelectorAll('.skill-card');
const skillDetails = document.getElementById('skill-details');

skillCards.forEach(card => {
    card.addEventListener('mouseover', (e) => {
        const skillDescription = card.getAttribute('data-skill');
        skillDetails.innerHTML = `<p>${skillDescription}</p>`;
    });

    card.addEventListener('mouseout', () => {
        skillDetails.innerHTML = '<p>Hover over a skill to see details here!</p>';
    });
});

// Form submission with client-side validation
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (name && email && message) {
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
        alert('Message sent successfully!');
        event.target.reset(); // Clear the form after submission
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
