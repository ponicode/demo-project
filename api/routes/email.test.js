const { isEmailValid } = require("./email")

// @ponicode
describe("isEmailValid", () => {
            
    test('1', () => {
        expect(isEmailValid("王力@weibo.cn")).toBe(false); 
    })
            
    test('2', () => {
        expect(isEmailValid("chiara-.-kiki@libero.it")).toBe(true); 
    })
            
    test('3', () => {
        expect(isEmailValid("mark1992@hotmail.com")).toBe(true); 
    })
            
})
