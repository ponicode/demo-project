
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/login.js
const rewire = require("rewire")
const login = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/login.js")
const get_url_to_site_root_for_anonymous_session = login.__get__("get_url_to_site_root_for_anonymous_session")

// @ponicode
describe("get_url_to_site_root_for_anonymous_session", () => {
    test("0", () => {
        expect(get_url_to_site_root_for_anonymous_session("ponicode.com"))
    })

    test("1", () => {
        expect(get_url_to_site_root_for_anonymous_session("www.ponicode.com"))
    })

    test("2", () => {
        expect(get_url_to_site_root_for_anonymous_session("Www.PoniCode.com"))
    })

    test("3", () => {
        expect(get_url_to_site_root_for_anonymous_session("https://"))
    })

    test("4", () => {
        expect(get_url_to_site_root_for_anonymous_session("https://ponicode.com?a=1&b=2"))
    })

    test("5", () => {
        expect(get_url_to_site_root_for_anonymous_session("https://ponicode.com"))
    })

    test("6", () => {
        expect(get_url_to_site_root_for_anonymous_session("https://ponicode.com?a=1#2#3"))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/login.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'get_url_to_site_root_for_anonymous_session', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/login.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}