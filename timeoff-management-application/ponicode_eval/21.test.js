
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/mock_express_request.js
const mock_express_request = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/mock_express_request.js")

// @ponicode
describe("mock_express_request", () => {
    test("0", () => {
        expect(mock_express_request({ params: "https://" }))
    })

    test("1", () => {
        expect(mock_express_request({ params: "www.ponicode.com" }))
    })

    test("2", () => {
        expect(mock_express_request({ params: "https://ponicode.com?a=1&b=2" }))
    })

    test("3", () => {
        expect(mock_express_request({ params: "https://ponicode.com" }))
    })

    test("4", () => {
        expect(mock_express_request({ params: "https://ponicode.com?a=1#2#3" }))
    })

    test("5", () => {
        expect(mock_express_request({ params: "ponicode.com" }))
    })

    test("6", () => {
        expect(mock_express_request({ params: "Www.PoniCode.com" }))
    })

    test("7", () => {
        expect(mock_express_request({ params: "app.ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/mock_express_request.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/mock_express_request.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}