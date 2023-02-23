# TypeScript: Classes

Object-Oriented Programming (OOP) is innately available in TypeScript, unlike JavaScript (before ES6/ECMAScript6), and more complex patterns can be used, generically. The JavaScript output from the transpiler may or may not produce JavaScript (ECMAScript) classes, because, depending on the compilation/transpilation target, the syntax for a Class may or may not exist.

<!-- MarkdownTOC -->

- [Setup](#setup)
- [License](#license)
- [References](#references)

<!-- /MarkdownTOC -->

<a id="setup"></a>
## Setup

To run a TypeScript example with Node.js we actually have to first convert the TypeScript code to JavaScript, so that it can be passed to the JavaScript Interpreter (Node.js) _via_ the `node` command.

In this directory, we are treating each TypeScript file (module) as its own example, so we are not using a `tsconfig.json` to define the "Project", here. As such, you'll note that we've preconfigured the `tsc` executable with a fixed `--target` option set to `es2022`. You can change this value, but please note that you'll find issues with some of the examples if you don't have a target of `es5` or higher (targets can be found in the link in the [References](#references) section).

1. `nvm install` (Optional, first time only)
1. `direnv allow` (First time only)
1. `npm install` -- Install Dependencies
1. `npm run transpile filename.ts` -- Transpile single TypeScript Module to JavaScript Module
1. `node filename.js` -- Run JavaScript Module

Note that per the `package.json`, we've created our own `transpile` script. There are a couple alternatives to this:

- We could have updated the `.envrc` file so that the executable `tsc` would be on the local `PATH`
- You can also directly use `npx tsc` to "save" yourself one word in the command length

Personally, it seems preferable to follow a pattern of being consistent around using `npm run` with the `package.json` Scripts that are customized through our own definitions, since this gives us a way to be self-consistent and to encourage common readability by letting other developers look to the `package.json` file so they know what is possible.

Since our documentation and explanations in this README and everything will consistently refer to the action of "transpiling" (compiling) the TypeScript files into JavaScript code that's run-able by Node.js, then it seems obvious to use `npm run transpile` as our named script for that action.

<a id="license"></a>
## License

See the top-level [LICENSE](../LICENSE) file for details.

<a id="references"></a>
## References

- https://code.visualstudio.com/docs/typescript/typescript-compiling
- https://en.wikipedia.org/wiki/TypeScript
- https://www.typescriptlang.org/
- https://www.typescriptlang.org/tsconfig#target (`tsc --target` Options explained here)
