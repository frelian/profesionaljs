const VERSION = "v1";

// cuando el navegador instale el service worker
self.addEventListener('install', event => {
    event.waitUntil(precache());
});

// Cada vez que halla una peticion, quiero que mi service worker haga algo
self.addEventListener('fetch', event => {
    const request = event.request;

    // aqui puedo cachar todos los metdos, get, put, delete...
    // solo trabajare con los GET
    if (request.method !== "GET") {
        return;
    }

    // Buscar un cache
    event.respondWith(cachedResponse(request));

    // Actualizar el cache
    event.waitUntil(updateCache(request));
})

async function precache() {
    // caches regresa una promesa entonces hay que esperarla usando await y async
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // Comentado ya que Parcel renombra los archivos en /dist
        /*
            '/', 
            '/index.html',
            '/assets/index.js',
            '/assets/MediaPlayer.js',
            '/assets/plugins/AutoPlay.js',
            '/assets/plugins/AutoPause.js',
            '/assets/index.css',
            '/assets/BigBuckBunny.mp4',
        */
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);

    // Verifico si el cache tiene la respuesta
    // await cache.match(request); pregunto al cache si ya tiene una copia que le corresponde al request ?
    //  si es no, respondera un "Undefined"
    const response = await cache.match(request);

    // En caso que response sea Undefined, no puedo agregar solo: return response;
    // si response es Undefined entonces respondo lo que tenga de la red || fetch(request)
    return response || fetch(request);
}

// it updates the cache given a request
async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    
    /*
        Para solucionar el error: 
        sw.js: 59 Uncaught(in promise) TypeError: Failed to execute 'put' on 'Cache': Partial response(status code 206) 
        error producido por: return cache.put(request, response);
    */
    // Cache.put when status code is 200 
    // Otherwise return a simple promise
    return response.status === 200
        ? cache.put(request, response)
        : new Promise((resolve, reject) => resolve(':D')); 
}