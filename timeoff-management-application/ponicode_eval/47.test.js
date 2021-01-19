
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/public/js/global.js
const rewire = require("rewire")
const global = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/public/js/global.js")
const getUrlVars = global.__get__("getUrlVars")

// @ponicode
describe("getUrlVars", () => {
    test("0", () => {
        expect(getUrlVars(""))
    })

    test("1", () => {
        expect(getUrlVars("ponicode.com"))
    })

    test("2", () => {
        expect(getUrlVars("Www.PoniCode.com"))
    })

    test("3", () => {
        expect(getUrlVars(undefined))
    })

    test("4", () => {
        expect(getUrlVars(0))
    })

    test("5", () => {
        expect(getUrlVars("https://ponicode.com/jobs"))
    })

    test("6", () => {
        expect(getUrlVars(false))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/public/js/global.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'getUrlVars', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/public/js/global.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}