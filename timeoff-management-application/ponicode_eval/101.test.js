
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js
const user_importer = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js")

// @ponicode
describe("user_importer.add_users_in_bulk", () => {
    test("0", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni_code", to_company_id: "user@ponicode" }))
    })

    test("1", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni&code", to_company_id: "User0@Ponicode.com" }))
    })

    test("2", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni-code", to_company_id: "user@ponicode.co.uk" }))
    })

    test("3", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni_code", to_company_id: "user@ponicode.com" }))
    })

    test("4", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "ponicode", to_company_id: "User0@Ponicode.com" }))
    })

    test("5", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni&code", to_company_id: "user1+user2@ponicode.com" }))
    })

    test("6", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni&code", to_company_id: "1user@ponicode.com" }))
    })

    test("7", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni&code", to_company_id: "user@ponicode.co.uk" }))
    })

    test("8", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni-code", to_company_id: "user@ponicode" }))
    })

    test("9", () => {
        expect(user_importer.add_users_in_bulk({ bulk_header: "poni_code", to_company_id: "User0@Ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'add_users_in_bulk', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}