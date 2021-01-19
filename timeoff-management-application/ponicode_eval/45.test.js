
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js
const rewire = require("rewire")
const helpers = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js")
const get_timezone = helpers.__get__("get_timezone")

// @ponicode
describe("get_timezone", () => {
    test("0", () => {
        expect(get_timezone("/path/to/file"))
    })

    test("1", () => {
        expect(get_timezone("."))
    })

    test("2", () => {
        expect(get_timezone("./path/to/file"))
    })

    test("3", () => {
        expect(get_timezone("path/to/file.ext"))
    })

    test("4", () => {
        expect(get_timezone("C:\\\\path\\to\\folder\\"))
    })

    test("5", () => {
        expect(get_timezone("C:\\\\path\\to\\file.ext"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'get_timezone', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}