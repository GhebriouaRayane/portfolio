/* ============================================
   NETWORK CANVAS ANIMATION
   ============================================ */

class NetworkCanvas {
    constructor() {
        this.canvas = document.getElementById('network-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.mouse = { x: -9999, y: -9999 };
        this.raf = null;
        this.resize();
        this.createNodes();
        this.animate();
        window.addEventListener('resize', () => this.onResize());
        this.canvas.addEventListener('mousemove', (e) => {
            const r = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - r.left;
            this.mouse.y = e.clientY - r.top;
        });
        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = -9999;
            this.mouse.y = -9999;
        });
    }

    resize() {
        this.canvas.width  = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    onResize() {
        this.resize();
        this.nodes = [];
        this.createNodes();
    }

    createNodes() {
        const area  = this.canvas.width * this.canvas.height;
        const count = Math.max(20, Math.min(Math.floor(area / 14000), 55));
        for (let i = 0; i < count; i++) {
            this.nodes.push({
                x:          Math.random() * this.canvas.width,
                y:          Math.random() * this.canvas.height,
                vx:         (Math.random() - 0.5) * 0.35,
                vy:         (Math.random() - 0.5) * 0.35,
                radius:     Math.random() * 1.4 + 0.7,
                phase:      Math.random() * Math.PI * 2,
                phaseSpeed: 0.012 + Math.random() * 0.018,
            });
        }
    }

    getPrimaryRgb() {
        return document.documentElement.dataset.theme === 'light'
            ? '0, 98, 204'
            : '0, 229, 255';
    }

    draw() {
        const { width, height } = this.canvas;
        const rgb = this.getPrimaryRgb();
        const maxDist  = 145;
        const mouseDist = 110;

        this.ctx.clearRect(0, 0, width, height);

        // Connections between nodes
        for (let i = 0; i < this.nodes.length; i++) {
            const a = this.nodes[i];
            for (let j = i + 1; j < this.nodes.length; j++) {
                const b   = this.nodes[j];
                const dx  = a.x - b.x;
                const dy  = a.y - b.y;
                const d   = Math.sqrt(dx * dx + dy * dy);
                if (d < maxDist) {
                    const alpha = (1 - d / maxDist) * 0.22;
                    this.ctx.beginPath();
                    this.ctx.moveTo(a.x, a.y);
                    this.ctx.lineTo(b.x, b.y);
                    this.ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
                    this.ctx.lineWidth   = 0.75;
                    this.ctx.stroke();
                }
            }
            // Mouse pull lines
            const mdx = a.x - this.mouse.x;
            const mdy = a.y - this.mouse.y;
            const md  = Math.sqrt(mdx * mdx + mdy * mdy);
            if (md < mouseDist) {
                const alpha = (1 - md / mouseDist) * 0.45;
                this.ctx.beginPath();
                this.ctx.moveTo(a.x, a.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
                this.ctx.lineWidth   = 1;
                this.ctx.stroke();
            }
        }

        // Nodes
        this.nodes.forEach(node => {
            const glow = (Math.sin(node.phase) * 0.5 + 0.5);

            // Outer halo
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius * 4.5, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${rgb}, ${glow * 0.06})`;
            this.ctx.fill();

            // Core
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${rgb}, ${0.45 + glow * 0.4})`;
            this.ctx.fill();
        });
    }

    update() {
        this.nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            node.phase += node.phaseSpeed;
            if (node.x < 0 || node.x > this.canvas.width)  node.vx *= -1;
            if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
        });
    }

    animate() {
        this.update();
        this.draw();
        this.raf = requestAnimationFrame(() => this.animate());
    }
}

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */

class TypeWriter {
    constructor(el, lines, speed = 65, pause = 2000) {
        this.el      = el;
        this.lines   = lines;
        this.speed   = speed;
        this.pause   = pause;
        this.lineIdx = 0;
        this.charIdx = 0;
        this.deleting = false;
        this.tick();
    }

