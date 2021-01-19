
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js
const index = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js")

// @ponicode
describe("index.throw_user_error", () => {
    test("0", () => {
        expect(index.throw_user_error({ system_error: true, user_error: "ponicode.com" }))
    })

    test("1", () => {
        expect(index.throw_user_error({ system_error: false, user_error: "User0@Ponicode.com" }))
    })

    test("2", () => {
        expect(index.throw_user_error({ system_error: false, user_error: "user@ponicode" }))
    })

    test("3", () => {
        expect(index.throw_user_error({ system_error: true, user_error: "user.ponicode.com" }))
    })

    test("4", () => {
        expect(index.throw_user_error({ system_error: true, user_error: "user@ponicode.com" }))
    })

    test("5", () => {
        expect(index.throw_user_error({ system_error: true, user_error: "user@ponicode" }))
    })

    test("6", () => {
        expect(index.throw_user_error({ system_error: false, user_error: "user.ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'throw_user_error', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}