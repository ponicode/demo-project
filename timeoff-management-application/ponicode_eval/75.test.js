
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170103144054-add_default_date_format.js
const _20170103144054_add_default_date_format = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170103144054-add_default_date_format.js")

// @ponicode
describe("_20170103144054_add_default_date_format.up", () => {
    test("0", () => {
        expect(_20170103144054_add_default_date_format.up("\"\"2006-01-02T14:04:05.000Z\"\"", { STRING: "foo bar" }))
    })

    test("1", () => {
        expect(_20170103144054_add_default_date_format.up("\"{\"x\":5,\"y\":6}\"", { STRING: "Foo bar" }))
    })

    test("2", () => {
        expect(_20170103144054_add_default_date_format.up("\"{\"x\":5,\"y\":6}\"", { STRING: "PONICODE" }))
    })

    test("3", () => {
        expect(_20170103144054_add_default_date_format.up("\"{\"x\":5,\"y\":6}\"", { STRING: "foo bar" }))
    })

    test("4", () => {
        expect(_20170103144054_add_default_date_format.up("\"{\"x\":[10,null,null,null]}\"", { STRING: "Welcome to Ponicode!" }))
    })

    test("5", () => {
        expect(_20170103144054_add_default_date_format.up("\"\"2006-01-02T14:04:05.000Z\"\"", { STRING: "Hello, world!" }))
    })

    test("6", () => {
        expect(_20170103144054_add_default_date_format.up("\"{\"x\":5,\"y\":6}\"", { STRING: "Welcome to Ponicode!" }))
    })

    test("7", () => {
        expect(_20170103144054_add_default_date_format.up("\"{\"x\":5,\"y\":6}\"", { STRING: "H3ll0! P0n1c0d3 iz g00d" }))
    })

    test("8", () => {
        expect(_20170103144054_add_default_date_format.up("\"\"2006-01-02T14:04:05.000Z\"\"", { STRING: "PONICODE" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170103144054-add_default_date_format.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20170103144054-add_default_date_format.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}