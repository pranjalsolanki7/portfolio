// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const sections = document.querySelectorAll('section, header');
    sections.forEach(section => section.classList.toggle('dark-mode'));
});

// Skill Progress Animation
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    setTimeout(() => {
        bar.style.width = `${progress}%`;
    }, 500); // Delayed animation for smoother effect
});

// Contact Form Submission
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    setTimeout(() => {
        status.textContent = `Thank you, ${name}! Your message has been sent.`;
        status.style.color = 'green';
        form.reset();  // Clears the form fields after submission
    }, 1000);
});


// Portfolio Modal
const modal = document.getElementById('portfolio-modal');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.portfolio-image').forEach(image => {
    image.addEventListener('click', () => {
        modal.classList.remove('hidden'); // Show modal
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden'); // Hide modal
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');
window.onscroll = () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block'; // Show button
    } else {
        backToTopButton.style.display = 'none'; // Hide button
    }
};

backToTopButton.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
};


