// =====================

// MENU MOBILE

// =====================

const menuToggle = document.getElementById("menu-toggle");

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

if (menuToggle) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}

// =====================

// SCROLL SUAVE

// =====================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({

      behavior: "smooth"

    });

  });

});

// =====================

// ANIMAÇÃO AO ROLAR

// =====================

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {

  threshold: 0.2

});

document.querySelectorAll(".card, .hero-content, .sobre, .numeros-grid, .contato").forEach(el => {

  el.style.opacity = "0";

  el.style.transform = "translateY(30px)";

  el.style.transition = "0.6s ease";

  observer.observe(el);

});

// =====================

// ATIVAR CLASSE SHOW

// =====================

const style = document.createElement("style");

style.innerHTML = `

.show {

  opacity: 1 !important;

  transform: translateY(0) !important;

}

`;

document.head.appendChild(style);

// =====================

// SOMBRA NA NAVBAR

// =====================

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if (window.scrollY > 50) {

    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

  } else {

    header.style.boxShadow = "none";

  }

});

// =====================

// BOTÃO WHATSAPP FLUTUANTE

// =====================

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/559199999";

whatsapp.target = "_blank";

whatsapp.innerHTML = "💬";

whatsapp.className = "whatsapp-float";

document.body.appendChild(whatsapp);

// =====================

// ESTILO BOTÃO

// =====================

const styleBtn = document.createElement("style");

styleBtn.innerHTML = `

.whatsapp-float {

  position: fixed;

  bottom: 20px;

  right: 20px;

  background: #25D366;

  width: 60px;

  height: 60px;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  color: white;

  font-size: 28px;

  text-decoration: none;

  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  transition: 0.3s;

}

.whatsapp-float:hover {

  transform: scale(1.1);

}

`;

document.head.appendChild(styleBtn);