interface ConfigParam {
    el: HTMLMediaElement,
    plugins?: Array<any>
}

class MediaPlayer {
    // Declaro al media su tipo y plugins
    media: HTMLMediaElement;
    plugins: Array<any>;
    
    constructor(config: ConfigParam) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    // Implementacion para el mute del AutoPlay
    mute() {
        this.media.muted = false;
    }

    // Implementacion al hacer clic en Mute/Unmute
    toggleMute() {
        // this.media.muted = false;
        this.media.muted ? this.media.muted = false : this.media.muted = true;
    }
}

export default MediaPlayer;
// export const foo = "bar";