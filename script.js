const navItems = document.querySelectorAll('.navigation li');

function activeLink() {
    // Remove 'active' class from all other items
    navItems.forEach(item => {
        if (item !== this) {
            item.classList.remove('active');
            item.querySelector('a .icon').classList.remove('smooth-transition');
        }
    });

    // Add 'active' class to the clicked item
    this.classList.add('active');
    this.querySelector('a .icon').classList.add('smooth-transition');

    // For smooth transition add timeout
    setTimeout(() => {
        this.querySelector('a .icon').classList.remove('smooth-transition');
    }, 500);
}

navItems.forEach(item => item.addEventListener('click', activeLink));

// *** Add this code to handle scroll-linked navigation ***
const sections = document.querySelectorAll('section'); // Select all sections

function updateActiveNavItem() {
    let currentSection = null;
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
            currentSection = section.id;
        }
    });

    navItems.forEach(item => {
        if (item.querySelector('a').href.includes(`#${currentSection}`)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavItem);
updateActiveNavItem(); // Initial update

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement; // Target the <html> element

themeToggle.addEventListener('click', () => {
    const currentTheme = html.dataset.theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.dataset.theme = newTheme; // Set the theme on the <html> element

    // Optional: Update the toggle button visual to reflect the new theme
    if (newTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // or any light icon
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // or any dark icon
    }
});

//Load the theme from local storage on page load.  This preserves the theme choice across page refreshes.
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    html.dataset.theme = storedTheme;
    if (storedTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
} else {
    //Set a default theme if not found in local storage
    html.dataset.theme = 'dark';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Neon cursor effect
const neonCursor = document.getElementById('neonCursor');
neonCursor.style.display = 'block';

document.addEventListener('mousemove', (e) => {
    neonCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    neonCursor.classList.add('smooth');
});

// Particle effect
let w, h;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const { sin, cos, PI, hypot, min, max } = Math;

function rnd(x = 1, dx = 0) {
    return Math.random() * x + dx;
}

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, PI * 2);
    ctx.fill();
}

function drawLine(x0, y0, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    many(100, (i) => {
        i = (i + 1) / 100;
        let x = lerp(x0, x1, i);
        let y = lerp(y0, y1, i);
        let k = noise(x / 5 + x0, y / 5 + y0) * 2;
        ctx.lineTo(x + k, y + k);
    });
    ctx.stroke();
}

function many(n, f) {
    return [...Array(n)].map((_, i) => f(i));
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function noise(x, y, t = 101) {
    let w0 = sin(0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0));
    let w1 = sin(0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5));
    return w0 + w1;
}

function pt(x, y) {
    return { x, y };
}

function spawn() {
    const pts = many(333, () => ({ x: rnd(innerWidth), y: rnd(innerHeight), len: 0, r: 0 }));
    const pts2 = many(9, (i) => ({ x: cos((i / 9) * PI * 2), y: sin((i / 9) * PI * 2) }));
    let seed = rnd(100);
    let tx = rnd(innerWidth);
    let ty = rnd(innerHeight);
    let x = rnd(innerWidth);
    let y = rnd(innerHeight);
    let kx = rnd(0.5, 0.5);
    let ky = rnd(0.5, 0.5);
    let walkRadius = pt(rnd(50, 50), rnd(50, 50));
    let r = innerWidth / rnd(100, 150);

    function paintPt(pt) {
        pts2.forEach((pt2) => {
            if (!pt.len) return;
            drawLine(lerp(x + pt2.x * r, pt.x, pt.len * pt.len), lerp(y + pt2.y * r, pt.y, pt.len * pt.len), x + pt2.x * r, y + pt2.y * r);
        });
        drawCircle(pt.x, pt.y, pt.r);
    }

    return {
        follow(x, y) {
            tx = x;
            ty = y;
        },
        tick(t) {
            const selfMoveX = cos(t * kx + seed) * walkRadius.x;
            const selfMoveY = sin(t * ky + seed) * walkRadius.y;
            let fx = tx + selfMoveX;
            let fy = ty + selfMoveY;
            x += min(innerWidth / 100, (fx - x) / 10);
            y += min(innerWidth / 100, (fy - y) / 10);
            let i = 0;
            pts.forEach((pt) => {
                const dx = pt.x - x,
                    dy = pt.y - y;
                const len = hypot(dx, dy);
                let r = min(2, innerWidth / len / 5);
                pt.t = 0;
                const increasing = len < innerWidth / 10 && (i++) < 8;
                let dir = increasing ? 0.1 : -0.1;
                if (increasing) {
                    r *= 1.5;
                }
                pt.r = r;
                pt.len = max(0, min(pt.len + dir, 1));
                paintPt(pt);
            });
        },
    };
}

const spiders = many(2, spawn);

addEventListener("pointermove", (e) => {
    spiders.forEach((spider) => spider.follow(e.clientX, e.clientY));
});

requestAnimationFrame(function anim(t) {
    if (w !== innerWidth) w = canvas.width = innerWidth;
    if (h !== innerHeight) h = canvas.height = innerHeight;
    ctx.fillStyle = "#000";
    drawCircle(0, 0, w * 10);
    ctx.fillStyle = ctx.strokeStyle = "#fff";
    t /= 1000;
    spiders.forEach((spider) => spider.tick(t));
    requestAnimationFrame(anim);
});


// Card flip animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('flipped'));
    card.addEventListener('mouseleave', () => card.classList.remove('flipped'));
});

//Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//Event Listener for "Fun" button
document.getElementById('fun-button').addEventListener('click', scrollToTop);


//Event Listener for top navlink
document.querySelector('nav ul li a[href="#"]').addEventListener('click', (event) => {
    event.preventDefault();
    scrollToTop();
});

// Contact form submission with animation and improved error handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Success!  Show message and animate
        formMessage.textContent = data.success ? 'Message sent successfully!' : 'Message failed to send.';
        formMessage.style.display = 'block';

        // Animation on success
        contactForm.style.transform = 'scale(0.9)';
        setTimeout(() => {
            contactForm.style.transform = 'scale(1)';
        }, 300);

        if (data.success) {
            contactForm.reset();
            setTimeout(() => formMessage.style.display = 'none', 5000); // Hide message after 5 seconds
        } else {
            setTimeout(() => formMessage.style.display = 'none', 10000); // Hide error message after 10 seconds
        }

    })
    .catch(error => {
        console.error('Error submitting form:', error);
        formMessage.textContent = `An error occurred. Please try again later: ${error.message}`;
        formMessage.style.display = 'block';
        setTimeout(() => formMessage.style.display = 'none', 10000); // Hide error message after 10 seconds
    });
});
