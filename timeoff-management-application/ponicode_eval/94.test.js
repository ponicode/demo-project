
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user.js
const rewire = require("rewire")
const user = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user.js")
const get_class_methods = user.__get__("get_class_methods")

// @ponicode
describe("get_class_methods", () => {
    test("0", () => {
        expect(get_class_methods("fr"))
    })

    test("1", () => {
        expect(get_class_methods("ru"))
    })

    test("2", () => {
        expect(get_class_methods("ar"))
    })

    test("3", () => {
        expect(get_class_methods("en"))
    })

    test("4", () => {
        expect(get_class_methods("it"))
    })

    test("5", () => {
        expect(get_class_methods("de"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'get_class_methods', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}