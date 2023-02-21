# JavaScript

Each sub-directory provides its own configuration, README, and example files for different aspects or libraries of JavaScript coding.

<!-- MarkdownTOC -->

- Setup
- Running the Code
- License

<!-- /MarkdownTOC -->

## Setup

- `nvm install` will make sure that the correct version of Node.js is available
- `direnv allow` will establish a local environment using the correct version of Node.js

You can confirm that the above worked by comparing the output of these two commands:

- `node --version`
- `cat ./.nvmrc`

## Running the Code

All examples can be run by passing the path to the JavaScript module (the `.js` file) to the `node` executable after you've done the setup documented above.

For example:

```bash
❯ node ./filename.js
```

## License

See the top-level [LICENSE](../LICENSE) file for details.
