
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170329060832-rename_allowence_to_allowance.js
const _20170329060832_rename_allowence_to_allowance = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170329060832-rename_allowence_to_allowance.js")

// @ponicode
describe("_20170329060832_rename_allowence_to_allowance.down", () => {
    test("0", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"[3,\"false\",false]\"", "user@ponicode.co.uk"))
    })

    test("1", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.co.uk"))
    })

    test("2", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"{\"x\":[10,null,null,null]}\"", "user1+user2@ponicode.com"))
    })

    test("3", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"\"2006-01-02T14:04:05.000Z\"\"", "User0@Ponicode.com"))
    })

    test("4", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"[3,\"false\",false]\"", "1user@ponicode.com"))
    })

    test("5", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"{\"x\":5,\"y\":6}\"", "user@ponicode.com"))
    })

    test("6", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"[3,\"false\",false]\"", "ponicode.com"))
    })

    test("7", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"{\"x\":5,\"y\":6}\"", "user1+user2@ponicode.com"))
    })

    test("8", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"\"2006-01-02T14:04:05.000Z\"\"", "ponicode.com"))
    })

    test("9", () => {
        expect(_20170329060832_rename_allowence_to_allowance.down("\"{\"x\":[10,null,null,null]}\"", "user@ponicode"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170329060832-rename_allowence_to_allowance.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'down', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170329060832-rename_allowence_to_allowance.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}