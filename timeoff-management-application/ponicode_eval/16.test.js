
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/schedule.js
const schedule = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/schedule.js")

// @ponicode
describe("schedule", () => {
    test("0", () => {
        expect(schedule("fr", { INTEGER: "150.151.152.153" }))
    })

    test("1", () => {
        expect(schedule("ru", { INTEGER: "192.168.99.101" }))
    })

    test("2", () => {
        expect(schedule("ru", { INTEGER: "150.151.152.153" }))
    })

    test("3", () => {
        expect(schedule("fr", { INTEGER: "1.2.3.4" }))
    })

    test("4", () => {
        expect(schedule("ar", { INTEGER: "150.151.152.153" }))
    })

    test("5", () => {
        expect(schedule("cn", { INTEGER: "150.151.152.153" }))
    })

    test("6", () => {
        expect(schedule("ru", { INTEGER: "1.2.3.4" }))
    })

    test("7", () => {
        expect(schedule("en", { INTEGER: "192.168.99.101" }))
    })

    test("8", () => {
        expect(schedule("de", { INTEGER: "150.151.152.153" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/schedule.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/schedule.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}