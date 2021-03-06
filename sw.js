var staticCacheName = 'Converter-1'

self.addEventListener('install', function(event) {
  event.waitUntil(
	caches.open(staticCacheName).then(function(cache) {
		return cache.addAll([
			'/',
			'/views/converter.ejs',
			'https://free.currencyconverterapi.com/api/v5/currencies'
			]);

		})
  	);
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
  	caches.match(event.request).then(function(response) {
  		if(response) return response;
  		return fetch(event.request);
  	})
  	);
}); 

// versions
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) { 
		  return Promise.all(
			cacheNames.filter(function(cacheName) {
				return cacheName.startsWith('convertercache-') &&
					cacheName != staticCacheName;
			}).map(function(cacheName) {
				return cache.delete(cacheName);
			})
		);
	})
);
});

//skeleton
self.addEventListener('fetch', function(event) {
	var requestUrl = new URL(event.request.url);

	if (requestUrl.origin === location.origin) {
		if (requestUrl.pathname === '/') {
			event.respondWith(caches.match('/skeleton'));
			retrun;
		}

	}
})







self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});