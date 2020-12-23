import MediaPlayer from './MediaPlayer.js';
// import MediaPlayer, { foo } from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const buttonPlay = document.querySelector("#playPause");
const buttonMute = document.querySelector('#unmuteMute');

const player = new MediaPlayer({ el: video, plugins: [
    // new AutoPlay()
] });

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();