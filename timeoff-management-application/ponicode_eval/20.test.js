
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/Report.js
const rewire = require("rewire")
const Report = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/Report.js")
const leaveIntoObject = Report.__get__("leaveIntoObject")

// @ponicode
describe("leaveIntoObject", () => {
    test("0", () => {
        expect(leaveIntoObject({ date: "20200101", leave_type: { name: "string" } }))
    })

    test("1", () => {
        expect(leaveIntoObject({ date: "01/01/2020", leave_type: { name: "object" } }))
    })

    test("2", () => {
        expect(leaveIntoObject({ date: "20200101", leave_type: { name: "number" } }))
    })

    test("3", () => {
        expect(leaveIntoObject({ date: "01/01/2020", leave_type: { name: "number" } }))
    })

    test("4", () => {
        expect(leaveIntoObject({ date: "1-1-2020", leave_type: { name: "array" } }))
    })

    test("5", () => {
        expect(leaveIntoObject({ date: "1-1-2020", leave_type: { name: "number" } }))
    })

    test("6", () => {
        expect(leaveIntoObject({ date: "20200101", leave_type: { name: "object" } }))
    })

    test("7", () => {
        expect(leaveIntoObject({ date: "01/13/2020", leave_type: { name: "object" } }))
    })

    test("8", () => {
        expect(leaveIntoObject({ date: "01/13/2020", leave_type: { name: "string" } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/Report.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'leaveIntoObject', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/Report.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}