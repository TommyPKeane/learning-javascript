# JavaScript Nightmares

You may have thought that since JavaScript is a computer programming language, that it would be rational in its applied logic ... but you could not have possibly been more wrong!

Here are some examples of the horribly nightmarish things that can and do happen in JavaScript coding.

<!-- MarkdownTOC -->

- [Setup](#setup)
- [Running the Code](#running-the-code)
- [License](#license)

<!-- /MarkdownTOC -->

<a id="setup"></a>
## Setup

- `nvm install` will make sure that the correct version of Node.js is available
- `direnv allow` will establish a local environment using the correct version of Node.js

You can confirm that the above worked by comparing the output of these two commands:

- `node --version`
- `cat ./.nvmrc`

<a id="running-the-code"></a>
## Running the Code

All examples can be run by passing the path to the JavaScript module (the `.js` file) to the `node` executable after you've done the setup documented above.

For example:

```bash
❯ node ./filename.js
```

<a id="license"></a>
## License

See the top-level [LICENSE](../../LICENSE) file for details.
