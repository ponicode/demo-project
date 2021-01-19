
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/getCompanyAdminByToken.js
const getCompanyAdminByToken = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/getCompanyAdminByToken.js")

// @ponicode
describe("getCompanyAdminByToken", () => {
    test("0", () => {
        expect(getCompanyAdminByToken({ token: "", model: "1user@ponicode.com" }))
    })

    test("1", () => {
        expect(getCompanyAdminByToken({ token: "elio@ponicode.com", model: "user@ponicode.com" }))
    })

    test("2", () => {
        expect(getCompanyAdminByToken({ token: null, model: "user@ponicode" }))
    })

    test("3", () => {
        expect(getCompanyAdminByToken({ token: "Dillenberg", model: "user1+user2@ponicode.com" }))
    })

    test("4", () => {
        expect(getCompanyAdminByToken({ token: 0, model: "user1+user2@ponicode.com" }))
    })

    test("5", () => {
        expect(getCompanyAdminByToken({ token: "", model: "user@ponicode" }))
    })

    test("6", () => {
        expect(getCompanyAdminByToken({ token: false, model: "user1+user2@ponicode.com" }))
    })

    test("7", () => {
        expect(getCompanyAdminByToken({ token: undefined, model: "user1+user2@ponicode.com" }))
    })

    test("8", () => {
        expect(getCompanyAdminByToken({ token: "elio@ponicode.com", model: "user@ponicode.co.uk" }))
    })

    test("9", () => {
        expect(getCompanyAdminByToken({ token: "", model: "user@ponicode.com" }))
    })

    test("10", () => {
        expect(getCompanyAdminByToken({ token: "elio@ponicode.com", model: "user.ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/getCompanyAdminByToken.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'<anonymous function reachable with 'require()'>', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/passport/getCompanyAdminByToken.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}