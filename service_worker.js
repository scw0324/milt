const CACHE_NAME = 'runrun-game-v1';
const urlsToCache = [
    '/milt/',
    '/milt/index.html',
    '/milt/manifest.json',
    'https://i.ibb.co/whwPqjHF/maskable-icon-x512.png',
    'https://i.ibb.co/whwPqjHF/maskable-icon-x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
