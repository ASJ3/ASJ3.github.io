// install service worker
self.addEventListener('install', (evt) => {
	// this message appears in the console only once: when a new service worker is first installed
	// if there are no changes to the service worker, then no message appears in the console
	console.log('service worker has been installed');
});

// activate service worker
self.addEventListener('activate', (evt) => {
	console.log('service worker has been activated');
});

// fetch event
self.addEventListener('fetch', (evt) => {
	console.log('fetch event', evt);
});