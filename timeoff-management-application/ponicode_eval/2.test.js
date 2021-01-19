
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/audit.js
const audit = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/audit.js")

// @ponicode
describe("audit.getAudit", () => {
    test("0", () => {
        expect(audit.getAudit({ companyId: "user@ponicode.co.uk" }))
    })

    test("1", () => {
        expect(audit.getAudit({ companyId: "user@ponicode" }))
    })

    test("2", () => {
        expect(audit.getAudit({ companyId: "user1+user2@ponicode.com" }))
    })

    test("3", () => {
        expect(audit.getAudit({ companyId: "ponicode.com" }))
    })

    test("4", () => {
        expect(audit.getAudit({ companyId: "user.ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/audit.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'getAudit', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/model/audit.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}