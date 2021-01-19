
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js
const rewire = require("rewire")
const departments = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js")
const promise_to_update_department = departments.__get__("promise_to_update_department")

// @ponicode
describe("promise_to_update_department", () => {
    test("0", () => {
        expect(promise_to_update_department({ department: { name: "object" }, company: "edmond" }))
    })

    test("1", () => {
        expect(promise_to_update_department({ department: { name: "object" }, company: "Jean-Philippe" }))
    })

    test("2", () => {
        expect(promise_to_update_department({ department: { name: "array" }, company: "edmond" }))
    })

    test("3", () => {
        expect(promise_to_update_department({ department: { name: "string" }, company: "George" }))
    })

    test("4", () => {
        expect(promise_to_update_department({ department: { name: "number" }, company: "\u8427" }))
    })

    test("5", () => {
        expect(promise_to_update_department({ department: { name: "array" }, company: "\u8427" }))
    })

    test("6", () => {
        expect(promise_to_update_department({ department: { name: "object" }, company: "Pierre Edouard" }))
    })

    test("7", () => {
        expect(promise_to_update_department({ department: { name: "array" }, company: "George" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promise_to_update_department', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}