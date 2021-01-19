
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/comment.js
const comment = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/comment.js")

// @ponicode
describe("comment.commentLeave", () => {
    test("0", () => {
        expect(comment.commentLeave({ leave: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", userId: "ponicode123" }, comment: "+'", companyId: "User0@Ponicode.com" }))
    })

    test("1", () => {
        expect(comment.commentLeave({ leave: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: "poni-code" }, comment: "-", companyId: "user@ponicode" }))
    })

    test("2", () => {
        expect(comment.commentLeave({ leave: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", userId: "poni-code" }, comment: "-", companyId: "user@ponicode.com" }))
    })

    test("3", () => {
        expect(comment.commentLeave({ leave: { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", userId: "ponicode" }, comment: "-", companyId: "ponicode.com" }))
    })

    test("4", () => {
        expect(comment.commentLeave({ leave: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: "poni-code" }, comment: "*", companyId: "user@ponicode.com" }))
    })

    test("5", () => {
        expect(comment.commentLeave({ leave: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: "123" }, comment: "-", companyId: "user@ponicode.co.uk" }))
    })

    test("6", () => {
        expect(comment.commentLeave({ leave: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: "poni code" }, comment: "-", companyId: "User0@Ponicode.com" }))
    })

    test("7", () => {
        expect(comment.commentLeave({ leave: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: "poni code" }, comment: "*", companyId: "user@ponicode" }))
    })

    test("8", () => {
        expect(comment.commentLeave({ leave: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: "poni-code" }, comment: "-", companyId: "ponicode.com" }))
    })

    test("9", () => {
        expect(comment.commentLeave({ leave: { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", userId: "poni_code" }, comment: "*", companyId: "ponicode.com" }))
    })

    test("10", () => {
        expect(comment.commentLeave({ leave: { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", userId: "poni code" }, comment: "+'", companyId: "user@ponicode.co.uk" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/comment.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'commentLeave', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/comment.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}