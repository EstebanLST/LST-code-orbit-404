document.addEventListener("DOMContentLoaded", () => {
  const techButtons = document.querySelectorAll(".tech");
  const infoBox = document.getElementById("tech-info");
  const btnRandom = document.getElementById("btn-random");
  const panel = document.querySelector(".panel");

  // Snippets por lenguaje
  const techData = {
    html: {
      title: "Estructura básica para una 404",
      lang: "HTML",
      code: `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>404 · Página no encontrada</title>
  </head>
  <body>
    <main>
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
    </main>
  </body>
</html>`
    },
    css: {
      title: "Fondo degradado oscuro tipo universo",
      lang: "CSS",
      code: `body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 20% 0%, #1d4ed8 0, transparent 55%),
    radial-gradient(circle at 90% 80%, #7c3aed 0, transparent 55%),
    radial-gradient(circle at 50% 60%, #020617 0, #02040f 70%);
  color: #e5e7eb;
  font-family: system-ui, sans-serif;
}`
    },
    js: {
      title: "Redirección suave después de 5 segundos",
      lang: "JavaScript",
      code: `setTimeout(() => {
  window.location.href = "/";
}, 5000); // Redirige al inicio después de 5s`
    },
    php: {
      title: "Servir una 404 personalizada en PHP",
      lang: "PHP",
      code: `<?php
http_response_code(404);
include __DIR__ . '/404.html';
exit;`
    },
    python: {
      title: "Manejar 404 en Flask",
      lang: "Python",
      code: `from flask import Flask, render_template

app = Flask(__name__)

@app.errorhandler(404)
def not_found(error):
    return render_template("404.html"), 404`
    },
    git: {
      title: "Rama de hotfix para corregir la 404",
      lang: "Git",
      code: `git checkout main
git pull origin main

git checkout -b hotfix/custom-404
# ...corregir archivos...
git commit -am "Add custom 404 page"
git push origin hotfix/custom-404`
    },
    ruby: {
      title: "Controlador 404 en Rails",
      lang: "Ruby",
      code: `class ErrorsController < ApplicationController
  def not_found
    render "errors/404", status: :not_found
  end
end`
    },
    java: {
      title: "Respuesta 404 con Spring Boot",
      lang: "Java",
      code: `@Controller
public class ErrorController {

  @RequestMapping("/404")
  public String notFound() {
    return "error/404";
  }
}`
    }
  };

  // Animación de flotación para planetas
  techButtons.forEach((btn, index) => {
    const offset = 10 + index * 2;
    gsap.to(btn, {
      y: `+=${offset}`,
      duration: 4 + index * 0.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  // Parallax suave del panel
  document.addEventListener("pointermove", (event) => {
    const { innerWidth, innerHeight } = window;
    const relX = (event.clientX / innerWidth) - 0.5;
    const relY = (event.clientY / innerHeight) - 0.5;

    gsap.to(panel, {
      x: relX * 18,
      y: relY * 12,
      duration: 0.5,
      ease: "sine.out"
    });
  });

  // Click en planetas: mostrar snippet
  techButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.tech;
      const data = techData[key];
      if (!data) return;

      techButtons.forEach((b) => b.classList.remove("tech--active"));
      btn.classList.add("tech--active");

      infoBox.innerHTML = `
        <div class="panel__info-lang">${data.lang}</div>
        <div class="panel__info-title">${data.title}</div>
        <pre class="panel__info-code"><code>${escapeHtml(
          data.code
        )}</code></pre>
      `;
    });
  });

  // Botón "Sorpréndeme"
  if (btnRandom) {
    btnRandom.addEventListener("click", () => {
      const list = Array.from(techButtons);
      const random = list[Math.floor(Math.random() * list.length)];
      random.click();
    });
  }

  // Escapar texto para mostrar en <code>
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
});
