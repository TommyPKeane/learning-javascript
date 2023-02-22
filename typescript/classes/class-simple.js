/**
 * Simple Example Class
 *
 * References:
 * - https://www.typescriptlang.org/docs/handbook/classes.html
 */
/**
 * Greeter Class for Storing and Providing a Greeting
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var logMessage = "Greeting: ".concat(greeter.greet());
console.log(logMessage);
