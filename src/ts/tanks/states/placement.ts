import { IPlayState } from "./iActionState";
import { GameController, GameState } from "../controller";
import { Tank } from "../objects/tank";
import { Draw } from "../drawing/draw";
import { Player } from "../objects/player";
import { Ui } from "../ui/ui";

import * as Settings from '../settings';
import * as Limit from "../limiters/index";
import { Viewport } from "../gameMap/viewport";
import { CommonUi } from "../ui/common";
import { ITheme } from "../themes/iTheme";

export class PlacingState implements IPlayState {
    // keeps track of how many players have placed their tanks IN TOTAL
    static playersTankPlacement: Limit.Actions;

    context: CanvasRenderingContext2D;
    controller: GameController;
    draw: Draw;
    player: Player;
    ui: Ui;
    tanksPlaced: Limit.Actions;

    /**
     * 
     * @param controller The events controller, which is used to change the game state after this event is finished.
     * @param context Context on which the objects are drawn
     * @param player 
     */
    constructor(controller: GameController, context: CanvasRenderingContext2D, player: Player) {
        this.controller = controller;
        this.context = context;
        this.draw = new Draw();
        this.tanksPlaced = new Limit.Actions(controller.numTanks);

        if (!PlacingState.playersTankPlacement) {
            PlacingState.playersTankPlacement = new Limit.Actions(controller.numPlayers);
        }

        this.player = player;
    }

    addEventListeners(canvas: HTMLCanvasElement) {
        canvas.onmousedown = this.addTank;
    }

    view(viewport: Viewport) {
        viewport.goTo(this.player.viewportPosition);
    }
    setUpUi(ui: Ui, viewport: Viewport, theme: ITheme) {
        ui.heading.addHome(viewport, this.player, theme);
    }
    private addTank = (e) => {
        // if the button clicked is not the left button, do nothing
        if (e.button != 0) {
            return;
        }
        this.draw.updateMousePosition(e);

        // if the position of the tank does not collide with existing terrain, then the tank can be placed
        if (!this.controller.collidingWithTerrain(this.draw.mouse, Tank.WIDTH)) {
            const tank = new Tank(this.player.tanks.length, this.player, this.draw.mouse.x, this.draw.mouse.y, this.controller.theme);
            this.player.tanks.push(tank);
            tank.draw(this.context);
            // player has placed a tank
            this.tanksPlaced.take();
            // if we've placed as many objects as allowed, then go to next state
            if (this.tanksPlaced.over()) {
                PlacingState.playersTankPlacement.take();
                this.controller.nextPlayer = true;
                // all of the players have placed their tanks, go to moving state
                if (PlacingState.playersTankPlacement.over()) {
                    this.controller.changeGameState(GameState.TANK_SELECTION);
                } else {
                    this.controller.changeGameState(GameState.TANK_PLACEMENT);
                }
            }
        }
    }
}