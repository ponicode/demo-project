
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js
const rewire = require("rewire")
const departments = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js")
const promise_to_remove_supervisor = departments.__get__("promise_to_remove_supervisor")

// @ponicode
describe("promise_to_remove_supervisor", () => {
    test("0", () => {
        expect(promise_to_remove_supervisor({ department: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, supervisor_id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }))
    })

    test("1", () => {
        expect(promise_to_remove_supervisor({ department: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, supervisor_id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }))
    })

    test("2", () => {
        expect(promise_to_remove_supervisor({ department: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, supervisor_id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }))
    })

    test("3", () => {
        expect(promise_to_remove_supervisor({ department: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, supervisor_id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }))
    })

    test("4", () => {
        expect(promise_to_remove_supervisor({ department: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, supervisor_id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }))
    })

    test("5", () => {
        expect(promise_to_remove_supervisor({ department: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, supervisor_id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }))
    })

    test("6", () => {
        expect(promise_to_remove_supervisor({ department: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, supervisor_id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }))
    })

    test("7", () => {
        expect(promise_to_remove_supervisor({ department: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, supervisor_id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promise_to_remove_supervisor', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}