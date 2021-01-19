
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/comment.js
const comment = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/comment.js")

// @ponicode
describe("comment", () => {
    test("0", () => {
        expect(comment("ar", { STRING: "foo bar", INTEGER: "150.151.152.153" }))
    })

    test("1", () => {
        expect(comment("en", { STRING: "PONICODE", INTEGER: "1.2.3.4" }))
    })

    test("2", () => {
        expect(comment("de", { STRING: "Foo bar", INTEGER: "192.168.99.101" }))
    })

    test("3", () => {
        expect(comment("en", { STRING: "Hello, world!", INTEGER: "150.151.152.153" }))
    })

    test("4", () => {
        expect(comment("cn", { STRING: "H3ll0! P0n1c0d3 iz g00d", INTEGER: "1.2.3.4" }))
    })

    test("5", () => {
        expect(comment("cn", { STRING: "Hello, world!", INTEGER: "1.2.3.4" }))
    })

    test("6", () => {
        expect(comment("it", { STRING: "foo bar", INTEGER: "192.168.99.101" }))
    })

    test("7", () => {
        expect(comment("ar", { STRING: "Foo bar", INTEGER: "1.2.3.4" }))
    })

    test("8", () => {
        expect(comment("en", { STRING: "H3ll0! P0n1c0d3 iz g00d", INTEGER: "192.168.99.101" }))
    })

    test("9", () => {
        expect(comment("ar", { STRING: "H3ll0! P0n1c0d3 iz g00d", INTEGER: "192.168.99.101" }))
    })

    test("10", () => {
        expect(comment("ru", { STRING: "PONICODE", INTEGER: "192.168.99.101" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/comment.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/comment.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}