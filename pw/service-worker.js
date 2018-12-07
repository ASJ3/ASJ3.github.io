self.addEventListener('install', (event) => {
  console.log('updated service worker installed', event);
	
  if (!('caches' in self)) {
	  console.log('browser does not deal with cache');	  
	  return;
  }
  event.waitUntil(
    caches.open('version1').then((cache) => {
      console.log('browser accepts cache');
      return cache.addAll(
        [
          'index.html',
	        'script.js',
	        'markologosimple.png'
        ]
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  );
});

self.addEventListener('activate', (event) => {
	console.log('service worker activated', event);
});
