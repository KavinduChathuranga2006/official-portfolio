window.addEventListener("DOMContentLoaded", () => {
    /* Typing Animation */
    const roles = ["Web Developer", "Social Media Marketer", "Freelancer"];
    let roleIndex = 0, charIndex = 0;
    const typed = document.getElementById("typed");
    function typeText() {
        const current = roles[roleIndex];
        if (charIndex < current.length) {
            typed.textContent += current.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(() => {
                typed.textContent = "";
                charIndex = 0;
                roleIndex = (roleIndex + 1) % roles.length;
                typeText();
            }, 1500);
        }
    }
    if (typed) typeText();

    /* Smooth Scroll */
    const btnProjects = document.querySelector('.btn-projects');
    const btnContact = document.querySelector('.btn-contact');
    if (btnProjects) btnProjects.addEventListener('click', e => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); });
    if (btnContact) btnContact.addEventListener('click', e => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); });

    /* Skill Bars (will animate when #skills enters viewport) */
    const skillsSection = document.getElementById('skills');
    const bars = document.querySelectorAll(".progress");
    // If progress elements don't have data-percent set, use defaults
    const defaultWidths = ["90%", "85%", "80%", "95%", "90%"];
    bars.forEach((bar, i) => {
        if (!bar.hasAttribute('data-percent')) {
            bar.setAttribute('data-percent', defaultWidths[i] || '0%');
        }
        // ensure inner width starts at 0
        const inner = bar.querySelector('div');
        if (inner) inner.style.width = '0%';
    });

    if (skillsSection && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bars.forEach((bar, i) => {
                        const pct = bar.getAttribute('data-percent') || (defaultWidths[i] || '0%');
                        const inner = bar.querySelector('div');
                        if (inner) {
                            // slight stagger for nicer effect
                            setTimeout(() => { inner.style.width = pct; }, i * 150);
                        }
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.35 });
        io.observe(skillsSection);
    } else {
        // fallback: animate immediately
        bars.forEach((bar, i) => {
            const pct = bar.getAttribute('data-percent') || (defaultWidths[i] || '0%');
            const inner = bar.querySelector('div');
            if (inner) inner.style.width = pct;
        });
    }

    /* Mobile Menu Toggle (robust) */
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navLinks');

    function closeNav() {
        if (navLinks) navLinks.classList.remove('active');
    }
    function toggleNav() {
        if (navLinks) navLinks.classList.toggle('active');
    }

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleNav();
        });

        // Close when any nav link clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeNav);
        });

        // Close button inside mobile overlay
        const menuClose = navLinks.querySelector('.menu-close');
        if (menuClose) {
            menuClose.addEventListener('click', (e) => {
                e.stopPropagation();
                closeNav();
            });
        }

        // Close when clicking outside navLinks (only when open)
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active')) {
                const target = e.target;
                if (!navLinks.contains(target) && !menuBtn.contains(target)) {
                    closeNav();
                }
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeNav();
        });

        // Optional: ensure nav closes on resize to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 600) closeNav();
        });
    }
});
