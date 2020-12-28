import MediaPlayer from './MediaPlayer';
// import MediaPlayer, { foo } from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector("video");
const buttonPlay: HTMLElement = document.querySelector("#playPause");
const buttonMute: HTMLElement = document.querySelector('#unmuteMute');

const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads(),
    ]
});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

// Para detectar si el navegador soporta service worker
if ('serviceWorker' in navigator) {

    /* Otra opcion de capturar el error:
        navigator.serviceWorker.register('./assets/sw.js').catch(error => {
            console.log("Ups error: ", error.message);
        });
    */

    navigator.serviceWorker.register('/sw.js').then(function (registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful :) with scope: ', registration.scope);
    }, function (err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}