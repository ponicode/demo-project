
{
	
try {
    // /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/set_user_to_start_at_the_beginning_of_the_year.js
const rewire = require("rewire")
const set_user_to_start_at_the_beginning_of_the_year = rewire("/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/set_user_to_start_at_the_beginning_of_the_year.js")
const getUserId = set_user_to_start_at_the_beginning_of_the_year.__get__("getUserId")

// @ponicode
describe("getUserId", () => {
    test("0", () => {
        expect(getUserId({ userId: "123", email: "user.ponicode.com", driver: "app.ponicode.com" }))
    })

    test("1", () => {
        expect(getUserId({ userId: 0, email: "user@ponicode", driver: "https://ponicode.com/jobs" }))
    })

    test("2", () => {
        expect(getUserId({ userId: "", email: "User0@Ponicode.com", driver: "www.ponicode.com" }))
    })

    test("3", () => {
        expect(getUserId({ userId: "123", email: "user@ponicode.com", driver: "https://ponicode.com/jobs" }))
    })

    test("4", () => {
        expect(getUserId({ userId: "poni-code", email: "user1+user2@ponicode.com", driver: "www.ponicode.com" }))
    })

    test("5", () => {
        expect(getUserId({ userId: "123", email: "user.ponicode.com", driver: "Www.PoniCode.com" }))
    })

    test("6", () => {
        expect(getUserId({ userId: NaN, email: "User0@Ponicode.com", driver: "https://ponicode.com/jobs" }))
    })

    test("7", () => {
        expect(getUserId({ userId: "poni_code", email: "ponicode.com", driver: "www.ponicode.com" }))
    })

    test("8", () => {
        expect(getUserId({ userId: undefined, email: "User0@Ponicode.com", driver: "https://ponicode.com/jobs" }))
    })

    test("9", () => {
        expect(getUserId({ userId: false, email: "ponicode.com", driver: "https://ponicode.com?a=1#2#3" }))
    })

    test("10", () => {
        expect(getUserId({ userId: "poni_code", email: "user@ponicode.co.uk", driver: "app.ponicode.com" }))
    })
})

} catch (e) {
	console.log('[1;31mERROR on file /home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/set_user_to_start_at_the_beginning_of_the_year.js')
    require('fs').appendFileSync('ponicode_writer_error.log', JSON.stringify({'function_name':'getUserId', 'function_path':'/home/edmond/ponicode_data/harlequin/javascript/pitfall/kaleidoscope/timeoff-management-application/t/lib/set_user_to_start_at_the_beginning_of_the_year.js', 'error_message':e.message, 'error_name':e.name, 'error_stack':e.stack }) + '--HULI333--')
}

}