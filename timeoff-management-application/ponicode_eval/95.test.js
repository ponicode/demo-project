
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180103-sort-order-for-leave-types.js
const _20180103_sort_order_for_leave_types = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180103-sort-order-for-leave-types.js")

// @ponicode
describe("_20180103_sort_order_for_leave_types.up", () => {
    test("0", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.com"))
    })

    test("1", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"{\"x\":[10,null,null,null]}\"", "user1+user2@ponicode.com"))
    })

    test("2", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"{\"x\":[10,null,null,null]}\"", "ponicode.com"))
    })

    test("3", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"{\"x\":5,\"y\":6}\"", "user@ponicode.com"))
    })

    test("4", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"{\"x\":[10,null,null,null]}\"", "user.ponicode.com"))
    })

    test("5", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode"))
    })

    test("6", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"[3,\"false\",false]\"", "user.ponicode.com"))
    })

    test("7", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.com"))
    })

    test("8", () => {
        expect(_20180103_sort_order_for_leave_types.up("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180103-sort-order-for-leave-types.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20180103-sort-order-for-leave-types.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}