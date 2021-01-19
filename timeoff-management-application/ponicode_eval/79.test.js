
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/integration/menu_bar_reflect_user.js
const rewire = require("rewire")
const menu_bar_reflect_user = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/integration/menu_bar_reflect_user.js")
const check_presense_promises = menu_bar_reflect_user.__get__("check_presense_promises")

// @ponicode
describe("check_presense_promises", () => {
    test("0", () => {
        expect(check_presense_promises({ presense: false, selectors: "it" }))
    })

    test("1", () => {
        expect(check_presense_promises({ presense: true, selectors: "en" }))
    })

    test("2", () => {
        expect(check_presense_promises({ presense: false, selectors: "ar" }))
    })

    test("3", () => {
        expect(check_presense_promises({ presense: false, selectors: "ru" }))
    })

    test("4", () => {
        expect(check_presense_promises({ presense: false, selectors: "fr" }))
    })

    test("5", () => {
        expect(check_presense_promises({ presense: true, selectors: "ar" }))
    })

    test("6", () => {
        expect(check_presense_promises({ presense: false, selectors: "de" }))
    })

    test("7", () => {
        expect(check_presense_promises({ presense: false, selectors: "en" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/integration/menu_bar_reflect_user.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'check_presense_promises', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/integration/menu_bar_reflect_user.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}