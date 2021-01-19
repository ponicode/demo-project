
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/calendar.js
const rewire = require("rewire")
const calendar = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/calendar.js")
const promise_feed_of_type = calendar.__get__("promise_feed_of_type")

// @ponicode
describe("promise_feed_of_type", () => {
    test("0", () => {
        expect(promise_feed_of_type({ type: "array", feeds: "app.ponicode.com" }))
    })

    test("1", () => {
        expect(promise_feed_of_type({ type: "number", feeds: "Www.PoniCode.com" }))
    })

    test("2", () => {
        expect(promise_feed_of_type({ type: "string", feeds: "ponicode.com" }))
    })

    test("3", () => {
        expect(promise_feed_of_type({ type: "array", feeds: "https://ponicode.com" }))
    })

    test("4", () => {
        expect(promise_feed_of_type({ type: "object", feeds: "https://ponicode.com?a=1#2#3" }))
    })

    test("5", () => {
        expect(promise_feed_of_type({ type: "string", feeds: "https://ponicode.com?a=1#2#3" }))
    })

    test("6", () => {
        expect(promise_feed_of_type({ type: "array", feeds: "Www.PoniCode.com" }))
    })

    test("7", () => {
        expect(promise_feed_of_type({ type: "number", feeds: "https://ponicode.com?a=1&b=2" }))
    })

    test("8", () => {
        expect(promise_feed_of_type({ type: "array", feeds: "https://" }))
    })

    test("9", () => {
        expect(promise_feed_of_type({ type: "string", feeds: "https://ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/calendar.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promise_feed_of_type', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/calendar.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}