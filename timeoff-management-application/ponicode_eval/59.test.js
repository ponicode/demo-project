
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/email.js
const rewire = require("rewire")
const email = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/email.js")
const _promise_to_unfold_context = email.__get__("_promise_to_unfold_context")

// @ponicode
describe("_promise_to_unfold_context", () => {
    test("0", () => {
        expect(_promise_to_unfold_context({ type: "RECEIVE_MESSAGE", message: "Hello! How are you?" }))
    })

    test("1", () => {
        expect(_promise_to_unfold_context({ type: "ADD_TODO", text: "Build my first Redux app" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/email.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'_promise_to_unfold_context', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/email.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}