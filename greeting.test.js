const greet = require('./greeting');

describe("greeting", function() {

    test("takes a string and returns a string", function () {
        let result = greet("Luke");
        expect(typeof result).toEqual("string");
    });

    test("returns 'Hello, Luke!'", function () {
        let result = greet("Luke");
        expect(result).toEqual("Hello, Luke!");
    });
});