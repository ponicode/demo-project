
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/check_elements.js
const check_elements = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/check_elements.js")

// @ponicode
describe("check_elements", () => {
    test("0", () => {
        expect(check_elements("."))
    })

    test("1", () => {
        expect(check_elements("path/to/folder/"))
    })

    test("2", () => {
        expect(check_elements("C:\\\\path\\to\\folder\\"))
    })

    test("3", () => {
        expect(check_elements("C:\\\\path\\to\\file.ext"))
    })

    test("4", () => {
        expect(check_elements("./path/to/file"))
    })

    test("5", () => {
        expect(check_elements("path/to/file.ext"))
    })

    test("6", () => {
        expect(check_elements("/path/to/file"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/check_elements.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/check_elements.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}