
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/submit_form.js
const submit_form = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/submit_form.js")

// @ponicode
describe("submit_form", () => {
    test("0", () => {
        expect(submit_form("C:\\\\path\\to\\folder\\"))
    })

    test("1", () => {
        expect(submit_form("./path/to/file"))
    })

    test("2", () => {
        expect(submit_form("C:\\\\path\\to\\file.ext"))
    })

    test("3", () => {
        expect(submit_form("path/to/file.ext"))
    })

    test("4", () => {
        expect(submit_form("path/to/folder/"))
    })

    test("5", () => {
        expect(submit_form("/path/to/file"))
    })

    test("6", () => {
        expect(submit_form("."))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/submit_form.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/submit_form.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}