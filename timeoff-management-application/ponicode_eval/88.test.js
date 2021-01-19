
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js
const rewire = require("rewire")
const departments = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js")
const promise_to_extract_company_and_department = departments.__get__("promise_to_extract_company_and_department")

// @ponicode
describe("promise_to_extract_company_and_department", () => {
    test("0", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "\u5317\u4eac" }, user: { id: "ponicodecom" } }, false))
    })

    test("1", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "Saint-Denis" }, user: { id: "ponicodecom" } }, true))
    })

    test("2", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e" }, user: { id: "myDIV" } }, true))
    })

    test("3", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "Roma" }, user: { id: "ponicodecom" } }, false))
    })

    test("4", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e" }, user: { id: "ponicodecom" } }, false))
    })

    test("5", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "Roma" }, user: { id: "ponicodecom" } }, true))
    })

    test("6", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "Saint-Denis" }, user: { id: "myDIV" } }, true))
    })

    test("7", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "Saint-Denis" }, user: { id: "ponicodecom" } }, false))
    })

    test("8", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "\u0627\u0644\u0631\u0650\u0651\u0628\u064e\u0627\u0637\u200e" }, user: { id: "ponicodecom" } }, true))
    })

    test("9", () => {
        expect(promise_to_extract_company_and_department({ params: { department_id: "\u5317\u4eac" }, user: { id: "myDIV" } }, true))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'promise_to_extract_company_and_department', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/lib/route/departments.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}