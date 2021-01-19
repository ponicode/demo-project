
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/middleware/session_aware_redirect.js
const session_aware_redirect = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/middleware/session_aware_redirect.js")

// @ponicode
describe("session_aware_redirect", () => {
    test("0", () => {
        expect(session_aware_redirect("https://ponicode.com?a=1&b=2", { redirect_with_session: false }, "Florida"))
    })

    test("1", () => {
        expect(session_aware_redirect("https://ponicode.com?a=1#2#3", { redirect_with_session: false }, "Abruzzo"))
    })

    test("2", () => {
        expect(session_aware_redirect("ponicode.com", { redirect_with_session: true }, "Abruzzo"))
    })

    test("3", () => {
        expect(session_aware_redirect("app.ponicode.com", { redirect_with_session: false }, "Abruzzo"))
    })

    test("4", () => {
        expect(session_aware_redirect("ponicode.com", { redirect_with_session: true }, "Florida"))
    })

    test("5", () => {
        expect(session_aware_redirect("https://ponicode.com/jobs", { redirect_with_session: false }, "Abruzzo"))
    })

    test("6", () => {
        expect(session_aware_redirect("Www.PoniCode.com", { redirect_with_session: false }, "Florida"))
    })

    test("7", () => {
        expect(session_aware_redirect("ponicode.com", { redirect_with_session: true }, "Alabama"))
    })

    test("8", () => {
        expect(session_aware_redirect("www.ponicode.com", { redirect_with_session: true }, "\u00cele-de-France"))
    })

    test("9", () => {
        expect(session_aware_redirect("Www.PoniCode.com", { redirect_with_session: false }, "\u00cele-de-France"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/middleware/session_aware_redirect.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/middleware/session_aware_redirect.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}