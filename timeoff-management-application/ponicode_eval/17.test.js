
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/integration_api.js
const integration_api = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/integration_api.js")

// @ponicode
describe("integration_api", () => {
    test("0", () => {
        expect(integration_api(587))
    })

    test("1", () => {
        expect(integration_api(8000))
    })

    test("2", () => {
        expect(integration_api(3000))
    })

    test("3", () => {
        expect(integration_api(457))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/integration_api.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/integration_api.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}