# JavaScript: Strings and Templates

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

For example, this shows running one of the examples and what it's output will be:

```bash
❯ node ./templates-literal-age.js

Viola (Age: 22) enters stage left!
Orsino (Age: 24) enters stage right!
Olivia (Age: 21) enters stage left!
Sir Toby Belch (Age: 19) enters stage right!
Sir Andrew (Age: 21) enters stage left!
Malvolio (Age: 35) enters stage right!
Feste (Age: 27) enters stage left!
```

## License

See the top-level [LICENSE](../../LICENSE) file for details.
