
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170103144054-add_default_date_format.js
const _20170103144054_add_default_date_format = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170103144054-add_default_date_format.js")

// @ponicode
describe("_20170103144054_add_default_date_format.down", () => {
    test("0", () => {
        expect(_20170103144054_add_default_date_format.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.com"))
    })

    test("1", () => {
        expect(_20170103144054_add_default_date_format.down("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })

    test("2", () => {
        expect(_20170103144054_add_default_date_format.down("\"[3,\"false\",false]\"", "User0@Ponicode.com"))
    })

    test("3", () => {
        expect(_20170103144054_add_default_date_format.down("\"{\"x\":5,\"y\":6}\"", "ponicode.com"))
    })

    test("4", () => {
        expect(_20170103144054_add_default_date_format.down("\"{\"x\":5,\"y\":6}\"", "user@ponicode.com"))
    })

    test("5", () => {
        expect(_20170103144054_add_default_date_format.down("\"[3,\"false\",false]\"", "ponicode.com"))
    })

    test("6", () => {
        expect(_20170103144054_add_default_date_format.down("\"[3,\"false\",false]\"", "user.ponicode.com"))
    })

    test("7", () => {
        expect(_20170103144054_add_default_date_format.down("\"\"2006-01-02T14:04:05.000Z\"\"", "ponicode.com"))
    })

    test("8", () => {
        expect(_20170103144054_add_default_date_format.down("\"[3,\"false\",false]\"", "user@ponicode"))
    })

    test("9", () => {
        expect(_20170103144054_add_default_date_format.down("\"{\"x\":[10,null,null,null]}\"", "user.ponicode.com"))
    })

    test("10", () => {
        expect(_20170103144054_add_default_date_format.down("\"{\"x\":5,\"y\":6}\"", "user.ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170103144054-add_default_date_format.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'down', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170103144054-add_default_date_format.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}