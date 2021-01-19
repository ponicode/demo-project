
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180103-sort-order-for-leave-types.js
const _20180103_sort_order_for_leave_types = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180103-sort-order-for-leave-types.js")

// @ponicode
describe("_20180103_sort_order_for_leave_types.down", () => {
    test("0", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"{\"x\":5,\"y\":6}\"", "User0@Ponicode.com"))
    })

    test("1", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"{\"x\":[10,null,null,null]}\"", "user1+user2@ponicode.com"))
    })

    test("2", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })

    test("3", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"[3,\"false\",false]\"", "ponicode.com"))
    })

    test("4", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"[3,\"false\",false]\"", "User0@Ponicode.com"))
    })

    test("5", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"{\"x\":[10,null,null,null]}\"", "user@ponicode"))
    })

    test("6", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user.ponicode.com"))
    })

    test("7", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"{\"x\":[10,null,null,null]}\"", "user.ponicode.com"))
    })

    test("8", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"{\"x\":5,\"y\":6}\"", "user1+user2@ponicode.com"))
    })

    test("9", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"[3,\"false\",false]\"", "user@ponicode"))
    })

    test("10", () => {
        expect(_20180103_sort_order_for_leave_types.down("\"\"2006-01-02T14:04:05.000Z\"\"", "User0@Ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180103-sort-order-for-leave-types.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'down', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180103-sort-order-for-leave-types.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}