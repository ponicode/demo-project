
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/login_with_user.js
const login_with_user = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/login_with_user.js")

// @ponicode
describe("login_with_user", () => {
    test("0", () => {
        expect(login_with_user("path/to/folder/"))
    })

    test("1", () => {
        expect(login_with_user("."))
    })

    test("2", () => {
        expect(login_with_user("./path/to/file"))
    })

    test("3", () => {
        expect(login_with_user("path/to/file.ext"))
    })

    test("4", () => {
        expect(login_with_user("C:\\\\path\\to\\folder\\"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/login_with_user.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/login_with_user.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}