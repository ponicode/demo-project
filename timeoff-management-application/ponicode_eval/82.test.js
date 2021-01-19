
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20190118-chnage-type-value-for-api-token.js
const _20190118_chnage_type_value_for_api_token = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20190118-chnage-type-value-for-api-token.js")

// @ponicode
describe("_20190118_chnage_type_value_for_api_token.up", () => {
    test("0", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })

    test("1", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"{\"x\":[10,null,null,null]}\"", "ponicode.com"))
    })

    test("2", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.com"))
    })

    test("3", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"[3,\"false\",false]\"", "user@ponicode"))
    })

    test("4", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.co.uk"))
    })

    test("5", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"{\"x\":5,\"y\":6}\"", "User0@Ponicode.com"))
    })

    test("6", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"\"2006-01-02T14:04:05.000Z\"\"", "User0@Ponicode.com"))
    })

    test("7", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"{\"x\":5,\"y\":6}\"", "user@ponicode"))
    })

    test("8", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"{\"x\":5,\"y\":6}\"", "ponicode.com"))
    })

    test("9", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"{\"x\":5,\"y\":6}\"", "1user@ponicode.com"))
    })

    test("10", () => {
        expect(_20190118_chnage_type_value_for_api_token.up("\"[3,\"false\",false]\"", "user@ponicode.co.uk"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20190118-chnage-type-value-for-api-token.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20190118-chnage-type-value-for-api-token.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}