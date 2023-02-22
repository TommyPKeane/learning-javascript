/**
 * Simple Example Class
 *
 * References:
 * - https://www.typescriptlang.org/docs/handbook/classes.html
 */

/**
 * Greeter Class for Storing and Providing a Greeting
 */
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

const greeter = new Greeter("world");
const logMessage = `Greeting: ${greeter.greet()}`;

console.log(logMessage);
