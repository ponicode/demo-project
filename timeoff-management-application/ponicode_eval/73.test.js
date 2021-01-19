
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171218-company-wide-message.js
const _20171218_company_wide_message = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171218-company-wide-message.js")

// @ponicode
describe("_20171218_company_wide_message.up", () => {
    test("0", () => {
        expect(_20171218_company_wide_message.up("\"{\"x\":5,\"y\":6}\"", "ponicode.com"))
    })

    test("1", () => {
        expect(_20171218_company_wide_message.up("\"{\"x\":5,\"y\":6}\"", "user.ponicode.com"))
    })

    test("2", () => {
        expect(_20171218_company_wide_message.up("\"{\"x\":5,\"y\":6}\"", "user@ponicode.co.uk"))
    })

    test("3", () => {
        expect(_20171218_company_wide_message.up("\"[3,\"false\",false]\"", "user.ponicode.com"))
    })

    test("4", () => {
        expect(_20171218_company_wide_message.up("\"[3,\"false\",false]\"", "user@ponicode.co.uk"))
    })

    test("5", () => {
        expect(_20171218_company_wide_message.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode"))
    })

    test("6", () => {
        expect(_20171218_company_wide_message.up("\"{\"x\":5,\"y\":6}\"", "User0@Ponicode.com"))
    })

    test("7", () => {
        expect(_20171218_company_wide_message.up("\"[3,\"false\",false]\"", "User0@Ponicode.com"))
    })

    test("8", () => {
        expect(_20171218_company_wide_message.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.co.uk"))
    })

    test("9", () => {
        expect(_20171218_company_wide_message.up("\"{\"x\":5,\"y\":6}\"", "1user@ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171218-company-wide-message.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171218-company-wide-message.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}