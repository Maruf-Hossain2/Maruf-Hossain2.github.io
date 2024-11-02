/* Basic body styles */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background: black;
    color: #ffffff;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content horizontally */
}

/* Neon cursor styles */
.cursor {
    position: fixed;
    width: 20px; /* Size of the cursor */
    height: 20px; /* Size of the cursor */
    border-radius: 50%; /* Make it circular */
    background: rgba(0, 255, 255, 0.7); /* Neon color */
    pointer-events: none; /* Ensure it doesn't interfere with other elements */
    transition: transform 0.1s ease-in-out; /* Smooth movement */
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.8); /* Neon glow */
}

/* Update cursor position */
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

/* Style for particles */
.particle {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(0, 255, 255, 0.8); /* Neon color */
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5);
    animation: fadeOut 0.8s forwards; /* Animation to fade out */
    transition: transform 0.2s ease; /* Smooth transition for particles */
}

/* Animation to fade out particles */
@keyframes fadeOut {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

header {
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    padding: 2rem 0;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: #00ffff;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}

#theme-toggle {
    margin-top: 20px;
    padding: 10px;
    cursor: pointer;
    background-color: rgba(0, 255, 255, 0.7);
    border: none;
    border-radius: 5px;
}

/* Particle styles */
.particle {
    position: fixed; /* Fixed position to follow the cursor even when scrolling */
    border-radius: 50%;
    background: rgba(0, 255, 255, 0.7);
    pointer-events: none;
    animation: fade-out 1s ease-out forwards, move 0.6s ease-out forwards; /* Adds movement and fade effect */
    z-index: 1000; /* Ensure particles are always on top */
}

@keyframes fade-out {
    from {
        opacity: 1;
        transform: scale(1); /* Starts at normal size */
    }
    to {
        opacity: 0;
        transform: scale(0.5); /* Shrinks as it fades */
    }
}

/* Layout adjustments for sections */
section {
    width: 100%;
    max-width: 1000px; /* Center the content */
    padding: 20px;
    text-align: center; /* Center the text */
}

/* About Me Section Styling */
.about-container {
    display: flex;
    flex-direction: row;
    align-items: center; /* Center the content vertically */
    max-width: 1200px; /* Limit width of the section */
    margin: auto; /* Center the section */
}

.about-image {
    flex: 1; /* Allow the image to take one part */
    display: flex;
    justify-content: center; /* Center the image horizontally */
    padding: 20px; /* Padding around the image */
}

.profile-img {
    border-radius: 50%; /* Make the image circular */
    width: 150px; /* Image width */
    height: 150px; /* Image height */
    object-fit: cover; /* Maintain aspect ratio */
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); /* Glow effect */
}

.about-content {
    flex: 2; /* Allow the content to take two parts */
    padding: 20px; /* Padding around the text */
    color: #fff; /* Text color */
}

.heading {
    text-align: center;
    font-size: 60px;
    color: #00ffff; /* Futuristic cyan color */
    text-transform: capitalize;
    font-weight: 300;
    margin-bottom: 50px;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8); /* Glow effect */
}

.about-content h2 {
    font-size: 36px; /* Size of the title */
    color: #00ffff; /* Futuristic cyan color */
    margin-bottom: 20px; /* Spacing below the title */
}

.about-content p {
    font-size: 18px; /* Text size */
    line-height: 1.5; /* Line spacing */
    margin-bottom: 15px; /* Spacing between paragraphs */
}

.about-content a {
    color: #00ffff; /* Link color */
    text-decoration: none; /* Remove underline from links */
    font-weight: bold; /* Bold link */
}

.about-content a:hover {
    text-decoration: underline; /* Underline links on hover */
}

/* Skills Section Styling */
.skill-section {
    position: relative;
    margin: 100px 0;
}

.heading {
    text-align: center;
    font-size: 60px;
    color: #00ffff; /* Futuristic cyan color */
    text-transform: capitalize;
    font-weight: 300;
    margin-bottom: 100px;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8); /* Glow effect */
}

.skills-container {
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    color: #fff;
}

.skill-card {
    position: relative;
    background: rgba(0, 255, 255, 0.05); /* Transparent card background */
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* Futuristic glow */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    overflow: hidden; /* Ensures hover animation remains within the card */
    perspective: 1000px; /* Gives the 3D effect */
    height: 300px;
}

