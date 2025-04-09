const CACHE_NAME = 'gold-bubble-v1';
const urlsToCache = [
  '/hobab/',
  '/hobab/index.html', // مطمئن شوید که نام فایل HTML شما همین است
  // '/css/style.css', // اگر فایل CSS جداگانه دارید، مسیر آن را اینجا اضافه کنید
  // '/js/app.js',   // اگر فایل JS جداگانه دارید، مسیر آن را اینجا اضافه کنید
  '/hobab/icons/icon-192x192.png',
  '/hobab/icons/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
