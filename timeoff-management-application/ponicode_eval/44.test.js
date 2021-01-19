
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js
const rewire = require("rewire")
const helpers = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js")
const get_current_format = helpers.__get__("get_current_format")

// @ponicode
describe("get_current_format", () => {
    test("0", () => {
        expect(get_current_format("path/to/folder/"))
    })

    test("1", () => {
        expect(get_current_format("./path/to/file"))
    })

    test("2", () => {
        expect(get_current_format("path/to/file.ext"))
    })

    test("3", () => {
        expect(get_current_format("C:\\\\path\\to\\file.ext"))
    })

    test("4", () => {
        expect(get_current_format("."))
    })

    test("5", () => {
        expect(get_current_format("C:\\\\path\\to\\folder\\"))
    })

    test("6", () => {
        expect(get_current_format("/path/to/file"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'get_current_format', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}