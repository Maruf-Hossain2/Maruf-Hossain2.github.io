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

    // Particle animation and removal
    setTimeout(() => {
        particle.remove();
    }, 1500); // Remove particle after 1.5 seconds
}

// Theme toggle: Light/Dark mode
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

// Form submission (basic client-side validation and console log)
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (name && email && message) {
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);

        // You can add an AJAX request or API call here to submit the data to the server
        alert('Message sent successfully!');
        event.target.reset(); // Clear the form after submission
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
