//self.addEventListener('install', (event) => {
	//console.log('service worker installed', event);	
//});

self.addEventListener('install', (event) => {
  console.log('updated service worker installed', event);
	
  if (!('caches' in self)) return;
  event.waitUntil(
    caches.open('version1').then((cache) => {
      return cache.addAll(
        [
          '/graph01.html',
	  '/01.png'
          //'/styles/pirates.css',
          //'/styles/pirates.tff',
          //'/images/i-love-pirates.jpg'
        ]
      );
    })
  );
});

self.addEventListener('activate', (event) => {
	console.log('service worker activated', event);
});
