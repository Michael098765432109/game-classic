# Arcade Prisma

App web lista para desplegar. Funciona sin internet tras la primera carga.

## Contenido
- `index.html`: la app
- `manifest.json` y `sw.js`: instalación y modo sin conexión
- `icons/`: logo e iconos (`logo.png` es el original)
- `favicon.ico`, `vercel.json`

## Desplegar en Vercel
1. Sube esta carpeta a un repositorio de GitHub (o usa `vercel --prod` dentro de ella).
2. En Vercel: Add New → Project → importa el repo. Framework: **Other**, sin comando de build.
3. Abre la URL (HTTPS) y prueba en modo avión.

## Convertir a APK
1. Entra a pwabuilder.com y pega la URL de Vercel.
2. Corrige lo que marque y descarga el paquete Android (APK/AAB).

## Personalizar
Busca los marcadores entre corchetes, como [Tu Nombre], y reemplázalos. Si cambias archivos, sube la versión de `CACHE` en `sw.js`.
