
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/register_new_user.js
const register_new_user = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/register_new_user.js")

// @ponicode
describe("register_new_user", () => {
    test("0", () => {
        expect(register_new_user("./path/to/file"))
    })

    test("1", () => {
        expect(register_new_user("/path/to/file"))
    })

    test("2", () => {
        expect(register_new_user("C:\\\\path\\to\\file.ext"))
    })

    test("3", () => {
        expect(register_new_user("path/to/file.ext"))
    })

    test("4", () => {
        expect(register_new_user("."))
    })

    test("5", () => {
        expect(register_new_user("C:\\\\path\\to\\folder\\"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/register_new_user.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/register_new_user.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}