    tick() {
        const current = this.lines[this.lineIdx];
        if (this.deleting) {
            this.el.textContent = current.slice(0, --this.charIdx);
        } else {
            this.el.textContent = current.slice(0, ++this.charIdx);
        }
        let delay = this.deleting ? this.speed * 0.5 : this.speed;
        if (!this.deleting && this.charIdx === current.length) {
            delay = this.pause;
            this.deleting = true;
        } else if (this.deleting && this.charIdx === 0) {
            this.deleting = false;
            this.lineIdx  = (this.lineIdx + 1) % this.lines.length;
            delay = 350;
        }
        setTimeout(() => this.tick(), delay);
    }
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initScrollAnimations() {
    const opts = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };

    // Generic cards
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animate'); });
    }, opts);
    document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(el => cardObserver.observe(el));

    // Timeline with stagger
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const all = e.target.parentNode.querySelectorAll('.timeline-item');
                const idx = Array.from(all).indexOf(e.target);
                setTimeout(() => e.target.classList.add('animate'), idx * 110);
            }
        });
    }, opts);
    document.querySelectorAll('.timeline-item').forEach(el => timelineObserver.observe(el));
}

/* ============================================
   SCROLL PROGRESS + HEADER + BACK TO TOP
   ============================================ */

function initScrollEffects() {
    const header    = document.getElementById('header');
    const bar       = document.getElementById('progress-bar');
    const topBtn    = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const total   = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = `${(scrollY / total) * 100}%`;

        header.classList.toggle('scrolled', scrollY > 60);
        topBtn.classList.toggle('visible', scrollY > 400);
    }, { passive: true });

    topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================
   ACTIVE NAV ON SCROLL
   ============================================ */

function initActiveNav() {
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('.desktop-nav a, .nav-menu a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                navLinks.forEach(link => {
                    const match = link.getAttribute('href') === `#${e.target.id}`;
                    link.classList.toggle('active', match);
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));
}

/* ============================================
   THEME TOGGLE
   ============================================ */

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const icon   = document.getElementById('theme-icon');
    const html   = document.documentElement;

    const saved  = localStorage.getItem('gr-theme') || 'dark';
    html.dataset.theme = saved;
    icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    toggle.addEventListener('click', () => {
        const isDark = html.dataset.theme === 'dark';
        html.dataset.theme = isDark ? 'light' : 'dark';
        icon.className     = isDark ? 'fas fa-moon' : 'fas fa-sun';
        localStorage.setItem('gr-theme', html.dataset.theme);
    });
}

/* ============================================
   MOBILE MENU
   ============================================ */

function initMobileMenu() {
    const btn     = document.getElementById('hamburger');
    const menu    = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-overlay');

    function open()  {
        btn.classList.add('active');
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-expanded', 'true');
    }
    function close() {
        btn.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', () => btn.classList.contains('active') ? close() : open());
    overlay.addEventListener('click', close);
    document.querySelectorAll('.nav-menu a').forEach(a => a.addEventListener('click', close));
}

/* ============================================
   SMOOTH SCROLL (offset for fixed header)
   ============================================ */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href   = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
            }
        });
    });
}

/* ============================================
   INIT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initScrollEffects();
    initScrollAnimations();
    initActiveNav();
    initSmoothScroll();

    // Hero entrance
    requestAnimationFrame(() => {
        setTimeout(() => {
            document.querySelector('.hero-content')?.classList.add('visible');
        }, 80);
    });

    // Typing effect
    const typedEl = document.getElementById('typed-text');
    if (typedEl) {
        new TypeWriter(typedEl, [
            'Administration Réseaux',
            'Sécurité Informatique',
            'Télécommunications',
            'Virtualisation VMware',
            'Fibre Optique FTTH',
        ]);
    }

    // Network background
    new NetworkCanvas();
});
