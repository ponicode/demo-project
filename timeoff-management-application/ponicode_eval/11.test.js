
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js")
const ensure_we_are_not_removing_last_admin = index.__get__("ensure_we_are_not_removing_last_admin")

// @ponicode
describe("ensure_we_are_not_removing_last_admin", () => {
    test("0", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: null }, employee: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", admin: "user.ponicode.com", companyId: "user1+user2@ponicode.com" } }))
    })

    test("1", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: "user@ponicode" }, employee: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", admin: "user1+user2@ponicode.com", companyId: "user@ponicode" } }))
    })

    test("2", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: false }, employee: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", admin: "User0@Ponicode.com", companyId: "ponicode.com" } }))
    })

    test("3", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: "" }, employee: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", admin: "user@ponicode.co.uk", companyId: "user@ponicode.co.uk" } }))
    })

    test("4", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: null }, employee: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", admin: "user1+user2@ponicode.com", companyId: "user@ponicode.co.uk" } }))
    })

    test("5", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: "user@ponicode" }, employee: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", admin: "user@ponicode", companyId: "user@ponicode.com" } }))
    })

    test("6", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: 0 }, employee: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", admin: "User0@Ponicode.com", companyId: "user@ponicode.com" } }))
    })

    test("7", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: "user@ponicode.co.uk" }, employee: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", admin: "user@ponicode.com", companyId: "user.ponicode.com" } }))
    })

    test("8", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: undefined }, employee: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", admin: "user1+user2@ponicode.com", companyId: "user@ponicode" } }))
    })

    test("9", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: false }, employee: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", admin: "ponicode.com", companyId: "user@ponicode.co.uk" } }))
    })

    test("10", () => {
        expect(ensure_we_are_not_removing_last_admin({ new_user_attributes: { admin: "1user@ponicode.com" }, employee: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", admin: "user@ponicode.co.uk", companyId: "User0@Ponicode.com" } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'ensure_we_are_not_removing_last_admin', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}