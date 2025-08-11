// Gestion du thème sombre/clair
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-theme');
    
    // Changer l'icône
    if (body.classList.contains('dark-theme')) {
        themeIcon.className = 'fas fa-sun';
        // En production, décommentez cette ligne :
        // localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'fas fa-moon';
        // En production, décommentez cette ligne :
        // localStorage.setItem('theme', 'light');
    }
    
    // Animation fluide
    body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        body.style.transition = '';
    }, 300);
}

// Charger le thème sauvegardé
function loadTheme() {
    // Note: localStorage n'est pas disponible dans l'environnement Claude.ai
    // En production, décommentez les lignes suivantes:
    // const savedTheme = localStorage.getItem('theme');
    // if (savedTheme === 'dark') {
    //     document.body.classList.add('dark-theme');
    //     document.getElementById('theme-icon').className = 'fas fa-sun';
    // }
}

// Menu hamburger
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.nav-overlay');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Empêcher le scroll du body quand le menu est ouvert
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.nav-overlay');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fermer le menu avec la touche Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll avec Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.style.animationFillMode = 'both';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observer toutes les sections et cartes
document.querySelectorAll('.section, .skill-card, .project-card, .education-item').forEach(element => {
    observer.observe(element);
});

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animation du bouton
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;
            
            // Simulation d'envoi
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                submitBtn.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)';
                    this.reset();
                }, 2000);
                
                // Notification de succès
                showNotification('Merci pour votre message ! Je vous répondrai bientôt.');
            }, 1500);
        });
    }
});

// Fonction pour afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #2ecc71, #27ae60);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animation de sortie
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Effet parallax subtil sur le header
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll vers le bas
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll vers le haut
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
    
    // Effet parallax sur le hero
    const hero = document.querySelector('.hero');
    if (hero && scrollTop < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrollTop * 0.3}px)`;
    }
});

// Animation des cartes de compétences au survol
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
        });
    });
});

// Animation des éléments au chargement de la page
window.addEventListener('load', () => {
    loadTheme(); // Charger le thème sauvegardé
    document.body.style.opacity = '1';
    
    // Animation séquentielle des éléments du hero
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .cta-button');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
        element.style.animation = 'fadeInUp 0.8s ease-out both';
    });
});

// Initialisation du style du body
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// Gestion du focus pour l'accessibilité
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Animation de typing pour le titre principal (optionnel)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Activer l'effet typing sur le titre principal après le chargement
setTimeout(() => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
}, 1000);

// Gestion des erreurs globales
window.addEventListener('error', function(e) {
    console.error('Erreur détectée:', e.error);
});

// Performance: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Appliquer le throttling aux événements scroll
const throttledScrollHandler = throttle(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
    
    const hero = document.querySelector('.hero');
    if (hero && scrollTop < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrollTop * 0.3}px)`;
    }
}, 16); // 60fps

window.addEventListener('scroll', throttledScrollHandler);