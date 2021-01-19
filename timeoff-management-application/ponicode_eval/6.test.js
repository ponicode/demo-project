
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/logout_user.js
const logout_user = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/logout_user.js")

// @ponicode
describe("logout_user", () => {
    test("0", () => {
        expect(logout_user("C:\\\\path\\to\\folder\\"))
    })

    test("1", () => {
        expect(logout_user("C:\\\\path\\to\\file.ext"))
    })

    test("2", () => {
        expect(logout_user("."))
    })

    test("3", () => {
        expect(logout_user("./path/to/file"))
    })

    test("4", () => {
        expect(logout_user("/path/to/file"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/logout_user.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/logout_user.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}