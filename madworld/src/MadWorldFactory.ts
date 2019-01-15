import { PIXICmp } from "../../ts/engine/PIXIObject";
import { MadWorldModel } from "./MadWorldModel";
import { KeyInputComponent } from '../../ts/components/KeyInputComponent';
import { ATTR_MODEL, ATTR_FACTORY } from "./Constants";
import DebugComponent from '../../ts/components/DebugComponent';
import Scene from "../../ts/engine/Scene";

export default class MadWorldFactory {

    initializeGame(rootObject: PIXICmp.ComponentObject, model: MadWorldModel) {
        let scene = rootObject.getScene();

        rootObject.addComponent(new KeyInputComponent());

        // add game model
        rootObject.addAttribute(ATTR_MODEL, model);

        rootObject.addComponent(new DebugComponent(document.getElementById("debugSect")));
    }

    resetGame(scene: Scene) {
        scene.clearScene();
        let model = new MadWorldModel();
        scene.addGlobalAttribute(ATTR_FACTORY, this);
        this.initializeGame(scene.stage, model);
    }
}