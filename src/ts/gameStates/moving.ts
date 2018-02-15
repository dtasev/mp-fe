import { IActionState } from "./iActionState";
import { Draw, DrawState } from "../drawing/draw";
import * as Limit from "../limiters/index";
import { GameStateController, GameState } from "../gameStateController";
import { Player } from "../gameObjects/player";
import { TanksMath } from "../tanksMath";
import { CartesianCoords } from "../cartesianCoords";
import { Tank, TankState } from "../gameObjects/tank";
import { IGameObject } from "../gameObjects/iGameObject";
import { ActiveTank } from "./sharedState";
import { Color } from "../drawing/color";

export class MovingState implements IActionState {
    context: CanvasRenderingContext2D;
    controller: GameStateController;
    player: Player;

    draw: Draw;
    line: Limit.Length;
    turn: Limit.Actions;
    active: ActiveTank;

    constructor(controller: GameStateController, context: CanvasRenderingContext2D, player: Player) {
        this.controller = controller;
        this.context = context;
        this.player = player;

        this.draw = new Draw();
        this.line = new Limit.Length(Tank.MOVEMENT_RANGE);
        // if this is the first turn
        if (!this.controller.shared.turn.available()) {
            this.turn = new Limit.Actions();
        } else {
            this.turn = this.controller.shared.turn.get();
        }
        this.active = this.controller.shared.active.get();
    }

    addEventListeners(canvas: HTMLCanvasElement) {
        canvas.onmousedown = this.startMovement;
        canvas.onmousemove = this.drawMoveLine;
        // NOTE: mouseup is on the whole window, so that even if the cursor exits the canvas, the event will trigger
        window.onmouseup = this.endMovement;

        // canvas.addEventListener('touchstart', this.touchMove, false);
        // canvas.addEventListener('touchend', this.mouseUp, false);
        // canvas.addEventListener('touchmove', this.touchMove, false);
    }

    startMovement = (e: MouseEvent): void => {
        // limit the start of the line to be the tank
        this.draw.last = new CartesianCoords(this.active.position.X, this.active.position.Y);
        // limit the length of the line to the maximum allowed tank movement, and disabled tanks can't be moved
        if (this.line.in(this.active.position, this.draw.mouse) && this.active.tank.state !== TankState.DISABLED) {
            this.draw.state = DrawState.DRAWING;
            this.validMove();
        }
    }

    private validMove() {
        this.active.valid_position = true;
        this.draw.autoLine(this.context, Tank.MOVEMENT_LINE_WIDTH, Color.black());
    }

    endMovement = (e: MouseEvent) => {
        // reset the line limit as the user has let go of the button
        this.line.reset();

        // only act if the position is valid
        if (this.active.valid_position) {
            // update the position of the tank in the player array
            this.player.tanks[this.active.id].position = this.draw.mouse.copy();
            this.controller.showUserWarning("");
            this.turn.take();
        }

        if (this.turn.over()) {
            // this was the last turn, go to shooting afterwards
            this.controller.shared.next.set(GameState.TANK_SHOOTING);
        } else {
            // come back to moving after selection
            this.controller.shared.next.set(GameState.TANK_MOVING);
            // continue the turn the next time this state is accessed
            this.controller.shared.turn.set(this.turn);
        }

        this.draw.state = DrawState.STOPPED;
        // redraw canvas with all current tanks
        this.controller.redrawCanvas(this.draw);
        // go to tank selection state
        this.controller.changeGameState(GameState.TANK_SELECTION);
    }

    drawMoveLine = (e: MouseEvent) => {
        this.draw.updateMousePosition(e);
        // draw the movement line if the mouse button is currently being pressed
        if (this.draw.state == DrawState.DRAWING) {
            if (this.line.in(this.active.position, this.draw.mouse)) {
                this.validMove();
            } else {
                this.active.valid_position = false;
            }
        }
    }

    // touchMove = (e: TouchEvent) => {
    //     // Update the touch co-ordinates
    //     this.draw.updateTouchPosition(e);

    //     // During a touchmove event, unlike a mousemove event, we don't need to check if the touch is engaged, since there will always be contact with the screen by definition.
    //     this.draw.line(this.context, Tank.DEFAULT_WIDTH);

    //     // Prevent a scrolling action as a result of this touchmove triggering.
    //     event.preventDefault();
    // }

    // penMove = (e: PointerEvent) => {
    //     this.draw.updateMousePosition(e);
    //     if (this.draw.state == DrawState.DRAWING) {
    //         this.draw.line(this.context, Tank.DEFAULT_WIDTH);
    //     }
    //     event.preventDefault();
    // }
}