.skill-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
}

.skill-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d; /* Keeps both sides in 3D */
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
}

/* Flip on hover */
.skill-card:hover .skill-inner {
    transform: rotateY(180deg);
}

/* Front and Back of the card */
.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hides the back when facing front */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

/* Front of the card */
.card-front {
    background-color: rgba(0, 255, 255, 0.1);
}

/* Back of the card */
.card-back {
    background-color: rgba(0, 255, 255, 0.9);
    color: black;
    transform: rotateY(180deg); /* Starts rotated */
}

.skill-img {
    display: block;
    margin: auto;
    height: 150px;
    filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5)); /* Glowing effect */
}

.skill-name {
    font-size: 30px;
    font-weight: 300;
    text-align: center;
    text-transform: capitalize;
    margin: 20px 0;
    color: #00ffff; /* Cyan futuristic */
    text-shadow: 0 0 5px rgba(0, 255, 255, 0.6);
}

.skill-info {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    padding: 10px;
}

/* Skill percentage circle */
.skill-percentage {
    position: absolute;
    top: 10px;
    right: 10px;
    background: conic-gradient(#00ffff calc(var(--percentage) * 1%), transparent 0); /* Circle fill effect */
    color: black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); /* Glow effect */
}

/* Front and back to share same percentage */
.card-front .skill-percentage,
.card-back .skill-percentage {
    position: absolute;
    top: 10px;
    right: 10px;
}

/* Colors for different skill levels */
.skill-card:nth-child(1) .skill-percentage {
    --percentage: 0.98; /* 98% for HTML */
    background-color: rgba(255, 79, 79, 0.8);
}

.skill-card:nth-child(2) .skill-percentage {
    --percentage: 0.98; /* 98% for CSS */
    background-color: rgba(79, 160, 255, 0.8);
}

.skill-card:nth-child(3) .skill-percentage {
    --percentage: 0.85; /* 85% for JavaScript */
    background-color: rgba(255, 237, 79, 0.8);
}

.skill-card:nth-child(4) .skill-percentage {
    --percentage: 0.90; /* 90% for Node.js */
    background-color: rgba(82, 255, 79, 0.8);
}

.skill-card:nth-child(5) .skill-percentage {
    --percentage: 0.92; /* 92% for React.js */
    background-color: rgba(79, 223, 255, 0.8);
}

/* Pie chart styling */
.pie-chart {
    position: relative;
    width: 50px;  /* Adjust size as needed */
    height: 50px; /* Adjust size as needed */
    border-radius: 50%;
    background: conic-gradient(
        rgba(0, 255, 255, 0.8) var(--percentage, 0%), 
        rgba(255, 255, 255, 0.3) 0
    );
    margin: auto; /* Center the pie chart */
}

/* Percentage text styling */
.percentage-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px; /* Font size for the percentage */
    color: black;    /* Text color */
    font-weight: bold; /* Make it bold */
}

/* Projects Section Styling */

.projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
    gap: 40px; /* Space between cards */
    color: #fff; /* Text color */
}

.project-card {
    background: rgba(0, 255, 255, 0.2); /* Transparent card background */
    border-radius: 15px; /* Rounded corners */
    padding: 20px; /* Padding inside the card */
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* Futuristic glow */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition */
}

.project-card:hover {
    transform: translateY(-10px); /* Lift effect on hover */
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.5); /* Stronger glow on hover */
}

.project-image img {
    width: 100%; /* Full width image */
    border-radius: 10px; /* Rounded corners */
}

.project-title {
    font-size: 24px; /* Title size */
    color: #00ffff; /* Futuristic cyan color */
    margin: 15px 0; /* Spacing around the title */
}

.project-description {
    font-size: 16px; /* Description size */
    line-height: 1.5; /* Line spacing */
    margin-bottom: 20px; /* Space below the description */
}

.project-link {
    display: inline-block; /* Block display for styling */
    padding: 10px 15px; /* Button padding */
    background-color: #00ffff; /* Button color */
    color: black; /* Text color */
    border-radius: 5px; /* Rounded corners */
    text-decoration: none; /* Remove underline */
    font-weight: bold; /* Bold text */
    transition: background-color 0.3s ease; /* Smooth transition */
}

.project-link:hover {
    background-color: rgba(0, 255, 255, 0.8); /* Darker shade on hover */
}

