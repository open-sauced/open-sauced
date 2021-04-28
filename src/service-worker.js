const cacheName = "OpenSaucedPWA-v1";
const filesToCache = ["index.html"];

self.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[ServiceWorker] Install");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.filter((key) => {return key !== cacheName}).map(function(key) {
          console.log("[ServiceWorker] Removing old cache shell", key);
          return caches.delete(key);
      }));
    })
  );
});

self.addEventListener("fetch", (event) => {
  // event.respondWith(fetchAndReplace(event.request));
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );

});
