var CACHE = 'pd-v2';
var ASSETS = [
  './',
  './index.html',
  './fonts/caveat-latin.woff2',
  './fonts/caveat-latin-ext.woff2',
  './fonts/cg-normal-latin.woff2',
  './fonts/cg-normal-latin-ext.woff2',
  './fonts/cg-italic-latin.woff2',
  './fonts/cg-italic-latin-ext.woff2',
  './fonts/great-vibes-latin.woff2',
  './fonts/great-vibes-latin-ext.woff2',
  './fonts/great-vibes-greek-ext.woff2',
  './photos/IMG_1.jpg',
  './photos/IMG_2.jpg',
  './photos/IMG_3.jpg'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Network-first: try network, fall back to cache.
// External origins (fonts, maps) are skipped — they are non-essential.
self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(function(res) {
        var clone = res.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        return res;
      })
      .catch(function() { return caches.match(e.request); })
  );
});