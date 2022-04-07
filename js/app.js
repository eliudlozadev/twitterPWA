var url = window.location.href;
var swUbicacion = '/twitterPWA/sw.js';

if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        swUbicacion = '/sw.js';
    }
    navigator.serviceWorker.register(swUbicacion);
}