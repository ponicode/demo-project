
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user.js
const rewire = require("rewire")
const user = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user.js")
const get_instance_methods = user.__get__("get_instance_methods")

// @ponicode
describe("get_instance_methods", () => {
    test("0", () => {
        expect(get_instance_methods("cn"))
    })

    test("1", () => {
        expect(get_instance_methods("it"))
    })

    test("2", () => {
        expect(get_instance_methods("de"))
    })

    test("3", () => {
        expect(get_instance_methods("ar"))
    })

    test("4", () => {
        expect(get_instance_methods("fr"))
    })

    test("5", () => {
        expect(get_instance_methods("en"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'get_instance_methods', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/db/user.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}