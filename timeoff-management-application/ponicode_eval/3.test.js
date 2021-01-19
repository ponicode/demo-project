
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171220-drop-adjustment-column-from-user.js
const _20171220_drop_adjustment_column_from_user = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171220-drop-adjustment-column-from-user.js")

// @ponicode
describe("_20171220_drop_adjustment_column_from_user.up", () => {
    test("0", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.com"))
    })

    test("1", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"[3,\"false\",false]\"", "User0@Ponicode.com"))
    })

    test("2", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user1+user2@ponicode.com"))
    })

    test("3", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.co.uk"))
    })

    test("4", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"\"2006-01-02T14:04:05.000Z\"\"", "1user@ponicode.com"))
    })

    test("5", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"[3,\"false\",false]\"", "user@ponicode"))
    })

    test("6", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })

    test("7", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"[3,\"false\",false]\"", "user.ponicode.com"))
    })

    test("8", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"{\"x\":5,\"y\":6}\"", "ponicode.com"))
    })

    test("9", () => {
        expect(_20171220_drop_adjustment_column_from_user.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171220-drop-adjustment-column-from-user.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171220-drop-adjustment-column-from-user.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}