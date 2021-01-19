
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/middleware/ensure_user_is_admin.js
const ensure_user_is_admin = require("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/middleware/ensure_user_is_admin.js")

// @ponicode
describe("ensure_user_is_admin", () => {
    test("0", () => {
        expect(ensure_user_is_admin("https://ponicode.com", 429, "Abruzzo"))
    })

    test("1", () => {
        expect(ensure_user_is_admin("https://ponicode.com", 400, "Florida"))
    })

    test("2", () => {
        expect(ensure_user_is_admin("https://ponicode.com?a=1&b=2", 200, "\u00cele-de-France"))
    })

    test("3", () => {
        expect(ensure_user_is_admin("https://ponicode.com?a=1#2#3", 200, "\u00cele-de-France"))
    })

    test("4", () => {
        expect(ensure_user_is_admin("https://ponicode.com?a=1#2#3", 200, "Florida"))
    })

    test("5", () => {
        expect(ensure_user_is_admin("www.ponicode.com", 200, "\u00cele-de-France"))
    })

    test("6", () => {
        expect(ensure_user_is_admin("app.ponicode.com", 200, "Alabama"))
    })

    test("7", () => {
        expect(ensure_user_is_admin("https://ponicode.com/jobs", 400, "Florida"))
    })

    test("8", () => {
        expect(ensure_user_is_admin("Www.PoniCode.com", 429, "Abruzzo"))
    })

    test("9", () => {
        expect(ensure_user_is_admin("Www.PoniCode.com", 429, "Alabama"))
    })

    test("10", () => {
        expect(ensure_user_is_admin("app.ponicode.com", 400, "Florida"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/middleware/ensure_user_is_admin.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'__direct_export__', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/middleware/ensure_user_is_admin.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}