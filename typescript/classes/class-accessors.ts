/**
 * Simple Example Class enforcing Read-only Members with Accessor Methods
 *
 * References:
 * - https://www.typescriptlang.org/docs/handbook/2/classes.html
 */

/**
 * Greeter Class for Storing and Providing a Greeting
 */
class Greeter {
  private _name: string = "Stranger";
  private _greeting: string;

  public constructor(name?: string) {
    if (name) {
      this.name = name;
    } else {
      this.updateGreeting();
    }
    return;
  }

  public set name(name: string) {
    if (name) {
      this._name = name;
      this.updateGreeting();
    } else {}
    return;
  }

  public get name(): string {
    return this._name;
  }

  protected updateGreeting(): void {
    this._greeting = `Howdy, ${this._name}!`;
    return;
  }

  public get greeting(): string {
    return this._greeting;
  }
}

const folksyGreeter = new Greeter("y'all");
const unknownGreeter = new Greeter();

const folksyLog = `Folksy Greeting: \"${folksyGreeter.greeting}\"`;
const unknownLog = `Default Greeting: \"${unknownGreeter.greeting}\"`;

console.log(folksyLog);
console.log(unknownLog);
