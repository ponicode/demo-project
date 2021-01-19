
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js")
const users_list_as_csv = index.__get__("users_list_as_csv")

// @ponicode
describe("users_list_as_csv", () => {
    test("0", () => {
        expect(users_list_as_csv("path/to/file.ext"))
    })

    test("1", () => {
        expect(users_list_as_csv("./path/to/file"))
    })

    test("2", () => {
        expect(users_list_as_csv("path/to/folder/"))
    })

    test("3", () => {
        expect(users_list_as_csv("/path/to/file"))
    })

    test("4", () => {
        expect(users_list_as_csv("C:\\\\path\\to\\file.ext"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'users_list_as_csv', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}