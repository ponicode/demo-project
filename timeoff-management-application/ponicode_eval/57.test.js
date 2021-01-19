
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/check_booking_on_calendar.js
const check_booking_on_calendar = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/check_booking_on_calendar.js")

// @ponicode
describe("check_booking_on_calendar", () => {
    test("0", () => {
        expect(check_booking_on_calendar("./path/to/file"))
    })

    test("1", () => {
        expect(check_booking_on_calendar("C:\\\\path\\to\\folder\\"))
    })

    test("2", () => {
        expect(check_booking_on_calendar("."))
    })

    test("3", () => {
        expect(check_booking_on_calendar("path/to/folder/"))
    })

    test("4", () => {
        expect(check_booking_on_calendar("C:\\\\path\\to\\file.ext"))
    })

    test("5", () => {
        expect(check_booking_on_calendar("path/to/file.ext"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/check_booking_on_calendar.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/check_booking_on_calendar.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}