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

    /* Skill Bars */
    const bars = document.querySelectorAll(".progress");
    const widths = ["90%", "85%", "80%", "95%", "90%"];
    bars.forEach((bar, i) => {
        bar.setAttribute("data-percent", widths[i]);
        setTimeout(() => { bar.firstElementChild.style.width = widths[i]; }, i * 200);
    });

    /* Mobile Menu Toggle */
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navLinks');
    menuBtn.addEventListener('click', () => { navLinks.classList.toggle('active'); });
    document.querySelectorAll('#navLinks a').forEach(link => { link.addEventListener('click', () => { navLinks.classList.remove('active'); }); });
});
