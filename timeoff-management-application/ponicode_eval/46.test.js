
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/team_view.js
const team_view = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/team_view.js")

// @ponicode
describe("team_view", () => {
    test("0", () => {
        expect(team_view({ base_date: "2017-09-29T23:01:00.000Z", end_date: "01/13/2020", user: "user@ponicode.com", start_date: "01/13/2020" }))
    })

    test("1", () => {
        expect(team_view({ base_date: "2017-09-29T23:01:00.000Z", end_date: "20200101", user: "user1+user2@ponicode.com", start_date: "20200101" }))
    })

    test("2", () => {
        expect(team_view({ base_date: "01:04:03", end_date: "20200101", user: "user.ponicode.com", start_date: "1-1-2020" }))
    })

    test("3", () => {
        expect(team_view({ base_date: "Mon Aug 03 12:45:00", end_date: "1-1-2020", user: "user1+user2@ponicode.com", start_date: "01/01/2020" }))
    })

    test("4", () => {
        expect(team_view({ base_date: "Mon Aug 03 12:45:00", end_date: "01/13/2020", user: "user@ponicode.com", start_date: "1-1-2020" }))
    })

    test("5", () => {
        expect(team_view({ base_date: "2017-09-29T19:01:00.000", end_date: "01/13/2020", user: "User0@Ponicode.com", start_date: "1-1-2020" }))
    })

    test("6", () => {
        expect(team_view({ base_date: "2017-09-29T23:01:00.000Z", end_date: "01/13/2020", user: "user@ponicode.com", start_date: "20200101" }))
    })

    test("7", () => {
        expect(team_view({ base_date: "Mon Aug 03 12:45:00", end_date: "01/01/2020", user: "user@ponicode.com", start_date: "01/01/2020" }))
    })

    test("8", () => {
        expect(team_view({ base_date: "2017-09-29T19:01:00.000", end_date: "01/13/2020", user: "1user@ponicode.com", start_date: "20200101" }))
    })

    test("9", () => {
        expect(team_view({ base_date: "01:04:03", end_date: "01/13/2020", user: "1user@ponicode.com", start_date: "01/13/2020" }))
    })

    test("10", () => {
        expect(team_view({ base_date: "2017-09-29T23:01:00.000Z", end_date: "20200101", user: "user@ponicode", start_date: "20200101" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/team_view.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'TeamView', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/team_view.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}