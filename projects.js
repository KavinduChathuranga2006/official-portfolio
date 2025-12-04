const projects = [
  { title: "Portfolio Website", image: "assets/images/Screenshot 2025-12-04 100800.png", desc: "A modern and responsive portfolio website built with HTML, CSS, and JavaScript.", link: "https://kavinduchathuranga2006.github.io/my-portfolio/" },
  { title: "QR Code Generator", image: "assets/images/Screenshot 2025-12-04 135905.png", desc: "A simple and efficient QR code generator built using HTML, CSS, and JavaScript.", link: "https://kavinduchathuranga2006.github.io/qr-code-generator/" },
  { title: "Expense Tracker", image: "assets/images/Screenshot 2025-12-04 140410.png", desc: "A lightweight expense tracking app built with HTML, CSS, and JavaScript.", link: "https://kavinduchathuranga2006.github.io/expense-tracker/" },
  { title: "3D Robot Eye Tracker", image: "assets/images/Screenshot 2025-12-04 141545.png", desc: "A 3D robot eye that moves and follows your mouse cursor. Built with basic HTML, CSS, and JavaScript.", link: "https://kavinduchathuranga2006.github.io/3d-robot-eye-tracker/" },
  { title: "Digital Clock", image: "assets/images/Screenshot 2025-12-04 142222.png", desc: "A simple digital clock that displays the current time. Built with HTML, CSS, and JavaScript.", link: "https://kavinduchathuranga2006.github.io/digital-clock/" }
];

const grid = document.getElementById("projectGrid");
projects.forEach(p => {
  grid.innerHTML += `
    <div class="project-card">
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a class="btn" href="${p.link}" target="_blank">View Project</a>
    </div>`;
});
