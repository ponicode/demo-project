
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/reports.js
const rewire = require("rewire")
const reports = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/reports.js")
const render_allowancebytime_as_csv = reports.__get__("render_allowancebytime_as_csv")

// @ponicode
describe("render_allowancebytime_as_csv", () => {
    test("0", () => {
        expect(render_allowancebytime_as_csv("."))
    })

    test("1", () => {
        expect(render_allowancebytime_as_csv("path/to/folder/"))
    })

    test("2", () => {
        expect(render_allowancebytime_as_csv("C:\\\\path\\to\\folder\\"))
    })

    test("3", () => {
        expect(render_allowancebytime_as_csv("/path/to/file"))
    })

    test("4", () => {
        expect(render_allowancebytime_as_csv("C:\\\\path\\to\\file.ext"))
    })

    test("5", () => {
        expect(render_allowancebytime_as_csv("path/to/file.ext"))
    })

    test("6", () => {
        expect(render_allowancebytime_as_csv("./path/to/file"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/reports.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'render_allowancebytime_as_csv', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/reports.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}