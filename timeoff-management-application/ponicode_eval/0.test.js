
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_collection.js
const rewire = require("rewire")
const leave_collection = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_collection.js")
const promise_to_group_leaves = leave_collection.__get__("promise_to_group_leaves")

// @ponicode
describe("promise_to_group_leaves", () => {
    test("0", () => {
        expect(promise_to_group_leaves(null))
    })

    test("1", () => {
        expect(promise_to_group_leaves(0))
    })

    test("2", () => {
        expect(promise_to_group_leaves("Thank you for using PONICODE! Get to 80% coverage super fast !"))
    })

    test("3", () => {
        expect(promise_to_group_leaves("123456789"))
    })

    test("4", () => {
        expect(promise_to_group_leaves(false))
    })

    test("5", () => {
        expect(promise_to_group_leaves(NaN))
    })

    test("6", () => {
        expect(promise_to_group_leaves(undefined))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_collection.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promise_to_group_leaves', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_collection.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}