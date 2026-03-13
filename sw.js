const CACHE_NAME = 'perfil-v1';
const ASSETS = [
  '/meu-perfil/',
  '/meu-perfil/index.html',
  '/meu-perfil/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
