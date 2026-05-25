const CACHE_NAME = 'site-cache-v1';

// Այստեղ ներառված են ձեր բոլոր 5 ֆայլերը և manifest-ը
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/door-calc.html',
  '/distance-calc.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/icons/icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
