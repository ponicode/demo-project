
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/calculateCarryOverAllowance.js
const calculateCarryOverAllowance = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/calculateCarryOverAllowance.js")

// @ponicode
describe("calculateCarryOverAllowance.calculateCarryOverAllowance", () => {
    test("0", () => {
        expect(calculateCarryOverAllowance.calculateCarryOverAllowance({ users: "user@ponicode" }))
    })

    test("1", () => {
        expect(calculateCarryOverAllowance.calculateCarryOverAllowance({ users: "user@ponicode.com" }))
    })

    test("2", () => {
        expect(calculateCarryOverAllowance.calculateCarryOverAllowance({ users: "user.ponicode.com" }))
    })

    test("3", () => {
        expect(calculateCarryOverAllowance.calculateCarryOverAllowance({ users: "1user@ponicode.com" }))
    })

    test("4", () => {
        expect(calculateCarryOverAllowance.calculateCarryOverAllowance({ users: "User0@Ponicode.com" }))
    })

    test("5", () => {
        expect(calculateCarryOverAllowance.calculateCarryOverAllowance({ users: "user@ponicode.co.uk" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/calculateCarryOverAllowance.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'calculateCarryOverAllowance', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/calculateCarryOverAllowance.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}