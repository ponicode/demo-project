
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js
const rewire = require("rewire")
const bankHolidays = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js")
const getCurrentYear = bankHolidays.__get__("getCurrentYear")

// @ponicode
describe("getCurrentYear", () => {
    test("0", () => {
        expect(getCurrentYear({ req: { body: { year: "1-1-2020" }, query: { year: "01/01/2020" } } }))
    })

    test("1", () => {
        expect(getCurrentYear({ req: { body: { year: "01/13/2020" }, query: { year: "01/01/2020" } } }))
    })

    test("2", () => {
        expect(getCurrentYear({ req: { body: { year: "01/01/2020" }, query: { year: "01/13/2020" } } }))
    })

    test("3", () => {
        expect(getCurrentYear({ req: { body: { year: "20200101" }, query: { year: "20200101" } } }))
    })

    test("4", () => {
        expect(getCurrentYear({ req: { body: { year: "01/01/2020" }, query: { year: "01/01/2020" } } }))
    })

    test("5", () => {
        expect(getCurrentYear({ req: { body: { year: "01/13/2020" }, query: { year: "1-1-2020" } } }))
    })

    test("6", () => {
        expect(getCurrentYear({ req: { body: { year: "01/01/2020" }, query: { year: "20200101" } } }))
    })

    test("7", () => {
        expect(getCurrentYear({ req: { body: { year: "01/01/2020" }, query: { year: "1-1-2020" } } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'getCurrentYear', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}