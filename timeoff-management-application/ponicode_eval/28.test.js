
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/comment.js
const comment = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/comment.js")

// @ponicode
describe("comment.getCommentsForLeave", () => {
    test("0", () => {
        expect(comment.getCommentsForLeave({ leave: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" } }))
    })

    test("1", () => {
        expect(comment.getCommentsForLeave({ leave: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" } }))
    })

    test("2", () => {
        expect(comment.getCommentsForLeave({ leave: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" } }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/comment.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'getCommentsForLeave', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/comment.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}