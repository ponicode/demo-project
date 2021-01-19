
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/audit.js
const audit = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/audit.js")

// @ponicode
describe("audit", () => {
    test("0", () => {
        expect(audit("de", { STRING: "foo bar", INTEGER: "150.151.152.153" }))
    })

    test("1", () => {
        expect(audit("de", { STRING: "Foo bar", INTEGER: "150.151.152.153" }))
    })

    test("2", () => {
        expect(audit("it", { STRING: "H3ll0! P0n1c0d3 iz g00d", INTEGER: "150.151.152.153" }))
    })

    test("3", () => {
        expect(audit("ru", { STRING: "Welcome to Ponicode!", INTEGER: "1.2.3.4" }))
    })

    test("4", () => {
        expect(audit("cn", { STRING: "H3ll0! P0n1c0d3 iz g00d", INTEGER: "192.168.99.101" }))
    })

    test("5", () => {
        expect(audit("ar", { STRING: "PONICODE", INTEGER: "1.2.3.4" }))
    })

    test("6", () => {
        expect(audit("cn", { STRING: "Hello, world!", INTEGER: "150.151.152.153" }))
    })

    test("7", () => {
        expect(audit("ru", { STRING: "PONICODE", INTEGER: "1.2.3.4" }))
    })

    test("8", () => {
        expect(audit("de", { STRING: "Hello, world!", INTEGER: "1.2.3.4" }))
    })

    test("9", () => {
        expect(audit("it", { STRING: "Welcome to Ponicode!", INTEGER: "150.151.152.153" }))
    })

    test("10", () => {
        expect(audit("de", { STRING: "PONICODE", INTEGER: "1.2.3.4" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/audit.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/audit.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}