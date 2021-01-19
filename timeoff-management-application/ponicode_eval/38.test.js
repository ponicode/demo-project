
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/index.js")
const authenticate_user = index.__get__("authenticate_user")

// @ponicode
describe("authenticate_user", () => {
    test("0", () => {
        expect(authenticate_user({ user: { email: "user@ponicode", company: { ldap_auth_enabled: "user.ponicode.com" } } }))
    })

    test("1", () => {
        expect(authenticate_user({ user: { email: "ponicode.com", company: { ldap_auth_enabled: "User0@Ponicode.com" } } }))
    })

    test("2", () => {
        expect(authenticate_user({ user: { email: "1user@ponicode.com", company: { ldap_auth_enabled: "user1+user2@ponicode.com" } } }))
    })

    test("3", () => {
        expect(authenticate_user({ user: { email: "user1+user2@ponicode.com", company: { ldap_auth_enabled: "User0@Ponicode.com" } } }))
    })

    test("4", () => {
        expect(authenticate_user({ user: { email: "user@ponicode.com", company: { ldap_auth_enabled: "user.ponicode.com" } } }))
    })

    test("5", () => {
        expect(authenticate_user({ user: { email: "User0@Ponicode.com", company: { ldap_auth_enabled: "1user@ponicode.com" } } }))
    })

    test("6", () => {
        expect(authenticate_user({ user: { email: "User0@Ponicode.com", company: { ldap_auth_enabled: "user@ponicode.co.uk" } } }))
    })

    test("7", () => {
        expect(authenticate_user({ user: { email: "ponicode.com", company: { ldap_auth_enabled: "user@ponicode.com" } } }))
    })

    test("8", () => {
        expect(authenticate_user({ user: { email: "user.ponicode.com", company: { ldap_auth_enabled: "1user@ponicode.com" } } }))
    })

    test("9", () => {
        expect(authenticate_user({ user: { email: "user@ponicode.co.uk", company: { ldap_auth_enabled: "user@ponicode.com" } } }))
    })

    test("10", () => {
        expect(authenticate_user({ user: { email: "user@ponicode.com", company: { ldap_auth_enabled: "user@ponicode.com" } } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'authenticate_user', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}