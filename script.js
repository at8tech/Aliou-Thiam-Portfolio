// Animation au défilement (Scroll Reveal)
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    }));
};

// Effet de parallaxe léger sur le header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-content');
    let scrollValue = window.scrollY;
    header.style.transform = `translateY(${scrollValue * 0.4}px)`;
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Force la première vérification au chargement
    setTimeout(() => {
        document.querySelector('.reveal').classList.add('active');
    }, 200);
    
    revealElements();
});
// Sélectionne tous les liens sociaux
const socialLinks = document.querySelectorAll('.social-card');

socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Effet de clic visuel
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "translateY(-5px) scale(1)";
        }, 100);
    });
});

// Scroll Reveal pour les réseaux (si pas déjà fait)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));