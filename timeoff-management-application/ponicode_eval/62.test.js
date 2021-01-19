
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js
const rewire = require("rewire")
const bankHolidays = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js")
const getAndValidateBankHoliday = bankHolidays.__get__("getAndValidateBankHoliday")

// @ponicode
describe("getAndValidateBankHoliday", () => {
    test("0", () => {
        expect(getAndValidateBankHoliday({ req: { body: [] }, id: "ponicodecom", itemName: "\"{\"x\":5,\"y\":6}\"" }))
    })

    test("1", () => {
        expect(getAndValidateBankHoliday({ req: { body: [] }, id: "ponicodecom", itemName: "\"\"2006-01-02T14:04:05.000Z\"\"" }))
    })

    test("2", () => {
        expect(getAndValidateBankHoliday({ req: { body: ["path/to/file.ext", ".", "path/to/file.ext", "./path/to/file", "path/to/file.ext", "path/to/folder/", "C:\\\\path\\to\\folder\\", "path/to/file.ext", ".", "./path/to/file"] }, id: "myDIV", itemName: "\"{\"x\":[10,null,null,null]}\"" }))
    })

    test("3", () => {
        expect(getAndValidateBankHoliday({ req: { body: ["./path/to/file", "./path/to/file", "C:\\\\path\\to\\file.ext"] }, id: "myDIV", itemName: "\"{\"x\":[10,null,null,null]}\"" }))
    })

    test("4", () => {
        expect(getAndValidateBankHoliday({ req: { body: ["path/to/folder/", "C:\\\\path\\to\\file.ext", "."] }, id: "ponicodecom", itemName: "\"\"2006-01-02T14:04:05.000Z\"\"" }))
    })

    test("5", () => {
        expect(getAndValidateBankHoliday({ req: { body: [] }, id: "ponicodecom", itemName: "\"{\"x\":[10,null,null,null]}\"" }))
    })

    test("6", () => {
        expect(getAndValidateBankHoliday({ req: { body: ["path/to/file.ext", "/path/to/file", "path/to/file.ext"] }, id: "ponicodecom", itemName: "\"{\"x\":[10,null,null,null]}\"" }))
    })

    test("7", () => {
        expect(getAndValidateBankHoliday({ req: { body: ["C:\\\\path\\to\\folder\\", ".", "C:\\\\path\\to\\folder\\"] }, id: "myDIV", itemName: "\"\"2006-01-02T14:04:05.000Z\"\"" }))
    })

    test("8", () => {
        expect(getAndValidateBankHoliday({ req: { body: ["./path/to/file", "./path/to/file", "C:\\\\path\\to\\folder\\", "./path/to/file", "path/to/file.ext", "path/to/folder/", "path/to/folder/", "path/to/file.ext", "/path/to/file", "."] }, id: "ponicodecom", itemName: "\"{\"x\":[10,null,null,null]}\"" }))
    })

    test("9", () => {
        expect(getAndValidateBankHoliday({ req: { body: [] }, id: "ponicodecom", itemName: "\"[3,\"false\",false]\"" }))
    })

    test("10", () => {
        expect(getAndValidateBankHoliday({ req: { body: ["C:\\\\path\\to\\folder\\", "C:\\\\path\\to\\folder\\", "path/to/folder/", "path/to/folder/", "path/to/file.ext", "./path/to/file", "path/to/folder/", "C:\\\\path\\to\\file.ext", ".", "C:\\\\path\\to\\folder\\"] }, id: "myDIV", itemName: "\"[3,\"false\",false]\"" }))
    })

    test("11", () => {
        expect(getAndValidateBankHoliday({ req: { body: ["path/to/folder/", ".", "./path/to/file", "C:\\\\path\\to\\folder\\", "/path/to/file", "path/to/folder/", "/path/to/file", "path/to/folder/", "path/to/file.ext", "C:\\\\path\\to\\folder\\"] }, id: "myDIV", itemName: "\"[3,\"false\",false]\"" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'getAndValidateBankHoliday', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}