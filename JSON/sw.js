const staticCacheName = 'site-static';
const assets = [
	'/',
	'/index.html',
	'/details.html',
	'/styles3.css',
	'/js/app.js',
	'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'
];

// install service worker
self.addEventListener('install', (evt) => {
	// this message appears in the console only once: when a new service worker is first installed
	// if there are no changes to the service worker, then no message appears in the console
	//console.log('service worker has been installed');
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
	console.log('fetch event', evt);
});
