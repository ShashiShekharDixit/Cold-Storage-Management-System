// Custom Cursor
const cursor = document.querySelector('.cursor');
        
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add grow effect on hover for text elements
document.querySelectorAll('a, h1, h2, h3, p, button, .service-card, .market-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .market-card, .about-content > div').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});