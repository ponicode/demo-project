
const serviceWorker = require("./serviceWorker")
// @ponicode
describe("serviceWorker.register", () => {
    test("0", () => {
        serviceWorker.register(".")
    })

    test("1", () => {
        serviceWorker.register("./path/to/file")
    })

    test("2", () => {
        serviceWorker.register("C:\\\\path\\to\\file.ext")
    })

    test("3", () => {
        serviceWorker.register("/path/to/file")
    })
})


const rewire = require("rewire")
const serviceWorker = rewire("./serviceWorker")
const registerValidSW = serviceWorker.__get__("registerValidSW")
// @ponicode
describe("registerValidSW", () => {
    test("0", () => {
        registerValidSW("Www.PoniCode.com", "https://ponicode.com?a=1#2#3")
    })

    test("1", () => {
        registerValidSW("https://ponicode.com", "https://ponicode.com")
    })

    test("2", () => {
        registerValidSW("www.ponicode.com", "www.ponicode.com")
    })

    test("3", () => {
        registerValidSW("www.ponicode.com", "https://ponicode.com?a=1#2#3")
    })

    test("4", () => {
        registerValidSW("https://ponicode.com?a=1#2#3", "https://ponicode.com")
    })

    test("5", () => {
        registerValidSW("ponicode.com", "https://ponicode.com?a=1#2#3")
    })
})


const rewire = require("rewire")
const serviceWorker = rewire("./serviceWorker")
const checkValidServiceWorker = serviceWorker.__get__("checkValidServiceWorker")
// @ponicode
describe("checkValidServiceWorker", () => {
    test("0", () => {
        checkValidServiceWorker("https://", "https://ponicode.com?a=1&b=2")
    })

    test("1", () => {
        checkValidServiceWorker("www.ponicode.com", "https://ponicode.com?a=1&b=2")
    })

    test("2", () => {
        checkValidServiceWorker("app.ponicode.com", "Www.PoniCode.com")
    })

    test("3", () => {
        checkValidServiceWorker("https://ponicode.com/jobs", "ponicode.com")
    })

    test("4", () => {
        checkValidServiceWorker("Www.PoniCode.com", "app.ponicode.com")
    })

    test("5", () => {
        checkValidServiceWorker("ponicode.com", "https://ponicode.com?a=1#2#3")
    })
})


const serviceWorker = require("./serviceWorker")
// @ponicode
describe("serviceWorker.unregister", () => {
    test("0", () => {
        serviceWorker.unregister()
    })
})

