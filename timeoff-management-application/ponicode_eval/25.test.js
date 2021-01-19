
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js
const index = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js")

// @ponicode
describe("index.extract_user_error_message", () => {
    test("0", () => {
        expect(index.extract_user_error_message({ user_error_message: "ponicode.com" }))
    })

    test("1", () => {
        expect(index.extract_user_error_message({ user_error_message: "user@ponicode.co.uk" }))
    })

    test("2", () => {
        expect(index.extract_user_error_message({ user_error_message: "user.ponicode.com" }))
    })

    test("3", () => {
        expect(index.extract_user_error_message({ user_error_message: "1user@ponicode.com" }))
    })

    test("4", () => {
        expect(index.extract_user_error_message({ user_error_message: "user@ponicode" }))
    })

    test("5", () => {
        expect(index.extract_user_error_message({ user_error_message: "user@ponicode.com" }))
    })

    test("6", () => {
        expect(index.extract_user_error_message({ user_error_message: "User0@Ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'extract_user_error_message', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}