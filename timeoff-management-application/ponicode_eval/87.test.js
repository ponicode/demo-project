
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user_feed.js
const user_feed = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user_feed.js")

// @ponicode
describe("user_feed", () => {
    test("0", () => {
        expect(user_feed("cn", { STRING: "Foo bar" }))
    })

    test("1", () => {
        expect(user_feed("fr", { STRING: "PONICODE" }))
    })

    test("2", () => {
        expect(user_feed("it", { STRING: "Hello, world!" }))
    })

    test("3", () => {
        expect(user_feed("ar", { STRING: "H3ll0! P0n1c0d3 iz g00d" }))
    })

    test("4", () => {
        expect(user_feed("fr", { STRING: "H3ll0! P0n1c0d3 iz g00d" }))
    })

    test("5", () => {
        expect(user_feed("cn", { STRING: "Welcome to Ponicode!" }))
    })

    test("6", () => {
        expect(user_feed("fr", { STRING: "Welcome to Ponicode!" }))
    })

    test("7", () => {
        expect(user_feed("ar", { STRING: "PONICODE" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user_feed.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user_feed.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}