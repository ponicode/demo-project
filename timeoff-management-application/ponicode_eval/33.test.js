
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/user_info.js
const user_info = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/user_info.js")

// @ponicode
describe("user_info", () => {
    test("0", () => {
        expect(user_info("C:\\\\path\\to\\folder\\"))
    })

    test("1", () => {
        expect(user_info("path/to/folder/"))
    })

    test("2", () => {
        expect(user_info("C:\\\\path\\to\\file.ext"))
    })

    test("3", () => {
        expect(user_info("/path/to/file"))
    })

    test("4", () => {
        expect(user_info("path/to/file.ext"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/user_info.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/user_info.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}