
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/reports.js
const rewire = require("rewire")
const reports = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/reports.js")
const render_allowancebytime = reports.__get__("render_allowancebytime")

// @ponicode
describe("render_allowancebytime", () => {
    test("0", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "01:04:03" } }, team_view_details: { related_departments: false, users_and_leaves: "user@ponicode.co.uk", current_department: "Saint-Denis" }, company: "\u8427" }))
    })

    test("1", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "Mon Aug 03 12:45:00" } }, team_view_details: { related_departments: true, users_and_leaves: "user1+user2@ponicode.com", current_department: "Paris" }, company: "\u8427" }))
    })

    test("2", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "01:04:03" } }, team_view_details: { related_departments: false, users_and_leaves: "user@ponicode.com", current_department: "Roma" }, company: "Jean-Philippe" }))
    })

    test("3", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "2017-09-29T19:01:00.000" } }, team_view_details: { related_departments: false, users_and_leaves: "user@ponicode", current_department: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e" }, company: "\u062e\u0644\u064a\u0644" }))
    })

    test("4", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "2017-09-29T19:01:00.000" } }, team_view_details: { related_departments: true, users_and_leaves: "ponicode.com", current_department: "\u5317\u4eac" }, company: "George" }))
    })

    test("5", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "Mon Aug 03 12:45:00" } }, team_view_details: { related_departments: true, users_and_leaves: "user1+user2@ponicode.com", current_department: "\u5317\u4eac" }, company: "\u062e\u0644\u064a\u0644" }))
    })

    test("6", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "Mon Aug 03 12:45:00" } }, team_view_details: { related_departments: true, users_and_leaves: "user1+user2@ponicode.com", current_department: "New York" }, company: "\u8427" }))
    })

    test("7", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "Mon Aug 03 12:45:00" } }, team_view_details: { related_departments: false, users_and_leaves: "User0@Ponicode.com", current_department: "Roma" }, company: "Jean-Philippe" }))
    })

    test("8", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "Mon Aug 03 12:45:00" } }, team_view_details: { related_departments: true, users_and_leaves: "user@ponicode", current_department: "\u5317\u4eac" }, company: "edmond" }))
    })

    test("9", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "01:04:03" } }, team_view_details: { related_departments: false, users_and_leaves: "ponicode.com", current_department: "\u5317\u4eac" }, company: "edmond" }))
    })

    test("10", () => {
        expect(render_allowancebytime({ req: { query: { as-csv: "2017-09-29T19:01:00.000" } }, team_view_details: { related_departments: true, users_and_leaves: "user@ponicode", current_department: "New York" }, company: "Pierre Edouard" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/reports.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'render_allowancebytime', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/reports.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}