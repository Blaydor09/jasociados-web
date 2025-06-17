// Menú responsive y manejo de formulario

document.addEventListener('DOMContentLoaded', () => {
  // Toggle de menú
  const toggle = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('.header__nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Envío de formulario con feedback
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Enviando...';
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, { method: form.method, body: data });
      if (res.ok) {
        status.textContent = 'Mensaje enviado correctamente.';
        form.reset();
      } else {
        status.textContent = 'Error al enviar. Intenta de nuevo.';
      }
    } catch {
      status.textContent = 'Error de red. Verifica tu conexión.';
    }
  });
});
