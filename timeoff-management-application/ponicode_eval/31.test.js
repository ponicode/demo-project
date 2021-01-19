
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170530-add_auto_approve_flag_to_user.js
const _20170530_add_auto_approve_flag_to_user = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170530-add_auto_approve_flag_to_user.js")

// @ponicode
describe("_20170530_add_auto_approve_flag_to_user.up", () => {
    test("0", () => {
        expect(_20170530_add_auto_approve_flag_to_user.up("\"[3,\"false\",false]\"", "user.ponicode.com"))
    })

    test("1", () => {
        expect(_20170530_add_auto_approve_flag_to_user.up("\"{\"x\":5,\"y\":6}\"", "user1+user2@ponicode.com"))
    })

    test("2", () => {
        expect(_20170530_add_auto_approve_flag_to_user.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode"))
    })

    test("3", () => {
        expect(_20170530_add_auto_approve_flag_to_user.up("\"[3,\"false\",false]\"", "User0@Ponicode.com"))
    })

    test("4", () => {
        expect(_20170530_add_auto_approve_flag_to_user.up("\"{\"x\":[10,null,null,null]}\"", "user1+user2@ponicode.com"))
    })

    test("5", () => {
        expect(_20170530_add_auto_approve_flag_to_user.up("\"[3,\"false\",false]\"", "1user@ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170530-add_auto_approve_flag_to_user.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170530-add_auto_approve_flag_to_user.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}