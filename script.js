// CONFIGURACIÓN: escribe tu número completo con código de país, solo dígitos.
// Ejemplo venezolano ficticio: '584121234567' (reemplázalo por tu número real).
const WHATSAPP_NUMBER = '';

document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('quote-form');
const note = document.getElementById('form-note');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const type = String(data.get('event') || '').trim();
  const date = String(data.get('date') || '').trim();
  const service = String(data.get('service') || '').trim();
  if (!name || !type || !service) return;
  const message = `Hola, IMPACTO EVENTOS. Quisiera cotizar un evento.\n\nNombre: ${name}\nTipo de evento: ${type}\nFecha estimada: ${date || 'Por definir'}\nServicio: ${service}`;
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '');
  if (!digits) {
    note.textContent = 'Falta configurar el número de WhatsApp en script.js (WHATSAPP_NUMBER). Copia este mensaje para enviarlo manualmente: ' + message;
    return;
  }
  window.open(`https://wa.me/${digits}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  note.textContent = 'Se preparó tu mensaje en WhatsApp. Confirma el envío en la aplicación.';
});
