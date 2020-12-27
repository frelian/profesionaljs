import MediaPlayer from './MediaPlayer.js';
// import MediaPlayer, { foo } from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector("video");
const buttonPlay = document.querySelector("#playPause");
const buttonMute = document.querySelector('#unmuteMute');

const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
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