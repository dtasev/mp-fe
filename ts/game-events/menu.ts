import { IGameActionState } from "./event";
import { EventController, GameState } from "../event-controller";
import { IGameObject } from "../game-objects/igame-object";
import { CartesianCoords } from "../cartesian-coords";
import { Player } from "../game-objects/player";
import { Draw } from "../draw";


class Menu {
    private title: string;
    private options: Array<string>;
    private selected_item: number;

    private readonly start_height = 150;
    private readonly height_increment = 70;
    private final_height = -1;

    constructor(title: string, options: Array<string>) {
        this.title = title;
        this.options = options;
    }

    draw(context: CanvasRenderingContext2D, draw: Draw) {
        const width = context.canvas.width;
        const height = context.canvas.height;

        context.fillStyle = "Black";
        context.fillRect(0, 0, width, height);

        context.textAlign = "center";
        context.fillStyle = "rgb(135,206,250)";
        context.font = "60px Georgia";

        let text_height = this.start_height;
        const centre = width / 2;
        context.fillText(this.title, centre, text_height);
        context.fillStyle = "White";
        context.font = "30px Georgia";


        for (const [id, option] of this.options.entries()) {
            text_height += this.height_increment;
            if (this.selected(id)) {
                context.fillStyle = "Yellow";
                context.font = "40px Georgia";
            } else {
                context.fillStyle = "White";
                context.font = "30px Georgia";
            }
            context.fillText(option, centre, text_height);
        }
        this.final_height = text_height;
    }

    private selected(id): boolean {
        return this.selected_item === id;
    }

    select(mouse: CartesianCoords): void {
        if (this.final_height === -1) {
            throw new Error("The menu hasn't been drawn.");
        }

        // adds some buffer space around each option, this makes it easier to select each option
        const buffer_space = this.height_increment / 2;

        let current_height = this.final_height;
        let id = this.options.length - 1;

        // check up to the height of the title, there's not going to be anything above it
        while (current_height > this.start_height) {
            if (mouse.Y > current_height - buffer_space) {
                this.selected_item = id;
                return;
            }

            // lower the height that we are checking on, this has the effect of moving the
            // menu item's hitbox higher on the screen
            current_height -= this.height_increment;
            id -= 1;
        }
    }
}
export class MenuState implements IGameActionState {
    private menu: Menu;

    private context: CanvasRenderingContext2D;
    private controller: EventController;

    private draw: Draw;

    constructor(controller: EventController, context: CanvasRenderingContext2D) {
        this.controller = controller;
        this.context = context;
        this.draw = new Draw();
        this.menu = new Menu("Tanks", ["Start game", "Potatoes", "Apples", "I", "Choose", "You", "Pikachu"]);
        this.menu.draw(this.context, this.draw);
    }

    addEventListeners(canvas: HTMLCanvasElement) {
        canvas.onmousedown = this.someFunc;
        canvas.onmousemove = this.selectMenuitem;
    }

    private selectMenuitem = (e: MouseEvent) => {
        this.draw.updateMousePosition(e);
        this.menu.select(this.draw.mouse);
        this.menu.draw(this.context, this.draw);

    }

    private someFunc = (e: MouseEvent) => {
        console.log("Changing state from MENU EVENT to TANK PLACING");
        this.controller.clearCanvas();
        this.controller.changeGameState(GameState.TANK_PLACING);
    }
}