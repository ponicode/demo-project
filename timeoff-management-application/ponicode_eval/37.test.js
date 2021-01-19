
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/index.js")
const prepare_user_for_session = index.__get__("prepare_user_for_session")

// @ponicode
describe("prepare_user_for_session", () => {
    test("0", () => {
        expect(prepare_user_for_session("path/to/file.ext"))
    })

    test("1", () => {
        expect(prepare_user_for_session("path/to/folder/"))
    })

    test("2", () => {
        expect(prepare_user_for_session("/path/to/file"))
    })

    test("3", () => {
        expect(prepare_user_for_session("./path/to/file"))
    })

    test("4", () => {
        expect(prepare_user_for_session("C:\\\\path\\to\\folder\\"))
    })

    test("5", () => {
        expect(prepare_user_for_session("."))
    })

    test("6", () => {
        expect(prepare_user_for_session("C:\\\\path\\to\\file.ext"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'prepare_user_for_session', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}