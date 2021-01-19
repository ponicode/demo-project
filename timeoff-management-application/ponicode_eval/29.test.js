
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20181213-carry-over-conf.js
const _20181213_carry_over_conf = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20181213-carry-over-conf.js")

// @ponicode
describe("_20181213_carry_over_conf.up", () => {
    test("0", () => {
        expect(_20181213_carry_over_conf.up("\"\"2006-01-02T14:04:05.000Z\"\"", "User0@Ponicode.com"))
    })

    test("1", () => {
        expect(_20181213_carry_over_conf.up("\"{\"x\":5,\"y\":6}\"", "User0@Ponicode.com"))
    })

    test("2", () => {
        expect(_20181213_carry_over_conf.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.co.uk"))
    })

    test("3", () => {
        expect(_20181213_carry_over_conf.up("\"[3,\"false\",false]\"", "User0@Ponicode.com"))
    })

    test("4", () => {
        expect(_20181213_carry_over_conf.up("\"{\"x\":5,\"y\":6}\"", "user1+user2@ponicode.com"))
    })

    test("5", () => {
        expect(_20181213_carry_over_conf.up("\"\"2006-01-02T14:04:05.000Z\"\"", "user1+user2@ponicode.com"))
    })

    test("6", () => {
        expect(_20181213_carry_over_conf.up("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.co.uk"))
    })

    test("7", () => {
        expect(_20181213_carry_over_conf.up("\"{\"x\":[10,null,null,null]}\"", "User0@Ponicode.com"))
    })

    test("8", () => {
        expect(_20181213_carry_over_conf.up("\"[3,\"false\",false]\"", "user.ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20181213-carry-over-conf.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'up', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20181213-carry-over-conf.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}