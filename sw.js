// Service worker offline-first. Sube la versión de CACHE al cambiar archivos.
const CACHE = 'arcade-prisma-v1';
const ARCHIVOS = [
  "./",
  "./favicon.ico",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/logo.png",
  "./index.html",
  "./manifest.json"
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    const copia = resp.clone(); caches.open(CACHE).then(c => c.put(e.request, copia)); return resp;
  }).catch(() => caches.match('./index.html'))));
});
