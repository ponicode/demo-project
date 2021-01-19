
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js
const index = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js")

// @ponicode
describe("index.extract_system_error_message", () => {
    test("0", () => {
        expect(index.extract_system_error_message(null))
    })

    test("1", () => {
        expect(index.extract_system_error_message(NaN))
    })

    test("2", () => {
        expect(index.extract_system_error_message(undefined))
    })

    test("3", () => {
        expect(index.extract_system_error_message(429))
    })

    test("4", () => {
        expect(index.extract_system_error_message(404))
    })

    test("5", () => {
        expect(index.extract_system_error_message(0))
    })

    test("6", () => {
        expect(index.extract_system_error_message(false))
    })

    test("7", () => {
        expect(index.extract_system_error_message(200))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'extract_system_error_message', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/error/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}