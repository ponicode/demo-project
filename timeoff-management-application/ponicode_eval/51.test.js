
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171219-allowance-adjustment-per-year.js
const _20171219_allowance_adjustment_per_year = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171219-allowance-adjustment-per-year.js")

// @ponicode
describe("_20171219_allowance_adjustment_per_year.up", () => {
    test("0", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.com"))
    })

    test("1", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode"))
    })

    test("2", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })

    test("3", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"[3,\"false\",false]\"", "user@ponicode"))
    })

    test("4", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"{\"x\":[10,null,null,null]}\"", "user1+user2@ponicode.com"))
    })

    test("5", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"[3,\"false\",false]\"", "1user@ponicode.com"))
    })

    test("6", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"[3,\"false\",false]\"", "user.ponicode.com"))
    })

    test("7", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"[3,\"false\",false]\"", "user@ponicode.com"))
    })

    test("8", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.co.uk"))
    })

    test("9", () => {
        expect(_20171219_allowance_adjustment_per_year.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user1+user2@ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171219-allowance-adjustment-per-year.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171219-allowance-adjustment-per-year.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}