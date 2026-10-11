# IMPACTO EVENTOS — Sitio web

Página web de una sola pantalla (one-page), lista para publicar en GitHub Pages.

## Antes de publicar

1. Abre `script.js` y reemplaza `const WHATSAPP_NUMBER = '';` por tu número real, en formato internacional (solo números, sin +, espacios ni guiones). Ejemplo ficticio: `const WHATSAPP_NUMBER = '584121234567';`.
2. En `index.html`, sustituye el enlace `https://www.instagram.com/` por la dirección real de Instagram de IMPACTO EVENTOS.
3. Revisa la descripción de servicios. No se han inventado precios, testimonios ni fotos de eventos.
4. Más adelante podrás sustituir los elementos gráficos por tus fotos y videos reales.

## Revisar en tu equipo

Abre `index.html` en Chrome o Edge. Para una revisión más fiel, inicia un servidor local: desde esta carpeta usa `python -m http.server 8000`, y abre `http://localhost:8000`.

## Publicar en GitHub Pages

1. En GitHub, elige **New repository** y crea un repositorio **público** llamado `impacto-eventos`.
2. Haz clic en **Add file → Upload files** y arrastra `index.html`, `styles.css` y `script.js` directamente a la raíz del repositorio (no dentro de una carpeta).
3. Haz clic en **Commit changes**.
4. Ve a **Settings → Pages → Build and deployment**.
5. En **Source**, elige **Deploy from a branch**; selecciona **main** y **/(root)**; pulsa **Save**.
6. Espera unos minutos y abre `https://TU-USUARIO.github.io/impacto-eventos/`.

Para modificar el sitio después, edita los archivos desde GitHub y guarda con **Commit changes**.
