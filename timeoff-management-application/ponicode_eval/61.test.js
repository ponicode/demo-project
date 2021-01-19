
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js
const rewire = require("rewire")
const bankHolidays = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js")
const promiseNewBankHoliday = bankHolidays.__get__("promiseNewBankHoliday")

// @ponicode
describe("promiseNewBankHoliday", () => {
    test("0", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode.com", req: { body: { name__new: "object" } }, companyId: "user1+user2@ponicode.com" }))
    })

    test("1", () => {
        expect(promiseNewBankHoliday({ model: "user.ponicode.com", req: { body: { name__new: "number" } }, companyId: "ponicode.com" }))
    })

    test("2", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode.co.uk", req: { body: { name__new: "string" } }, companyId: "user@ponicode.com" }))
    })

    test("3", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode.com", req: { body: { name__new: "number" } }, companyId: "User0@Ponicode.com" }))
    })

    test("4", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode.co.uk", req: { body: { name__new: "object" } }, companyId: "1user@ponicode.com" }))
    })

    test("5", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode.co.uk", req: { body: { name__new: "string" } }, companyId: "User0@Ponicode.com" }))
    })

    test("6", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode.co.uk", req: { body: { name__new: "number" } }, companyId: "user1+user2@ponicode.com" }))
    })

    test("7", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode", req: { body: { name__new: "array" } }, companyId: "user.ponicode.com" }))
    })

    test("8", () => {
        expect(promiseNewBankHoliday({ model: "ponicode.com", req: { body: { name__new: "string" } }, companyId: "user@ponicode.com" }))
    })

    test("9", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode.co.uk", req: { body: { name__new: "object" } }, companyId: "user@ponicode" }))
    })

    test("10", () => {
        expect(promiseNewBankHoliday({ model: "user@ponicode.co.uk", req: { body: { name__new: "number" } }, companyId: "user@ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promiseNewBankHoliday', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/bankHolidays.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}