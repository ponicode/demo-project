
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user_allowance_adjustment.js
const user_allowance_adjustment = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user_allowance_adjustment.js")

// @ponicode
describe("user_allowance_adjustment", () => {
    test("0", () => {
        expect(user_allowance_adjustment("ar", { INTEGER: "1.2.3.4" }))
    })

    test("1", () => {
        expect(user_allowance_adjustment("de", { INTEGER: "192.168.99.101" }))
    })

    test("2", () => {
        expect(user_allowance_adjustment("de", { INTEGER: "1.2.3.4" }))
    })

    test("3", () => {
        expect(user_allowance_adjustment("en", { INTEGER: "1.2.3.4" }))
    })

    test("4", () => {
        expect(user_allowance_adjustment("ar", { INTEGER: "192.168.99.101" }))
    })

    test("5", () => {
        expect(user_allowance_adjustment("cn", { INTEGER: "150.151.152.153" }))
    })

    test("6", () => {
        expect(user_allowance_adjustment("it", { INTEGER: "1.2.3.4" }))
    })

    test("7", () => {
        expect(user_allowance_adjustment("it", { INTEGER: "150.151.152.153" }))
    })

    test("8", () => {
        expect(user_allowance_adjustment("en", { INTEGER: "192.168.99.101" }))
    })

    test("9", () => {
        expect(user_allowance_adjustment("fr", { INTEGER: "1.2.3.4" }))
    })

    test("10", () => {
        expect(user_allowance_adjustment("ru", { INTEGER: "192.168.99.101" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user_allowance_adjustment.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user_allowance_adjustment.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}