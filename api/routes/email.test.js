
const email = require("./email")
// @ponicode
describe("email.isEmailValid", () => {
    test("0", () => {
        email.isEmailValid("1USER@PONICODE.COM")
    })

    test("1", () => {
        email.isEmailValid("User0@Ponicode.com")
    })

    test("2", () => {
        email.isEmailValid("user.ponicode.com")
    })

    test("3", () => {
        email.isEmailValid("user@ponicode")
    })

    test("4", () => {
        email.isEmailValid("user@ponicode.co.uk")
    })
})

