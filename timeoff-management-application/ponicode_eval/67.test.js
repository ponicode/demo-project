
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180102-company-mode.js
const _20180102_company_mode = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180102-company-mode.js")

// @ponicode
describe("_20180102_company_mode.down", () => {
    test("0", () => {
        expect(_20180102_company_mode.down("\"{\"x\":[10,null,null,null]}\"", "1user@ponicode.com"))
    })

    test("1", () => {
        expect(_20180102_company_mode.down("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.com"))
    })

    test("2", () => {
        expect(_20180102_company_mode.down("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })

    test("3", () => {
        expect(_20180102_company_mode.down("\"{\"x\":5,\"y\":6}\"", "user@ponicode"))
    })

    test("4", () => {
        expect(_20180102_company_mode.down("\"{\"x\":5,\"y\":6}\"", "user1+user2@ponicode.com"))
    })

    test("5", () => {
        expect(_20180102_company_mode.down("\"\"2006-01-02T14:04:05.000Z\"\"", "User0@Ponicode.com"))
    })

    test("6", () => {
        expect(_20180102_company_mode.down("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.co.uk"))
    })

    test("7", () => {
        expect(_20180102_company_mode.down("\"\"2006-01-02T14:04:05.000Z\"\"", "ponicode.com"))
    })

    test("8", () => {
        expect(_20180102_company_mode.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user1+user2@ponicode.com"))
    })

    test("9", () => {
        expect(_20180102_company_mode.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.com"))
    })

    test("10", () => {
        expect(_20180102_company_mode.down("\"[3,\"false\",false]\"", "user1+user2@ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180102-company-mode.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'down', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180102-company-mode.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}