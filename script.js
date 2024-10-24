const menuIcon =  document.querySelector('#menu-icon')
const navLink =  document.querySelector('.nav-link')


menuIcon.onclick = () =>{
    navLink.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"; // Set opacity to 1
                observer.unobserve(entry.target); // Stop observing once it is in view
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target section

            // Smooth scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menu toggle for mobile
    const menuIcon = document.getElementById('menu-icon');
    const navLinksContainer = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
    });
});
