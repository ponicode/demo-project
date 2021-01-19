
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/schedule.js
const rewire = require("rewire")
const schedule = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/schedule.js")
const week_day_flag_setter = schedule.__get__("week_day_flag_setter")

// @ponicode
describe("week_day_flag_setter", () => {
    test("0", () => {
        expect(week_day_flag_setter(false))
    })

    test("1", () => {
        expect(week_day_flag_setter(true))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/schedule.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'week_day_flag_setter', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/schedule.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}