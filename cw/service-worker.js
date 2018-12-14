self.addEventListener('install', (event) => {
  console.log('updated service worker installed', event);
	
  if (!('caches' in self)) {
	  console.log('browser does not deal with cache');	  
	  return;
  }
  event.waitUntil(
    caches.open('cwversion').then((cache) => {
      console.log('browser accepts cache');
      return cache.addAll(
        [
          'index.html',
		'optimization1.html',
		'optimization2.html',
		'recall.html',
		'report.html',
		'transition.html',
	        'script.js',
		'styles.css',
	        'markologosimple.png',
		'markoReport2.png',
		'symbols/arrows.png',
		'symbols/barGraph.png',
		'symbols/burgerNavBlack.png',
		'symbols/horn.png',
		'symbols/lineGraph.png'
        ]
      );
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

self.addEventListener('activate', (event) => {
	console.log('service worker activated', event);
});
