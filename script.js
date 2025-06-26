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

    // Contact Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const company = contactForm.querySelector('#company').value;
            const phone = contactForm.querySelector('#phone_contact').value; // Corrected ID
            const message = contactForm.querySelector('#message').value;

            // In a real-world scenario, you would send this data to a backend server.
            // Example of how you might send it using Fetch API (requires a server-side endpoint)
            /*
            fetch('/send-email.php', { // Replace with your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    company,
                    phone,
                    message,
                    subject: 'New Consultation Request - G&M Solutions Website'
                }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Thank you for your consultation request! We will contact you shortly.');
                    contactForm.reset(); // Clear the form
                } else {
                    alert('There was an error sending your message. Please try again or contact us directly.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was a technical issue. Please try again later.');
            });
            */

            // For local testing without a backend, log to console and show alert:
            console.log('Consultation Request Submitted:');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Company: ${company}`);
            console.log(`Phone (Optional): ${phone}`);
            console.log(`Needs: ${message}`);
            console.log(`--- Please configure a backend to send this email ---`);

            alert('Thank you for your consultation request! We will contact you shortly to schedule your personalized AI strategy session.');
            contactForm.reset(); // Clear the form
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