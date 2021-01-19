
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/leave_type.js
const leave_type = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/leave_type.js")

// @ponicode
describe("leave_type", () => {
    test("0", () => {
        expect(leave_type("cn", { INTEGER: "150.151.152.153", STRING: "H3ll0! P0n1c0d3 iz g00d", BOOLEAN: "object" }))
    })

    test("1", () => {
        expect(leave_type("fr", { INTEGER: "192.168.99.101", STRING: "Foo bar", BOOLEAN: "string" }))
    })

    test("2", () => {
        expect(leave_type("en", { INTEGER: "150.151.152.153", STRING: "Hello, world!", BOOLEAN: "object" }))
    })

    test("3", () => {
        expect(leave_type("fr", { INTEGER: "192.168.99.101", STRING: "foo bar", BOOLEAN: "array" }))
    })

    test("4", () => {
        expect(leave_type("cn", { INTEGER: "150.151.152.153", STRING: "H3ll0! P0n1c0d3 iz g00d", BOOLEAN: "number" }))
    })

    test("5", () => {
        expect(leave_type("ar", { INTEGER: "192.168.99.101", STRING: "PONICODE", BOOLEAN: "array" }))
    })

    test("6", () => {
        expect(leave_type("it", { INTEGER: "192.168.99.101", STRING: "H3ll0! P0n1c0d3 iz g00d", BOOLEAN: "array" }))
    })

    test("7", () => {
        expect(leave_type("en", { INTEGER: "1.2.3.4", STRING: "H3ll0! P0n1c0d3 iz g00d", BOOLEAN: "string" }))
    })

    test("8", () => {
        expect(leave_type("en", { INTEGER: "150.151.152.153", STRING: "Welcome to Ponicode!", BOOLEAN: "array" }))
    })

    test("9", () => {
        expect(leave_type("ru", { INTEGER: "192.168.99.101", STRING: "H3ll0! P0n1c0d3 iz g00d", BOOLEAN: "array" }))
    })

    test("10", () => {
        expect(leave_type("de", { INTEGER: "192.168.99.101", STRING: "Foo bar", BOOLEAN: "number" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/leave_type.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/leave_type.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}