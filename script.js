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

    // Contact Form Submission Handling - UPDATED FOR FORMSPREE
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        // When using Formspree via the HTML 'action' attribute,
        // you typically don't need to prevent default or handle submission here in JS.
        // Formspree handles the entire process directly.
        // We can remove or comment out the event listener if Formspree is used this way.

        // If you still wanted to do something *after* Formspree processes,
        // you'd listen for Formspree's 'submit' event or a success redirect.
        // For simplicity with direct action, this listener can be removed.
        // However, keeping it commented out for clarity.

        /*
        contactForm.addEventListener('submit', (e) => {
            // e.preventDefault(); // Commented out to allow Formspree's default submission

            // These console.logs and alerts are no longer needed
            // as Formspree will handle sending the data and
            // typically redirects or shows its own success message.

            // const name = contactForm.querySelector('#name').value;
            // const email = contactForm.querySelector('#email').value;
            // const company = contactForm.querySelector('#company').value;
            // const phone = contactForm.querySelector('#phone_contact').value;
            // const message = contactForm.querySelector('#message').value;

            // console.log('Consultation Request Submitted (via Formspree):');
            // console.log(`Name: ${name}`);
            // console.log(`Email: ${email}`);
            // console.log(`Company: ${company}`);
            // console.log(`Phone (Optional): ${phone}`);
            // console.log(`Needs: ${message}`);

            // alert('Thank you for your consultation request! We will contact you shortly to schedule your personalized AI strategy session.');
            // contactForm.reset(); // Formspree usually handles reset or redirect
        });
        */
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
