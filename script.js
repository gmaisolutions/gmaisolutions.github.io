document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            // Reset animation for next open
            navLinks.forEach((item) => {
                item.style.animation = '';
            });
        });
    });

    // Contact Form Submission Handling for Formspree
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default browser submission

            const formData = new FormData(contactForm); // Get form data
            const formspreeEndpoint = "https://formspree.io/f/mgvypqgw"; // Your specific Formspree ID

            try {
                const response = await fetch(formspreeEndpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json' // Crucial for Formspree's JSON response
                    }
                });

                if (response.ok) { // Check if the request was successful
                    alert('Thank you for your consultation request! We will contact you shortly to schedule your personalized AI strategy session.');
                    contactForm.reset(); // Clear the form fields
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        alert(`Error submitting form: ${data.errors.map(error => error.message).join(', ')}`);
                    } else {
                        alert('There was an error sending your message. Please try again or contact us directly.');
                    }
                }
            } catch (error) {
                console.error('Network or fetch error:', error);
                alert('There was a technical issue connecting to the server. Please try again later.');
            }
        });
    }
});

/* Keyframe for nav links fade in */
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
`;
document.head.appendChild(styleSheet);
