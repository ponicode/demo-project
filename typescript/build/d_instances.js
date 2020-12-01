"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dot = exports.sum = exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(_x, _y, _z) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
    }
    Object.defineProperty(Vector.prototype, "x", {
        get: function () { return this._x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () { return this._y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "z", {
        get: function () { return this._z; },
        enumerable: false,
        configurable: true
    });
    return Vector;
}());
exports.Vector = Vector;
function sum(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
}
exports.sum = sum;
function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}
exports.dot = dot;
module.exports = { Vector: Vector, dot: dot, sum: sum };
