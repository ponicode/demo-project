
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180427-add-is_accrued_allowance-to-department.js
const _20180427_add_is_accrued_allowance_to_department = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180427-add-is_accrued_allowance-to-department.js")

// @ponicode
describe("_20180427_add_is_accrued_allowance_to_department.down", () => {
    test("0", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user1+user2@ponicode.com"))
    })

    test("1", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.com"))
    })

    test("2", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"{\"x\":5,\"y\":6}\"", "user1+user2@ponicode.com"))
    })

    test("3", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"[3,\"false\",false]\"", "user@ponicode.com"))
    })

    test("4", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"{\"x\":[10,null,null,null]}\"", "ponicode.com"))
    })

    test("5", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"{\"x\":5,\"y\":6}\"", "1user@ponicode.com"))
    })

    test("6", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"\"2006-01-02T14:04:05.000Z\"\"", "ponicode.com"))
    })

    test("7", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"[3,\"false\",false]\"", "user@ponicode.co.uk"))
    })

    test("8", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })

    test("9", () => {
        expect(_20180427_add_is_accrued_allowance_to_department.down("\"{\"x\":[10,null,null,null]}\"", "1user@ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180427-add-is_accrued_allowance-to-department.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'down', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180427-add-is_accrued_allowance-to-department.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}