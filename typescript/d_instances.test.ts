import * as d_instances from "./d_instances"
// @ponicode
describe("d_instances.euclidian_distance", () => {
    test("0", () => {
        let param1: any = new d_instances.Vector(0, 0, 0)
        let param2: any = new d_instances.Vector(0, 0, 0)
        let result: any = d_instances.euclidian_distance(param1, param2)
        expect(result).toBe(0)
    })

    test("1", () => {
        let param1: any = new d_instances.Vector(100, -50, 50)
        let param2: any = new d_instances.Vector(100, 50, -150)
        let result: any = d_instances.euclidian_distance(param1, param2)
        expect(result).toBe(50000)
    })
})
