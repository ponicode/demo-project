
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js
const rewire = require("rewire")
const helpers = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js")
const get_property_from_options = helpers.__get__("get_property_from_options")

// @ponicode
describe("get_property_from_options", () => {
    test("0", () => {
        expect(get_property_from_options({ data: { root: ["path/to/file.ext", ".", "C:\\\\path\\to\\file.ext", ".", "C:\\\\path\\to\\folder\\", "C:\\\\path\\to\\folder\\", "./path/to/file", "C:\\\\path\\to\\file.ext", ".", "path/to/file.ext"] } }, "string"))
    })

    test("1", () => {
        expect(get_property_from_options({ data: { root: [] } }, "object"))
    })

    test("2", () => {
        expect(get_property_from_options({ data: { root: [".", "C:\\\\path\\to\\file.ext", "./path/to/file", "C:\\\\path\\to\\folder\\", "C:\\\\path\\to\\file.ext", "path/to/file.ext", "/path/to/file", "C:\\\\path\\to\\folder\\", "/path/to/file", "."] } }, "string"))
    })

    test("3", () => {
        expect(get_property_from_options({ data: { root: [] } }, "string"))
    })

    test("4", () => {
        expect(get_property_from_options({ data: { root: ["C:\\\\path\\to\\folder\\", "/path/to/file", "/path/to/file"] } }, "string"))
    })

    test("5", () => {
        expect(get_property_from_options({ data: { root: ["path/to/folder/", "path/to/folder/", "/path/to/file"] } }, "number"))
    })

    test("6", () => {
        expect(get_property_from_options({ data: { root: [] } }, "array"))
    })

    test("7", () => {
        expect(get_property_from_options({ data: { root: ["C:\\\\path\\to\\folder\\", ".", "path/to/file.ext"] } }, "number"))
    })

    test("8", () => {
        expect(get_property_from_options({ data: { root: ["./path/to/file", "/path/to/file", "./path/to/file", "C:\\\\path\\to\\file.ext", "C:\\\\path\\to\\folder\\", "path/to/folder/", "./path/to/file", "./path/to/file", "C:\\\\path\\to\\file.ext", "/path/to/file"] } }, "number"))
    })

    test("9", () => {
        expect(get_property_from_options({ data: { root: ["./path/to/file", "/path/to/file", ".", "./path/to/file", "path/to/folder/", "C:\\\\path\\to\\file.ext", "path/to/file.ext", "C:\\\\path\\to\\folder\\", "./path/to/file", "."] } }, "array"))
    })

    test("10", () => {
        expect(get_property_from_options({ data: { root: ["./path/to/file", "C:\\\\path\\to\\folder\\", "/path/to/file"] } }, "string"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'get_property_from_options', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/view/helpers.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}