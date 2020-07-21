
const users = require("./users")
// @ponicode
describe("users.isAgeValid", () => {
    test("0", () => {
        users.isAgeValid(5, 35, 35)
    })

    test("1", () => {
        users.isAgeValid(5, 5, 5)
    })

    test("2", () => {
        users.isAgeValid(25, 35, 75)
    })

    test("3", () => {
        users.isAgeValid(18, 75, 18)
    })

    test("4", () => {
        users.isAgeValid(18, 25, 18)
    })

    test("5", () => {
        users.isAgeValid(25, 35, 25)
    })
})


const users = require("./users")
// @ponicode
describe("users.filterUsers", () => {
    test("0", () => {
        users.filterUsers(100, 25)
    })

    test("1", () => {
        users.filterUsers(0, 5)
    })

    test("2", () => {
        users.filterUsers(-1, 18)
    })

    test("3", () => {
        users.filterUsers(-1, 75)
    })

    test("4", () => {
        users.filterUsers(-1, 5)
    })

    test("5", () => {
        users.filterUsers(0, 75)
    })
})

