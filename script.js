// Gestion du thème sombre/clair
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-theme');
    
    // Changer l'icône
    if (body.classList.contains('dark-theme')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Gestion du menu hamburger
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.nav-overlay');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Empêcher le défilement quand le menu est ouvert
    document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.nav-overlay');
    
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Fermer le menu en cliquant à l'extérieur
function handleOutsideClick(e) {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navMenu.classList.contains('active') && 
        !e.target.closest('.nav-menu') && 
        !e.target.closest('.hamburger')) {
        closeMenu();
    }
}

// Animations au défilement
function initAnimations() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('animate');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    document.querySelectorAll('.skill-card, .project-card, .contact-info').forEach(element => {
        observer.observe(element);
    });
    
    // Observer les éléments de la timeline
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, 100 * Array.from(entry.target.parentNode.children).indexOf(entry.target));
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item').forEach(element => {
        timelineObserver.observe(element);
    });
}

// Créer des particules animées pour l'arrière-plan
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Taille aléatoire
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Position aléatoire
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
}

// Barre de progression du défilement
function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progress-bar').style.width = `${scrolled}%`;
    });
}

// Smooth scrolling pour les liens d'ancrage
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Fermer le menu si ouvert
                closeMenu();
                
                // Scroll vers l'élément
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialisation de l'application
function initApp() {
    // Vérifier le thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
    }
    
    // Ajouter les écouteurs d'événements
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('hamburger').addEventListener('click', toggleMenu);
    document.getElementById('nav-overlay').addEventListener('click', closeMenu);
    document.addEventListener('click', handleOutsideClick);
    
    // Initialiser les animations et fonctionnalités
    initAnimations();
    createParticles();
    initScrollProgress();
    initSmoothScrolling();
    
    // Fermer le menu en cliquant sur les liens
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Démarrer l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initApp);
