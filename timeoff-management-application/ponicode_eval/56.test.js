
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20190629-add-is_team_view_hidden_field.js
const _20190629_add_is_team_view_hidden_field = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20190629-add-is_team_view_hidden_field.js")

// @ponicode
describe("_20190629_add_is_team_view_hidden_field.down", () => {
    test("0", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"[3,\"false\",false]\"", "user@ponicode.com"))
    })

    test("1", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user1+user2@ponicode.com"))
    })

    test("2", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"[3,\"false\",false]\"", "1user@ponicode.com"))
    })

    test("3", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"{\"x\":5,\"y\":6}\"", "user@ponicode"))
    })

    test("4", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode.com"))
    })

    test("5", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"{\"x\":5,\"y\":6}\"", "user.ponicode.com"))
    })

    test("6", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"[3,\"false\",false]\"", "user.ponicode.com"))
    })

    test("7", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"{\"x\":5,\"y\":6}\"", "user@ponicode.com"))
    })

    test("8", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"{\"x\":5,\"y\":6}\"", "User0@Ponicode.com"))
    })

    test("9", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"{\"x\":[10,null,null,null]}\"", "user@ponicode.com"))
    })

    test("10", () => {
        expect(_20190629_add_is_team_view_hidden_field.down("\"\"2006-01-02T14:04:05.000Z\"\"", "user@ponicode"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20190629-add-is_team_view_hidden_field.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'down', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/migrations/20190629-add-is_team_view_hidden_field.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}