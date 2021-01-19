
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/integration/team_view/basic_wall_chart.js
const rewire = require("rewire")
const basic_wall_chart = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/integration/team_view/basic_wall_chart.js")
const check_teamview = basic_wall_chart.__get__("check_teamview")

// @ponicode
describe("check_teamview", () => {
    test("0", () => {
        expect(check_teamview("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "user.ponicode.com"))
    })

    test("1", () => {
        expect(check_teamview("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "user@ponicode"))
    })

    test("2", () => {
        expect(check_teamview("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "user@ponicode.com"))
    })

    test("3", () => {
        expect(check_teamview("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", ""))
    })

    test("4", () => {
        expect(check_teamview("7289708e-b17a-477c-8a77-9ab575c4b4d8", "User0@Ponicode.com"))
    })

    test("5", () => {
        expect(check_teamview("7289708e-b17a-477c-8a77-9ab575c4b4d8", "user.ponicode.com"))
    })

    test("6", () => {
        expect(check_teamview("7289708e-b17a-477c-8a77-9ab575c4b4d8", "user1+user2@ponicode.com"))
    })

    test("7", () => {
        expect(check_teamview("03ea49f8-1d96-4cd0-b279-0684e3eec3a9", "ponicode.com"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/integration/team_view/basic_wall_chart.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'check_teamview', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/integration/team_view/basic_wall_chart.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}