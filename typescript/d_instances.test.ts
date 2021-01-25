import * as d_instances from "./d_instances"
// @ponicode
describe("d_instances.euclidian_distance", () => {
    test("0", () => {
        let param1: any = new d_instances.Vector(-5.48, -5.48, 1)
        let param2: any = new d_instances.Vector(100, 100, 1)
        let result: any = d_instances.euclidian_distance(param1, param2)
        expect(result).toBe(22252.060800000003)
    })

    test("1", () => {
        let param1: any = new d_instances.Vector(100, 1, 100)
        let param2: any = new d_instances.Vector(-5.48, 1, 0)
        let result: any = d_instances.euclidian_distance(param1, param2)
        expect(result).toBe(21126.030400000003)
    })
})
