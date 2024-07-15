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
        let name= "Luke";
        let result = greet(name);
        expect(result).toEqual("Hello there!");
    });
    test("returns 'HELLO LUKE!'", function () {
        let result = greet("LUKE");
        expect(result).toEqual("HELLO LUKE!");
    });
    test("returns 'Hello, Jango and Boba!'", function () {
        let result = greet(["Jango", "Boba"]);
        expect(result).toEqual("Hello, Jango and Boba!");
    });
    test("returns 'Hello, Jango, Boba, Luke, and Cedric!'", function () {
        let result = greet(["Jango", "Boba", "Luke", "Cedric"]);
        expect(result).toEqual("Hello, Jango, Boba, Luke, and Cedric!");
    });
});