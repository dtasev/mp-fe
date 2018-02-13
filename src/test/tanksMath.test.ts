import { expect } from 'chai';
import 'mocha';

import { TanksMath } from "../ts/tanksMath";
import { CartesianCoords } from '../ts/cartesianCoords';

describe('Tanks Math', () => {
    it('should calculate distance between two points', () => {
        // when the end is on the right
        let start = new CartesianCoords(0, 0);
        let end = new CartesianCoords(1, 1);
        expect(TanksMath.point.dist2d(start, end)).to.equal(Math.SQRT2);

        // when the end is on the left
        start = new CartesianCoords(1, 1);
        end = new CartesianCoords(0, 0);
        expect(TanksMath.point.dist2d(start, end)).to.equal(Math.SQRT2);

        start = new CartesianCoords(10, 10);
        end = new CartesianCoords(15, 15);
        expect(TanksMath.point.dist2d(start, end)).to.equal(7.0710678118654755);
    });
    it('should be able to check circle-point collision', () => {
        const point = new CartesianCoords(2, 5);
        const obj_coords = new CartesianCoords(3, 4);

        let obj_width = 3;
        expect(TanksMath.point.collide_circle(point, obj_coords, obj_width)).to.be.true;
        obj_width = 2;
        expect(TanksMath.point.collide_circle(point, obj_coords, obj_width)).to.be.true;
        obj_width = 1;
        expect(TanksMath.point.collide_circle(point, obj_coords, obj_width)).to.be.false;
    });
    it('should calculate the closest point on a horizontal line', () => {
        // test horizontal line
        let start = new CartesianCoords(0, 0);
        let end = new CartesianCoords(4, 0);
        let point = new CartesianCoords(2, 2);
        let res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(2);
        expect(res.Y).to.equal(0);

        start = new CartesianCoords(0, 0);
        end = new CartesianCoords(3, 0);
        point = new CartesianCoords(2, 2);
        res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(2);
        expect(res.Y).to.equal(0);

        start = new CartesianCoords(0, 0);
        end = new CartesianCoords(500, 0);
        point = new CartesianCoords(250, 250);
        res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(250);
        expect(res.Y).to.equal(0);
    });
    it('should calculate the closest point on a diagonal line, up to the right', () => {
        // test diagonal line / pointing up and to the right
        let start = new CartesianCoords(0, 0);
        let end = new CartesianCoords(2, 2);
        let point = new CartesianCoords(0, 2);
        let res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(1);
        expect(res.Y).to.equal(1);
        res = TanksMath.line.closest_point(end, start, point);
        expect(res.X).to.equal(1);
        expect(res.Y).to.equal(1);

        start = new CartesianCoords(1, 1);
        end = new CartesianCoords(3, 3);
        point = new CartesianCoords(0, 2);
        res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(1);
        expect(res.Y).to.equal(1);
        res = TanksMath.line.closest_point(end, start, point);
        expect(res.X).to.equal(1);
        expect(res.Y).to.equal(1);
    });
    it('should calculate the closest point on a vertical line', () => {
        // test vertical line
        let start = new CartesianCoords(0, 0);
        let end = new CartesianCoords(0, 2);
        let point = new CartesianCoords(1, 1);
        let res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(0);
        expect(res.Y).to.equal(1);
        res = TanksMath.line.closest_point(end, start, point);
        expect(res.X).to.equal(0);
        expect(res.Y).to.equal(1);
    });
    it('should calculate the closest point on a diagonal line, up to the left', () => {
        // test diagonal line \, up and to the left
        let start = new CartesianCoords(0, 2);
        let end = new CartesianCoords(2, 0);
        let point = new CartesianCoords(2, 2);
        let res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(1);
        expect(res.Y).to.equal(1);
        res = TanksMath.line.closest_point(end, start, point);
        expect(res.X).to.equal(1);
        expect(res.Y).to.equal(1);

        start = new CartesianCoords(1, 3);
        end = new CartesianCoords(3, 1);
        point = new CartesianCoords(3, 3);
        res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(2);
        expect(res.Y).to.equal(2);
        res = TanksMath.line.closest_point(end, start, point);
        expect(res.X).to.equal(2);
        expect(res.Y).to.equal(2);
    });
    it('should calculate the closest point on a line, when the point is on the line', () => {
        // test diagonal line \, up and to the left
        let start = new CartesianCoords(0, 2);
        let end = new CartesianCoords(2, 4);
        let point = new CartesianCoords(1, 3);
        let res = TanksMath.line.closest_point(start, end, point);
        expect(res.X).to.equal(1);
        expect(res.Y).to.equal(3);
        res = TanksMath.line.closest_point(end, start, point);
        expect(res.X).to.equal(1);
        expect(res.Y).to.equal(3);
    });
    it('should check collision of a line with a circle', () => {
        let start = new CartesianCoords(0, 2);
        let end = new CartesianCoords(2, 4);
        let point = new CartesianCoords(2, 2);
        let radius = 2;
        expect(TanksMath.line.collide_circle(start, end, point, radius)).to.be.true;
    });
});