/* Light mode styles */
/* Global Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.5s, color 0.5s;
}

.light-mode {
    background-color: #ffffff; /* Light background */
    color: #333333; /* Dark text for readability */
}

.dark-mode {
    background-color: #121212; /* Dark background */
    color: #ffffff; /* Light text for readability */
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

/* Contact Section */
.contact {
    background-color: #f9f9f9; /* Light background for contact section */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.5s;
}

.contact h2 {
    margin-bottom: 10px;
}

.contact form {
    display: flex;
    flex-direction: column;
}

.contact label {
    margin-bottom: 5px;
    font-weight: bold;
}

/* Inputs and Textareas */
.contact input,
.contact textarea {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s;
}

/* Submit Button */
.contact input[type="submit"] {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.contact input[type="submit"]:hover {
    background-color: #0056b3;
}

/* Adjustments for light mode */
.light-mode .contact {
    background-color: #ffffff; /* Background for light mode */
    color: #333; /* Text color for light mode */
}

.light-mode .contact label,
.light-mode .contact input,
.light-mode .contact textarea {
    border-color: #ccc; /* Input border color in light mode */
}

.light-mode .contact input[type="submit"] {
    background-color: #007bff; /* Submit button color */
}

/* Adjustments for dark mode */
.dark-mode .contact {
    background-color: #333333; /* Background for dark mode */
    color: #ffffff; /* Text color for dark mode */
}

.dark-mode .contact label,
.dark-mode .contact input,
.dark-mode .contact textarea {
    border-color: #555; /* Input border color in dark mode */
    color: #ffffff; /* Text color for inputs in dark mode */
}

.dark-mode .contact input[type="submit"] {
    background-color: #007bff; /* Submit button color */
}

/* Theme Toggle Button Styling */
#theme-toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px; /* Size of the lightbulb icon */
    color: #00ffff; /* Default futuristic cyan */
    position: fixed;
    top: 20px;
    right: 20px;
    outline: none;
    transition: color 0.3s, transform 0.3s; /* Smooth transition for color and scale */
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); /* Glow effect */
}

#theme-toggle:hover {
    transform: scale(1.2); /* Slightly larger on hover */
}

#theme-toggle .fa-lightbulb {
    color: #00ffff; /* Lightbulb color when the dark mode is active */
}

#theme-toggle.light-mode .fa-lightbulb {
    color: #ffeb3b; /* Yellow lightbulb when light mode is active */
}

#theme-toggle.light-mode:hover {
    transform: scale(1.2); /* Slightly larger on hover */
}

/* Hobbies Section Styling */
.hobbies-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
    gap: 40px; /* Space between cards */
    color: #fff; /* Text color */
}

.hobby-card {
    background: rgba(0, 255, 255, 0.2); /* Transparent card background */
    border-radius: 15px; /* Rounded corners */
    padding: 20px; /* Padding inside the card */
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* Futuristic glow */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition */
    text-align: center; /* Center align text */
}

.hobby-card:hover {
    transform: translateY(-10px); /* Lift effect on hover */
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.5); /* Stronger glow on hover */
}

.hobby-icon {
    width: 80px; /* Adjust size as needed */
    height: 80px; /* Adjust size as needed */
    margin-bottom: 15px; /* Spacing below the icon */
}

.hobby-title {
    font-size: 24px; /* Title size */
    color: #00ffff; /* Futuristic cyan color */
    margin: 10px 0; /* Spacing around the title */
}

.hobby-description {
    font-size: 16px; /* Description size */
    line-height: 1.5; /* Line spacing */
}

/* Certifications Section Styling */
.certifications-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
    gap: 40px; /* Space between cards */
    color: #fff; /* Text color */
}

.certification-card {
    background: rgba(0, 255, 255, 0.2); /* Transparent card background */
    border-radius: 15px; /* Rounded corners */
    padding: 20px; /* Padding inside the card */
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* Futuristic glow */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition */
    text-align: center; /* Center align text */
}

.certification-card:hover {
    transform: translateY(-10px); /* Lift effect on hover */
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.5); /* Stronger glow on hover */
}

.certification-title {
    font-size: 24px; /* Title size */
    color: #00ffff; /* Futuristic cyan color */
    margin: 10px 0; /* Spacing around the title */
}

