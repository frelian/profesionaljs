function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        // this hace referencia a player que es el
        // objeto que ejecuta esta parte del codigo
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media, // debe ser definido media, porque se pierde su referencia

        // get permite acceder a la propiedad muted desde fuera
        // en este caso "if (!player.muted)"" accede desde Autoplay.js
        get muted() {
            return this.media.muted;
        },

        // set permite modificar una propiedad desde fuera
        // en este caso  "player.muted = true" desde Autoplay.js
        // donde true es el valor que se le va dar a la propiedad
        set muted(value) {
            this.media.muted = value;
        },
    };

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
};

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

// Implementacion para el mute del AutoPlay
MediaPlayer.prototype.mute = function () {
    this.media.muted = false;
}

// Implementacion al hacer clic en Mute/Unmute
MediaPlayer.prototype.toggleMute = function () {
    // this.media.muted = false;
    this.media.muted ? this.media.muted = false : this.media.muted = true;
}

export default MediaPlayer;
// export const foo = "bar";