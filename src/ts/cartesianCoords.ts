export class CartesianCoords {
    public X: number;
    public Y: number;
    constructor(x: number = -1, y: number = -1) {
        this.X = x;
        this.Y = y;
    }

    copy() {
        return new CartesianCoords(this.X, this.Y);
    }

    toString() {
        return this.X + "," + this.Y;
    }
}