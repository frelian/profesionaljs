class AutoPause {
    constructor() {
        this.threshold = 0.25;

        // usando bind, hago permanente el this a la instancia del objeto
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player) {
        this.player = player; // guardo el player en una instancia de la clase

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold, // que el IntersectionObserver detecte el 25% de visibilidad

        })

        observer.observe(this.player.media)
    }

    handleIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }

        // console.log(entry);
    }
}

export default AutoPause;