
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/bank_holiday.js
const bank_holiday = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/bank_holiday.js")

// @ponicode
describe("bank_holiday", () => {
    test("0", () => {
        expect(bank_holiday("en", { DATE: "Mon Aug 03 12:45:00", STRING: "Hello, world!" }))
    })

    test("1", () => {
        expect(bank_holiday("de", { DATE: "Mon Aug 03 12:45:00", STRING: "Welcome to Ponicode!" }))
    })

    test("2", () => {
        expect(bank_holiday("it", { DATE: "2017-09-29T19:01:00.000", STRING: "Foo bar" }))
    })

    test("3", () => {
        expect(bank_holiday("it", { DATE: "2017-09-29T23:01:00.000Z", STRING: "Foo bar" }))
    })

    test("4", () => {
        expect(bank_holiday("it", { DATE: "2017-09-29T23:01:00.000Z", STRING: "foo bar" }))
    })

    test("5", () => {
        expect(bank_holiday("en", { DATE: "2017-09-29T23:01:00.000Z", STRING: "foo bar" }))
    })

    test("6", () => {
        expect(bank_holiday("it", { DATE: "2017-09-29T19:01:00.000", STRING: "Welcome to Ponicode!" }))
    })

    test("7", () => {
        expect(bank_holiday("ru", { DATE: "01:04:03", STRING: "H3ll0! P0n1c0d3 iz g00d" }))
    })

    test("8", () => {
        expect(bank_holiday("en", { DATE: "Mon Aug 03 12:45:00", STRING: "H3ll0! P0n1c0d3 iz g00d" }))
    })

    test("9", () => {
        expect(bank_holiday("ru", { DATE: "2017-09-29T23:01:00.000Z", STRING: "H3ll0! P0n1c0d3 iz g00d" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/bank_holiday.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/bank_holiday.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}