
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js")
const ensure_user_was_not_useed_elsewhere_while_being_inactive = index.__get__("ensure_user_was_not_useed_elsewhere_while_being_inactive")

// @ponicode
describe("ensure_user_was_not_useed_elsewhere_while_being_inactive", () => {
    test("0", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "1user@ponicode.com", end_date: undefined }, employee: { end_date: "20200101", companyId: "user1+user2@ponicode.com" } }))
    })

    test("1", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "ponicode.com", end_date: NaN }, employee: { end_date: "20200101", companyId: "user@ponicode.com" } }))
    })

    test("2", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "user@ponicode.com", end_date: "01/01/2020" }, employee: { end_date: "1-1-2020", companyId: "user@ponicode.com" } }))
    })

    test("3", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "1user@ponicode.com", end_date: undefined }, employee: { end_date: "01/01/2020", companyId: "user1+user2@ponicode.com" } }))
    })

    test("4", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "user1+user2@ponicode.com", end_date: 0 }, employee: { end_date: "1-1-2020", companyId: "user@ponicode" } }))
    })

    test("5", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "user@ponicode.com", end_date: "" }, employee: { end_date: "20200101", companyId: "user1+user2@ponicode.com" } }))
    })

    test("6", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "user@ponicode", end_date: "" }, employee: { end_date: "20200101", companyId: "User0@Ponicode.com" } }))
    })

    test("7", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "user1+user2@ponicode.com", end_date: NaN }, employee: { end_date: "20200101", companyId: "ponicode.com" } }))
    })

    test("8", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "ponicode.com", end_date: "" }, employee: { end_date: "01/13/2020", companyId: "ponicode.com" } }))
    })

    test("9", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "user@ponicode.co.uk", end_date: false }, employee: { end_date: "20200101", companyId: "user.ponicode.com" } }))
    })

    test("10", () => {
        expect(ensure_user_was_not_useed_elsewhere_while_being_inactive({ new_user_attributes: { email: "user@ponicode.com", end_date: 0 }, employee: { end_date: "1-1-2020", companyId: "user@ponicode.co.uk" } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'ensure_user_was_not_useed_elsewhere_while_being_inactive', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}