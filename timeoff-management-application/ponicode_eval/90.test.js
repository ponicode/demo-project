
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js
const rewire = require("rewire")
const departments = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js")
const promise_to_update_supervisors = departments.__get__("promise_to_update_supervisors")

// @ponicode
describe("promise_to_update_supervisors", () => {
    test("0", () => {
        expect(promise_to_update_supervisors({ req: { body: { supervisor_id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }, department: { id: "ponicodecom" } }))
    })

    test("1", () => {
        expect(promise_to_update_supervisors({ req: { body: { supervisor_id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, department: { id: "myDIV" } }))
    })

    test("2", () => {
        expect(promise_to_update_supervisors({ req: { body: { supervisor_id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, department: { id: "ponicodecom" } }))
    })

    test("3", () => {
        expect(promise_to_update_supervisors({ req: { body: { supervisor_id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, department: { id: "ponicodecom" } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promise_to_update_supervisors', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}