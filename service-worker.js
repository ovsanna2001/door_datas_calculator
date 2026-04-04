const CACHE = 'calc-v1';
const FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/192x192.png',
  './icons/512x512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});