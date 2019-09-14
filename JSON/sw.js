const staticCacheName = 'site-static';
const assets = [
	'/JSON/',
	'/JSON/index.html',
	'/JSON/details.html',
	'/JSON/user.html',
	'/JSON/styles3.css',
	'/JSON/js/app.js',
	'/JSON/cardContent3.json',
	'/JSON/cardContent4.json',
	'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
];

// install service worker
self.addEventListener('install', (evt) => {
	// this message appears in the console only once: when a new service worker is first installed
	// if there are no changes to the service worker, then no message appears in the console
	//console.log('service worker has been installed');
	// waitUntil() waits until the promise inside the function is resolved
	// here our promise is to cache all the assets
	evt.waitUntil(
		caches.open(staticCacheName).then(cache => {
			console.log('caching shell assets');
			cache.addAll(assets);
		})
	);
	
});

// activate service worker
self.addEventListener('activate', (evt) => {
	console.log('service worker has been activated');
});

// fetch event
self.addEventListener('fetch', (evt) => {
	//console.log('fetch event', evt);
	evt.respondWith(
		caches.match(evt.request, {'ignoreSearch': true}).then(cacheRes => {
			return cacheRes || fetch(evt.request);
		})
	);	
});
