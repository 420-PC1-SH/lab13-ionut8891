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
    test("returns 'Hello there!'", function () {
        let result = greet();
        expect(result).toEqual("Hello there!");
    });
    test("returns 'HELLO LUKE!'", function () {
        let result = greet("LUKE");
        expect(result).toEqual("HELLO LUKE!");
    });
});