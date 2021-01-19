
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_day.js
const leave_day = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_day.js")

// @ponicode
describe("leave_day", () => {
    test("0", () => {
        expect(leave_day({ leave_type_id: "object", day_part: "20200101", sequelize: "de", date: "1-1-2020" }))
    })

    test("1", () => {
        expect(leave_day({ leave_type_id: "array", day_part: "01/01/2020", sequelize: "it", date: "20200101" }))
    })

    test("2", () => {
        expect(leave_day({ leave_type_id: "number", day_part: "01/01/2020", sequelize: "it", date: "01/13/2020" }))
    })

    test("3", () => {
        expect(leave_day({ leave_type_id: "string", day_part: "20200101", sequelize: "en", date: "01/13/2020" }))
    })

    test("4", () => {
        expect(leave_day({ leave_type_id: "array", day_part: "1-1-2020", sequelize: "it", date: "01/13/2020" }))
    })

    test("5", () => {
        expect(leave_day({ leave_type_id: "array", day_part: "20200101", sequelize: "cn", date: "01/01/2020" }))
    })

    test("6", () => {
        expect(leave_day({ leave_type_id: "number", day_part: "1-1-2020", sequelize: "cn", date: "1-1-2020" }))
    })

    test("7", () => {
        expect(leave_day({ leave_type_id: "number", day_part: "20200101", sequelize: "en", date: "01/13/2020" }))
    })

    test("8", () => {
        expect(leave_day({ leave_type_id: "number", day_part: "1-1-2020", sequelize: "ar", date: "01/01/2020" }))
    })

    test("9", () => {
        expect(leave_day({ leave_type_id: "array", day_part: "20200101", sequelize: "ru", date: "20200101" }))
    })

    test("10", () => {
        expect(leave_day({ leave_type_id: "number", day_part: "20200101", sequelize: "ru", date: "20200101" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_day.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'LeaveDay', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/leave_day.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}