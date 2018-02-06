import { TanksGameEvent } from "./event";
import { EventController, GameState } from "../event-controller";

export class MenuEvent implements TanksGameEvent {
    context: CanvasRenderingContext2D;
    controller: EventController;

    constructor(controller: EventController, context: CanvasRenderingContext2D) {
        console.log("Initialising MENU EVENT");
        this.controller = controller;
        this.context = context;
    }

    addEventListeners(canvas: HTMLCanvasElement) {
        canvas.addEventListener("mousedown", this.someFunc, false);
    }
    removeEventListeners(canvas: HTMLCanvasElement) {
        canvas.removeEventListener("mousedown", this.someFunc, false);
    }

    private someFunc = () => {
        console.log("Changing state from MENU EVENT to TANK PLACING");
        this.controller.changeGameState(GameState.TANK_PLACING);
    }
}