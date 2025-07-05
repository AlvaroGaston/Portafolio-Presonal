// Proyectos destacados mejorados, algunos con enlaces relevantes
const proyectos = [
  {
    title: "App de Venta de Sneakers",
    description: "Plataforma web desarrollada para gestionar productos, clientes y compras, conectando una interfaz moderna con una base de datos en SQL Server. Permite visualizar el stock, registrar ventas y administrar usuarios de manera eficiente.",
    link: "https://github.com/AlvaroGaston/UrbanStyle-SQL.git"
  },
  {
    title: "Inventario SQL y C#",
    description: "Aplicación de escritorio que permite registrar, consultar y administrar el inventario de productos mediante una interfaz construida en C# y consultas optimizadas sobre SQL Server para un manejo eficiente de datos.",
    link: "https://github.com/AlvaroGaston/Gestion-de-productos.git"
  }
];

const container = document.getElementById("projects-list");

proyectos.forEach(proyecto => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <h3 class="project-title">${proyecto.title}</h3>
    <p class="project-desc">${proyecto.description}</p>
    <div class="project-links">
      <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
    </div>
  `;

  container.appendChild(card);
});


function renderProjects() {
  const list = document.getElementById('projects-list');
  if (!list) return;
  projects.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    // animación de fade stagger
    card.style.animationDelay = (0.06 * i) + "s";
    card.innerHTML = `
      <h4>${proj.title}</h4>
      <p>${proj.description}</p>
      ${proj.link && proj.link !== "#" ? `<a href="${proj.link}" target="_blank">Ver proyecto</a>` : ''}
    `;
    list.appendChild(card);
  });
}
renderProjects();

// Movimiento animado para barras de habilidad
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.getAttribute('style').match(/width:\s*([\d.]+)%/)[1] + '%';
      bar.style.transition = 'width 0.7s cubic-bezier(.7,.2,.33,1.4)';
    });
  }, 400);
});