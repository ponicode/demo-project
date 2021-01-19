
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js
const rewire = require("rewire")
const helpers = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js")
const as_date_formatted = helpers.__get__("as_date_formatted")

// @ponicode
describe("as_date_formatted", () => {
    test("0", () => {
        expect(as_date_formatted("", "01:04:03", { tom_take_timezone_into_consideration: true }))
    })

    test("1", () => {
        expect(as_date_formatted(false, 0, { tom_take_timezone_into_consideration: false }))
    })

    test("2", () => {
        expect(as_date_formatted(undefined, undefined, { tom_take_timezone_into_consideration: false }))
    })

    test("3", () => {
        expect(as_date_formatted(undefined, "2017-09-29T19:01:00.000", { tom_take_timezone_into_consideration: true }))
    })

    test("4", () => {
        expect(as_date_formatted(null, NaN, { tom_take_timezone_into_consideration: false }))
    })

    test("5", () => {
        expect(as_date_formatted(NaN, "2017-09-29T23:01:00.000Z", { tom_take_timezone_into_consideration: false }))
    })

    test("6", () => {
        expect(as_date_formatted(false, null, { tom_take_timezone_into_consideration: false }))
    })

    test("7", () => {
        expect(as_date_formatted(null, "01:04:03", { tom_take_timezone_into_consideration: false }))
    })

    test("8", () => {
        expect(as_date_formatted(NaN, "", { tom_take_timezone_into_consideration: false }))
    })

    test("9", () => {
        expect(as_date_formatted("", "", { tom_take_timezone_into_consideration: true }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'as_date_formatted', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}