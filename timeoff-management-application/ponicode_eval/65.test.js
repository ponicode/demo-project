
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/requests.js
const rewire = require("rewire")
const requests = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/requests.js")
const leave_request_action = requests.__get__("leave_request_action")

// @ponicode
describe("leave_request_action", () => {
    test("0", () => {
        expect(leave_request_action({ action: { type: "RECEIVE_MESSAGE", message: "Hello! How are you?" }, leave_action_method: { type: "ADD_TODO", text: "Build my first Redux app" } }))
    })

    test("1", () => {
        expect(leave_request_action({ action: { type: "RECEIVE_MESSAGE", message: "Hello! How are you?" }, leave_action_method: { type: "RECEIVE_MESSAGE", message: "Hello! How are you?" } }))
    })

    test("2", () => {
        expect(leave_request_action({ action: { type: "ADD_TODO", text: "Build my first Redux app" }, leave_action_method: { type: "ADD_TODO", text: "Build my first Redux app" } }))
    })

    test("3", () => {
        expect(leave_request_action({ action: { type: "ADD_TODO", text: "Build my first Redux app" }, leave_action_method: { type: "RECEIVE_MESSAGE", message: "Hello! How are you?" } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/requests.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'leave_request_action', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/requests.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}