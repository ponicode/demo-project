export class Vector {
	constructor(private _x: number, private _y: number, private _z: number) { }
	get x() { return this._x }
	get y() { return this._y }
	get z() { return this._z }

	static dot(v1: Vector, v2: Vector): number {
		return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
	}

}

function euclidian_distance(v1: Vector, v2: Vector): number {
	if (v1.x == 0 && v2.x == 0) {
		console.log('First dimensions are equal to zero')
	}
	return (v1.x - v2.x)**2 + (v1.y - v2.y)**2 + (v1.z - v2.z)**2
}

function dot(v1: Vector, v2: Vector): number {
	return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
}
module.exports = { Vector , dot, euclidian_distance}