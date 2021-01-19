
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20181119-integration-api-token-per-company.js
const _20181119_integration_api_token_per_company = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20181119-integration-api-token-per-company.js")

// @ponicode
describe("_20181119_integration_api_token_per_company.down", () => {
    test("0", () => {
        expect(_20181119_integration_api_token_per_company.down("\"{\"x\":5,\"y\":6}\"", "ponicode.com"))
    })

    test("1", () => {
        expect(_20181119_integration_api_token_per_company.down("\"{\"x\":5,\"y\":6}\"", "user@ponicode"))
    })

    test("2", () => {
        expect(_20181119_integration_api_token_per_company.down("\"[3,\"false\",false]\"", "1user@ponicode.com"))
    })

    test("3", () => {
        expect(_20181119_integration_api_token_per_company.down("\"\"2006-01-02T14:04:05.000Z\"\"", "ponicode.com"))
    })

    test("4", () => {
        expect(_20181119_integration_api_token_per_company.down("\"[3,\"false\",false]\"", "ponicode.com"))
    })

    test("5", () => {
        expect(_20181119_integration_api_token_per_company.down("\"{\"x\":5,\"y\":6}\"", "user@ponicode.com"))
    })

    test("6", () => {
        expect(_20181119_integration_api_token_per_company.down("\"[3,\"false\",false]\"", "user1+user2@ponicode.com"))
    })

    test("7", () => {
        expect(_20181119_integration_api_token_per_company.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user1+user2@ponicode.com"))
    })

    test("8", () => {
        expect(_20181119_integration_api_token_per_company.down("\"{\"x\":[10,null,null,null]}\"", "ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20181119-integration-api-token-per-company.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'down', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20181119-integration-api-token-per-company.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}