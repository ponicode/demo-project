
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js
const user_importer = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js")

// @ponicode
describe("user_importer.validate_email_to_be_free", () => {
    test("0", () => {
        expect(user_importer.validate_email_to_be_free({ email: "user@ponicode.com" }))
    })

    test("1", () => {
        expect(user_importer.validate_email_to_be_free({ email: "user@ponicode.co.uk" }))
    })

    test("2", () => {
        expect(user_importer.validate_email_to_be_free({ email: "User0@Ponicode.com" }))
    })

    test("3", () => {
        expect(user_importer.validate_email_to_be_free({ email: "user.ponicode.com" }))
    })

    test("4", () => {
        expect(user_importer.validate_email_to_be_free({ email: "user@ponicode" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'validate_email_to_be_free', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}