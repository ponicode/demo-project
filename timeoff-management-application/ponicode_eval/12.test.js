
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js")
const promise_user_list_data_for_rendering = index.__get__("promise_user_list_data_for_rendering")

// @ponicode
describe("promise_user_list_data_for_rendering", () => {
    test("0", () => {
        expect(promise_user_list_data_for_rendering("path/to/file.ext"))
    })

    test("1", () => {
        expect(promise_user_list_data_for_rendering("path/to/folder/"))
    })

    test("2", () => {
        expect(promise_user_list_data_for_rendering("/path/to/file"))
    })

    test("3", () => {
        expect(promise_user_list_data_for_rendering("C:\\\\path\\to\\file.ext"))
    })

    test("4", () => {
        expect(promise_user_list_data_for_rendering("C:\\\\path\\to\\folder\\"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promise_user_list_data_for_rendering', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}