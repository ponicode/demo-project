
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/Report.js
const rewire = require("rewire")
const Report = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/Report.js")
const filterLeaves = Report.__get__("filterLeaves")

// @ponicode
describe("filterLeaves", () => {
    test("0", () => {
        expect(filterLeaves({ startDate: "01/13/2020", endDate: "1-1-2020" }))
    })

    test("1", () => {
        expect(filterLeaves({ startDate: "20200101", endDate: "01/01/2020" }))
    })

    test("2", () => {
        expect(filterLeaves({ startDate: "01/13/2020", endDate: "20200101" }))
    })

    test("3", () => {
        expect(filterLeaves({ startDate: "20200101", endDate: "01/13/2020" }))
    })

    test("4", () => {
        expect(filterLeaves({ startDate: "1-1-2020", endDate: "20200101" }))
    })

    test("5", () => {
        expect(filterLeaves({ startDate: "01/13/2020", endDate: "01/01/2020" }))
    })

    test("6", () => {
        expect(filterLeaves({ startDate: "01/01/2020", endDate: "01/13/2020" }))
    })

    test("7", () => {
        expect(filterLeaves({ startDate: "01/01/2020", endDate: "20200101" }))
    })

    test("8", () => {
        expect(filterLeaves({ startDate: "20200101", endDate: "20200101" }))
    })

    test("9", () => {
        expect(filterLeaves({ startDate: "01/01/2020", endDate: "1-1-2020" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/Report.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'filterLeaves', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/Report.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}