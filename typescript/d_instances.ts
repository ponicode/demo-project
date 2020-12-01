export class Vector {
	constructor(private _x: number, private _y: number, private _z: number) { }
	get x() { return this._x }
	get y() { return this._y }
	get z() { return this._z }

	static dot(v1: Vector, v2: Vector): number {
		return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
	}

}

function sum(v1: Vector, v2: Vector): Vector {
	return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
}
function dot(v1: Vector, v2: Vector): number {
	return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
}
module.exports = { Vector , dot, sum}