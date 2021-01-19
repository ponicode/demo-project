
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave/index.js")
const commentLeaveIfNeeded = index.__get__("commentLeaveIfNeeded")

// @ponicode
describe("commentLeaveIfNeeded", () => {
    test("0", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "foo bar", companyId: "user@ponicode" }))
    })

    test("1", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "Hello, world!", companyId: "1user@ponicode.com" }))
    })

    test("2", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "PONICODE", companyId: "user.ponicode.com" }))
    })

    test("3", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "H3ll0! P0n1c0d3 iz g00d", companyId: "ponicode.com" }))
    })

    test("4", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "H3ll0! P0n1c0d3 iz g00d", companyId: "1user@ponicode.com" }))
    })

    test("5", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "foo bar", companyId: "ponicode.com" }))
    })

    test("6", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "H3ll0! P0n1c0d3 iz g00d", companyId: "user.ponicode.com" }))
    })

    test("7", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "Welcome to Ponicode!", companyId: "user@ponicode.co.uk" }))
    })

    test("8", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "Foo bar", companyId: "1user@ponicode.com" }))
    })

    test("9", () => {
        expect(commentLeaveIfNeeded({ leave: "reply_click()", comment: "foo bar", companyId: "1user@ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'commentLeaveIfNeeded', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}