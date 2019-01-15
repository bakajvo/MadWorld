import { PixiRunner } from "../../ts/PixiRunner";
import MadWorldFactory from "./MadWorldFactory";

class MadWorld {
    engine: PixiRunner;

    constructor() {
        this.engine = new PixiRunner();

        this.engine.init(document.getElementById("gameCanvas") as HTMLCanvasElement, 1);

        PIXI.loader.reset()
        .load(() => this.onAssetsLoaded());
    }

    onAssetsLoaded() {
        let factory = new MadWorldFactory();
        factory.resetGame(this.engine.scene);
    }
}

new MadWorld();