.certification-issuer,
.certification-date {
    font-size: 16px; /* Issuer and date size */
    margin: 5px 0; /* Spacing around the text */
}

.certification-description {
    font-size: 14px; /* Description size */
    line-height: 1.5; /* Line spacing */
}

/* Resume Section Styling */
.resume-description {
    font-size: 18px; /* Description size */
    color: #fff; /* Text color */
    margin-bottom: 20px; /* Spacing below description */
}

.resume-download-button {
    display: inline-block; /* Block display for padding */
    padding: 15px 30px; /* Button padding */
    font-size: 20px; /* Button text size */
    color: #fff; /* Button text color */
    background-color: #00ffff; /* Button background color */
    border-radius: 5px; /* Rounded corners */
    text-decoration: none; /* Remove underline */
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3); /* Button glow */
    transition: background-color 0.3s, transform 0.3s; /* Smooth transition */
}

.resume-download-button:hover {
    background-color: #008b8b; /* Darker background on hover */
    transform: translateY(-5px); /* Lift effect on hover */
}

/* Contact Section */
.contact {
    background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
}

.contact h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #00ffff; /* Neon green color */
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

.contact form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    margin: 0 auto;
}

.contact label {
    font-size: 1.2em;
    color: #ccc; /* Light gray color */
}

.contact input,
.contact textarea {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    padding: 10px;
    font-size: 1em;
    transition: background 0.3s, border 0.3s;
}

.contact input:focus,
.contact textarea:focus {
    background: rgba(0, 255, 255, 0.2); /* Light blue on focus */
    border-color: #00ffff; /* Neon green border */
    outline: none;
}

.contact input[type="submit"] {
    background: #00ffff; /* Neon green background */
    color: #000; /* Black text color */
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2em;
    transition: background 0.3s, transform 0.3s;
}

.contact input[type="submit"]:hover {
    background: #00ffff; /* Darker green on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
}

/* Responsive design for smaller screens */
@media (max-width: 600px) {
    form {
        flex-direction: column; /* Stack vertically for small screens */
    }
}

/* Navbar Styling */
.navbar {
    position: fixed; /* Make navbar fixed at the top */
    top: 0;
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center adjustment */
    width: auto; /* Remove full width */
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent dark background */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Shadow effect */
    z-index: 1000; /* Ensure it stays on top of other elements */
    padding: 10px 20px; /* Padding for the navbar */
}

.navbar ul {
    list-style-type: none; /* Remove default list styling */
    display: flex;
    justify-content: center; /* Center items */
    padding: 0; /* Reset padding */
    margin: 0; /* Reset margin */
}

.navbar a {
    color: #00ffff; /* Link color */
    text-decoration: none; /* Remove underline */
    font-size: 16px; /* Font size */
    padding: 10px 15px; /* Padding around links */
    border: 2px solid #00ffff; /* Border for button effect */
    border-radius: 5px; /* Rounded corners */
    background: rgba(0, 0, 0, 0.5); /* Button background */
    transition: background 0.3s, transform 0.3s; /* Smooth transition for effects */
    position: relative; /* Position for pseudo-element */
}

.navbar a:hover {
    background: rgba(0, 255, 255, 0.7); /* Lighten background on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
}

h1 {
    text-align: center;
    font-size: 48px;
    color: #00ffff; /* Futuristic cyan */
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.8); /* Glow effect */
    margin-top: 80px; /* Space for fixed navbar */
}

p {
    text-align: center;
    font-size: 20px;
    color: #ffffff; /* White text */
    margin: 20px 0;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8); /* Dark background */
    color: #ffffff; /* White text */
    box-shadow: 0 -4px 20px rgba(0, 255, 255, 0.5); /* Glow effect */
    margin-top: 50px;
}

footer p {
    margin: 10px 0;
    font-size: 16px;
}

footer a {
    color: #00ffff; /* Futuristic cyan color */
    margin: 0 10px;
    font-size: 24px; /* Adjust icon size */
    transition: transform 0.3s, color 0.3s; /* Smooth transition */
}

footer a:hover {
    color: rgba(0, 255, 255, 0.7); /* Slightly brighter on hover */
    transform: scale(1.2); /* Slightly larger on hover */
}

/* Email styling */
footer p:first-child {
    margin-bottom: 15px;
    font-size: 18px;
}
