
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js
const rewire = require("rewire")
const index = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js")
const ensure_user_id_is_integer = index.__get__("ensure_user_id_is_integer")

// @ponicode
describe("ensure_user_id_is_integer", () => {
    test("0", () => {
        expect(ensure_user_id_is_integer({ req: { user: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }, user_id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }))
    })

    test("1", () => {
        expect(ensure_user_id_is_integer({ req: { user: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }, user_id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }))
    })

    test("2", () => {
        expect(ensure_user_id_is_integer({ req: { user: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }, user_id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }))
    })

    test("3", () => {
        expect(ensure_user_id_is_integer({ req: { user: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, user_id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }))
    })

    test("4", () => {
        expect(ensure_user_id_is_integer({ req: { user: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, user_id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }))
    })

    test("5", () => {
        expect(ensure_user_id_is_integer({ req: { user: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }, user_id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'ensure_user_id_is_integer', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/users/index.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}