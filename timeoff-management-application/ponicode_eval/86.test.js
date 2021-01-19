
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/department_supervisor.js
const department_supervisor = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/department_supervisor.js")

// @ponicode
describe("department_supervisor", () => {
    test("0", () => {
        expect(department_supervisor("en", ".exe"))
    })

    test("1", () => {
        expect(department_supervisor("en", ".js"))
    })

    test("2", () => {
        expect(department_supervisor("de", ".py"))
    })

    test("3", () => {
        expect(department_supervisor("fr", ".json"))
    })

    test("4", () => {
        expect(department_supervisor("fr", ".png"))
    })

    test("5", () => {
        expect(department_supervisor("it", ".json"))
    })

    test("6", () => {
        expect(department_supervisor("cn", ".json"))
    })

    test("7", () => {
        expect(department_supervisor("de", ".png"))
    })

    test("8", () => {
        expect(department_supervisor("cn", ".exe"))
    })

    test("9", () => {
        expect(department_supervisor("en", ".png"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/department_supervisor.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/department_supervisor.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}