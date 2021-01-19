
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171228-add-time-zone-field-to-company.js
const _20171228_add_time_zone_field_to_company = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171228-add-time-zone-field-to-company.js")

// @ponicode
describe("_20171228_add_time_zone_field_to_company.down", () => {
    test("0", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode"))
    })

    test("1", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user.ponicode.com"))
    })

    test("2", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"{\"x\":5,\"y\":6}\"", "user1+user2@ponicode.com"))
    })

    test("3", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.com"))
    })

    test("4", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"{\"x\":[10,null,null,null]}\"", "1user@ponicode.com"))
    })

    test("5", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"[3,\"false\",false]\"", "user@ponicode.co.uk"))
    })

    test("6", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"{\"x\":5,\"y\":6}\"", "user.ponicode.com"))
    })

    test("7", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.com"))
    })

    test("8", () => {
        expect(_20171228_add_time_zone_field_to_company.down("\"[3,\"false\",false]\"", "ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171228-add-time-zone-field-to-company.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'down', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20171228-add-time-zone-field-to-company.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}