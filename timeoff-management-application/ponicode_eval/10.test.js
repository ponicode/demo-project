
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js")
const ensure_email_is_not_used_elsewhere = index.__get__("ensure_email_is_not_used_elsewhere")

// @ponicode
describe("ensure_email_is_not_used_elsewhere", () => {
    test("0", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "User0@Ponicode.com" }, employee: { email: "user@ponicode" } }))
    })

    test("1", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "user.ponicode.com" }, employee: { email: "1user@ponicode.com" } }))
    })

    test("2", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "ponicode.com" }, employee: { email: "1user@ponicode.com" } }))
    })

    test("3", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "ponicode.com" }, employee: { email: "user@ponicode.com" } }))
    })

    test("4", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "user@ponicode" }, employee: { email: "user@ponicode" } }))
    })

    test("5", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "user@ponicode" }, employee: { email: "user@ponicode.com" } }))
    })

    test("6", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "1user@ponicode.com" }, employee: { email: "user.ponicode.com" } }))
    })

    test("7", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "user1+user2@ponicode.com" }, employee: { email: "user@ponicode.co.uk" } }))
    })

    test("8", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "ponicode.com" }, employee: { email: "user.ponicode.com" } }))
    })

    test("9", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "1user@ponicode.com" }, employee: { email: "user@ponicode" } }))
    })

    test("10", () => {
        expect(ensure_email_is_not_used_elsewhere({ new_user_attributes: { email: "User0@Ponicode.com" }, employee: { email: "1user@ponicode.com" } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'ensure_email_is_not_used_elsewhere', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}