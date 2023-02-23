# TypeScript Examples

Each sub-directory provides its own configuration, README, and example files for different aspects or libraries of TypeScript coding, which will need to be transpiled to JavaScript code for being able to run through Node.js or to be used in a contemporary Web Browser.

<!-- MarkdownTOC -->

- [Setup](#setup)
- [License](#license)
- [References](#references)

<!-- /MarkdownTOC -->

<a id="setup"></a>
## Setup

In general, each of the examples will have their own instructions just to be clear (from their own README files), but these common setup steps will most likely be used:

To run a TypeScript example with Node.js we actually have to first convert the TypeScript code to JavaScript, so that it can be passed to the JavaScript Interpreter (Node.js) _via_ the `node` command.

As such, most single-file examples will require these steps:

1. `nvm install` (Optional, first time only)
1. `direnv allow` (First time only)
1. `npm install` -- Install Dependencies
1. `npx tsc filename.ts` -- Transpile single TypeScript Module to JavaScript Module
1. `node filename.js` -- Run JavaScript Module

<a id="license"></a>
## License

See the top-level [LICENSE](../LICENSE) file for details.

<a id="references"></a>
## References

- https://code.visualstudio.com/docs/typescript/typescript-compiling
- https://en.wikipedia.org/wiki/TypeScript
- https://www.typescriptlang.org/
