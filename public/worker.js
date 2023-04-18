// const CACHE_NAME = 'one-coin-task-manager-1-0-2';
// const urlsToCache = ['/manifest.json', '/index.html'];

// self.addEventListener('install', function (event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       cache.addAll(urlsToCache);
//     }),
//   );
// });

// self.addEventListener('activate', function (event) {});

// self.addEventListener('fetch', function (event) {
//   event.respondWith(
//     fetch(event.request).catch(function () {
//       return caches.match(event.request);
//     }),
//   );
// });
