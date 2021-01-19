
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js
const user_importer = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js")

// @ponicode
describe("user_importer.add_user", () => {
    test("0", () => {
        expect(user_importer.add_user({ lastname: "\u062e\u0644\u064a\u0644", department_id: "Roma", name: "array", admin: "ponicode.com", company_id: "Roma", end_date: "01/01/2020", auto_approve: false, start_date: "20200101" }))
    })

    test("1", () => {
        expect(user_importer.add_user({ lastname: "edmond", department_id: "\u5317\u4eac", name: "array", admin: "user.ponicode.com", company_id: "New York", end_date: "1-1-2020", auto_approve: true, start_date: "01/01/2020" }))
    })

    test("2", () => {
        expect(user_importer.add_user({ lastname: "George", department_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e", name: "object", admin: "1user@ponicode.com", company_id: "Saint-Denis", end_date: "20200101", auto_approve: true, start_date: "1-1-2020" }))
    })

    test("3", () => {
        expect(user_importer.add_user({ lastname: "George", department_id: "\u5317\u4eac", name: "array", admin: "user.ponicode.com", company_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e", end_date: "01/13/2020", auto_approve: true, start_date: "20200101" }))
    })

    test("4", () => {
        expect(user_importer.add_user({ lastname: "edmond", department_id: "\u5317\u4eac", name: "string", admin: "user1+user2@ponicode.com", company_id: "New York", end_date: "1-1-2020", auto_approve: true, start_date: "01/13/2020" }))
    })

    test("5", () => {
        expect(user_importer.add_user({ lastname: "\u8427", department_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e", name: "object", admin: "user.ponicode.com", company_id: "Saint-Denis", end_date: "01/01/2020", auto_approve: true, start_date: "01/01/2020" }))
    })

    test("6", () => {
        expect(user_importer.add_user({ lastname: "George", department_id: "New York", name: "string", admin: "user1+user2@ponicode.com", company_id: "Saint-Denis", end_date: "1-1-2020", auto_approve: false, start_date: "01/13/2020" }))
    })

    test("7", () => {
        expect(user_importer.add_user({ lastname: "edmond", department_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e", name: "object", admin: "user@ponicode", company_id: "\u5317\u4eac", end_date: "1-1-2020", auto_approve: true, start_date: "01/01/2020" }))
    })

    test("8", () => {
        expect(user_importer.add_user({ lastname: "\u062e\u0644\u064a\u0644", department_id: "Saint-Denis", name: "array", admin: "1user@ponicode.com", company_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e", end_date: "01/01/2020", auto_approve: false, start_date: "01/01/2020" }))
    })

    test("9", () => {
        expect(user_importer.add_user({ lastname: "\u8427", department_id: "Roma", name: "array", admin: "User0@Ponicode.com", company_id: "New York", end_date: "1-1-2020", auto_approve: false, start_date: "1-1-2020" }))
    })

    test("10", () => {
        expect(user_importer.add_user({ lastname: "\u8427", department_id: "Paris", name: "array", admin: "user1+user2@ponicode.com", company_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e", end_date: "1-1-2020", auto_approve: true, start_date: "01/13/2020" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'add_user', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/user_importer.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}