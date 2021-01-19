
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_collection.js
const rewire = require("rewire")
const leave_collection = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_collection.js")
const promise_to_sort_leaves = leave_collection.__get__("promise_to_sort_leaves")

// @ponicode
describe("promise_to_sort_leaves", () => {
    test("0", () => {
        expect(promise_to_sort_leaves("Ponicponicodeponiponicoooooooooode18774563"))
    })

    test("1", () => {
        expect(promise_to_sort_leaves("123456789"))
    })

    test("2", () => {
        expect(promise_to_sort_leaves("\"#'{7855663]}\u00e9\u00e9\u00e0\u00e0"))
    })

    test("3", () => {
        expect(promise_to_sort_leaves("p"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_collection.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promise_to_sort_leaves', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_collection.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}